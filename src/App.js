import './App.css';
import Nav from './components/nav/Nav.js';
import ChineseSentenceMiner from './components/chinese-sentence-miner/ChineseSentenceMiner';
import UserSearch from './components/user-search/UserSearch';
import landingPage from './components/landing-page/landingPage';
import {HashRouter as Router, Switch, Route} from 'react-router-dom'; 
import Repositories from './components/repositories/Repositories';

function App() {
  return ( 
    <Router>
    <div className="App">
      <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/user-search" component ={UserSearch}/>
      <Route path="/repositories" component={Repositories}/>
      <Route path="/chinese-sentence-miner" component ={ChineseSentenceMiner}/>
      <Route path="/landing-page" component={landingPage}/>
      <Route path="/nav" component={Nav}/>
      </Switch>
    </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
)

export default App;
