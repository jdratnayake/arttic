import { useSelector } from "react-redux";

import "./CreatorTemplate.css";

import NavBarCreator from "../../components/NavBarCreator/NavBarCreator";
import NavBarAdmin from "../../components/NavBarAdmin/NavBarAdmin";
import SideNavBar from "../../components/SideNavBar/SideNavBar";
import SideNavBarAdmin0 from "../../components/SideNavBarAdmin0/SideNavBarAdmin0";

function CreatorTemplate({ children = "", sideNavBarIndex = "0" }) {
  const userInfo = useSelector((state) => state.userInfo);
  const { userId, type, accessToken, openSeaStatus } = userInfo.user;

  return (
    <span className="CreatorTemplate">
      {type > 2 && <NavBarCreator />}
      {type < 3 && <NavBarAdmin />}

      <div className="mt-2 feedBack wrapperCreator">
        <div className="row justify-content-center">
          <div className="col-md-3 sidebar-col ">
            {type > 2 && <SideNavBar sideNavBarIndex={sideNavBarIndex} />}
            {type < 3 && <SideNavBarAdmin0 sideNavBarIndex={sideNavBarIndex} />}
          </div>
          <div className="col-md-9 col-xs-12">{children}</div>
        </div>
      </div>
    </span>
  );
}

export default CreatorTemplate;
