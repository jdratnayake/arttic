import "./Admin0Template.css";

import NavBar from "../../components/NavBar/NavBar";
import SideNavBarAdmin0 from "../../components/SideNavBarAdmin0/SideNavBarAdmin0";

function Admin0Template({ children = "" }) {
  return (
    <span className="admin0Template">
      <NavBar />
      <div className="wrapperAdmin">
        <SideNavBarAdmin0 />

        <div id="contentAdmin">{children}</div>
      </div>
    </span>
  );
}

export default Admin0Template;
