import "./Admin0Template.css";

import NavBarAdmin from "../../components/NavBarAdmin/NavBarAdmin";
import SideNavBarAdmin0 from "../../components/SideNavBarAdmin0/SideNavBarAdmin0";

function Admin0Template({ children = "", sideNavBarIndex = "0" }) {
  return (
    <span className="admin0Template">
      <NavBarAdmin />
      <div className="wrapperAdmin">
        <SideNavBarAdmin0 sideNavBarIndex={sideNavBarIndex} />

        <div id="contentAdmin">{children}</div>
      </div>
    </span>
  );
}

export default Admin0Template;
