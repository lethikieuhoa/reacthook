import './Nav.css';
import {

    Link, NavLink
} from "react-router-dom";
const Nav = () => {
    return (
        <div className="topnav">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/timer">Timer App</NavLink>
            <NavLink to="/todo">Todo Apps</NavLink>
            <NavLink to="/blog">Blog Apps</NavLink>
            <NavLink to="/secret">Secret</NavLink>
        </div>
    );
}
export default Nav;