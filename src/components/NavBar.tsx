import { NavLink } from "react-router-dom";


const NavBar = () => {
    return (
    <nav className="d-flex float-end">
      <NavLink to="/">
        <button className="btn btn-secondary mx-1">Courses</button>
      </NavLink>
      <NavLink to="/modules">
        <button className="btn btn-secondary mx-1">Modules</button>
      </NavLink>
      <NavLink to="/lessons">
        <button className="btn btn-secondary mx-1">Lessons</button>
      </NavLink>

    </nav>
  );
}

export default NavBar;