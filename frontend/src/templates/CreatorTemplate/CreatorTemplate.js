import "./CreatorTemplate.css";

import NavBarCreator from "../../components/NavBarCreator/NavBarCreator";
import SideNavBar from "../../components/SideNavBar/SideNavBar";

function CreatorTemplate({ children = "" }) {
    return (
        <span className="CreatorTemplate">

            <NavBarCreator />
            <div className="container mt-2 feedBack wrapperCreator">
                <div className="row justify-content-center">

                    <div className="col-md-3 sidebar-col ">
                        <SideNavBar />
                    </div>
                    <div className="col-md-9 col-xs-12">
                        {children}
                    </div>
                </div>
            </div>

        </span>
    );
}

export default CreatorTemplate;