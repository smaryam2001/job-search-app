import { Paper } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import "./style.css";

export const Header = () => {
  return (
    <header className="mainHeader">
      <Paper className="mainHeaderInner">
        <nav>
          <NavLink exact to="/jobs" activeClassName="activeLink">
            Вакансии
          </NavLink>
          <NavLink exact to="/resumes" activeClassName="activeLink">
            Резюме
          </NavLink>
        </nav>
      </Paper>
    </header>
  );
};
