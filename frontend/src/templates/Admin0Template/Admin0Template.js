import "./Admin0Template.css";

import NavBarCreator from "../../components/NavBarCreator/NavBarCreator";
import SideNavBarAdmin0 from "../../components/SideNavBarAdmin0/SideNavBarAdmin0";

function Admin0Template({ children = "" }) {
  return (
    <span className="admin0Template">
            <NavBarCreator />
      <div className="wrapperAdmin">
        <SideNavBarAdmin0 />

        <div id="contentAdmin">{children}</div>
      </div>
    </span>
  );
}

export default Admin0Template;
