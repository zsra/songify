import Player from '../player/Player';
import User from '../user/User';
import './Menu.css';

function Menu() {
  return (
    <div className="Menu">
        <User />
        <div className="menu-items">
            
        </div>
        <Player />
    </div>
  );
}

export default Menu;