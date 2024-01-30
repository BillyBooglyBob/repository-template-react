import { Link, Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      <div id="sidebar">
        <nav>
          <ul>
            <li>
              <Link to={"/home"}>Home</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}