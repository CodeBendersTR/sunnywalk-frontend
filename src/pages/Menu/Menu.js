import "./Menu.css";
import { NavLink } from "react-router-dom";

function Menu(props) {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <NavLink exact to="/home">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/profile">
                            Profile
                        </NavLink>
                    </li>
                </ul>
            </nav>
            {props.children}
        </div>
    );
}

export default Menu;
