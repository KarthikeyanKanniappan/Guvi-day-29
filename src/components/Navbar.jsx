import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-dark bg-secondary p-4">
        <form className="form-inline">
          <Link className="btn btn-outline-light" type="button" to="/">
            HOME
          </Link>
          <Link
            className="btn btn-outline-light mx-4"
            type="button"
            to="/create"
          >
            ADD STUDENT
          </Link>
        </form>
      </nav>
      <Outlet />
    </div>
  );
};

export default Navbar;
