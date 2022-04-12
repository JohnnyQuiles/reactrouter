import { Link } from 'react-router-dom';

function NavBar() {
    return(
    <div>
        <Link to="/">Index</Link> |{" "}
        <Link to="/home">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/contact">Contact</Link>
    </div>
    )
}

export default NavBar;
