import { Link } from "react-router-dom";
import { useContextProvider } from '../Components/utils/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { theme, toggleTheme } = useContextProvider();

  return (
    <nav className={`${theme}`}>
      <Link to="/">
        <h4>Home</h4>
      </Link>
      <Link to="/contact">
        <h4>Contact</h4>
      </Link>
      <Link to="/favs">
        <h4>Favs</h4>
      </Link>
      <button onClick={toggleTheme}>
        {theme === "light" ? "🌙" : "☀️"}
      </button>
    </nav>
  )
}

export default Navbar