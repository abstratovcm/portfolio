import {Link} from 'react-router-dom' 

function Nav() {
    const navStyle = {
        color: 'white'
    }
  return (
    <nav>
        <h3>Logo</h3>
        <ul className="nav-links">
            <Link style={navStyle} to='/user-search'>
            <li>UserSearch</li>
            </Link>
            <Link style={navStyle} to='/chinese-sentence-miner'>
            <li>ChineseSentenceMiner</li>
            </Link>
        </ul>
    </nav>
  );
}

export default Nav;
