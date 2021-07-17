import { useState } from 'react';
import '../../App.css';
import styles from '../../components/chinese-sentence-miner/classes.module.css';
import {sentences} from '../../components/chinese-sentence-miner/database';

const styledTags = require("../../components/chinese-sentence-miner/StyledTags")

function ChineseSentenceMiner() {

  const [text, setText] = useState('')
  const [en, setEn] = useState('')
  const [zh, setZh] = useState('')

  document.title ="Chinese Sentence Miner"

  return (
    <div style={ rootStyle }>
      <div>
        <p className={styles.title}>Mandarin Chinese<br/><b>Phrases</b></p>
      </div>
      <form action="" onSubmit={handleText} id="formInput">
        <styledTags.Input type="text" autocomplete="off" value={text} onChange={e => setText(e.target.value)} placeholder="try '[en] cat' or '[zh] 猫'"/>
        <div>
          <styledTags.Button type="button" onClick={random}>Random</styledTags.Button>
          <styledTags.Button type="button" onClick={handleText}>Search</styledTags.Button>
        </div>
      </form>
      <div className={styles.container}>
        <div className={styles.sentence}>{en}</div>
        <div className={styles.sentence}>{zh}</div>
      </div>
    </div>
  );

  function handleText(e) {
    e.preventDefault()
    if (text === '' || text === null) return
    if (text.trim().slice(0,4) === '[en]') {
      if(text.trim().slice(4).trim() === '') {colorWarning(text); return}
      for (let e of sentences) {
        if (e.en.toLowerCase().includes(text.trim().slice(4).trim().toLowerCase())) {
          setEn(sentences[e.id].en)
          setZh(sentences[e.id].zh)
          setText('')
          return
        } 
      }
      colorWarning(text); return
    }
    else if (text.trim().slice(0,4) === '[zh]') {
      if(text.trim().slice(4).trim() === '') {colorWarning(text); return}
      for (let e of sentences) {
        if (e.zh.toLowerCase().includes(text.trim().slice(4).trim().toLowerCase())) {
          setEn(sentences[e.id].en)
          setZh(sentences[e.id].zh)
          setText('')
          return
        } 
      }
      colorWarning(text); return
    }
    else {colorWarning(text); return}
  }

  function colorWarning(t) {
      document.documentElement.style.setProperty('--light-color', '#e2a596')
      setText('nothing here')
      setTimeout(function(){
        document.documentElement.style.setProperty('--light-color', '#96d3e2')
        setText(t)
    },400)
  }

  function random() {
    let number = -1
    while (true) {
      number = Math.floor(Math.random() * sentences.length)
      if (zh !== sentences[number].zh) break
    }
    if (number >= 0) {
      setEn(sentences[number].en)
      setZh(sentences[number].zh)
    }
  }

}
var rootStyle = {
  height: '100vh',
  minheight : '100vh',
  background: '#1f1f1f',
  textalign: 'center',
  fontsize: '20px'
}

export default ChineseSentenceMiner;
