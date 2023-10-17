import './Header.css';
import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <>
      <h1>To DO App</h1>
      <nav>
        <ul>
          <li>
            <Link to="/" >Home</Link>
          </li>
          <li>
            <Link to="/tasks" >TaskList</Link>
          </li>
          <li>
            <Link to="/about-us" >AboutUs</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}