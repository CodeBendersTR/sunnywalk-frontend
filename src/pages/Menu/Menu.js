import "./Menu.css";
import { NavLink } from "react-router-dom";

function Menu(props) {
    return (
        <div>
            <nav>
                <ul>
                    <li><script>
                        <NavLink exact to="/home">
                            Home
                        </NavLink>
                    </script></li>
                    <li><script>
                        <NavLink exact to="/profile">
                            Profile
                        </NavLink>
                    </script></li>
                </ul>
            </nav>
            {props.children}
        </div>
    );
}

export default Menu;
