import './Home.css';

export default function Home (props) {
    // Home page with Friends button
    return (
        <div className='app__navbar'>
          <span onClick={() => {props.setVisibleFriends(!props.visibleFriends)}} className='app__navbar-span'>Friends</span>
        </div>
    );
}