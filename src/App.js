import { Outlet, Link } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <h1>REACT ROUTER!</h1>
      <nav style={{ borderBottom: "solid 1px", paddingBottom: "1rem", }}>
        <Link to="/home">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/contact">Contact</Link>
      </nav>
      <Outlet />
    </div>
  );
}
