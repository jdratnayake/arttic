import {
    useNavigate,
} from "react-router-dom";

import "./SideNavBar.css";


function SideNavBar() {

    const navigate = useNavigate();

    return (
        <span className="sideNavBar">
            <nav id="sidebar">
                <div className="content-top">
                    <ul className="list-unstyled">
                        <li className="activesb" onClick={() => { navigate("/feed"); }}
                        >
                            <a><i className="bi bi-rss icon-theme"></i>Feed</a>
                        </li>
                        <li>
                            <a><i className="bi bi-people-fill icon-theme"></i>Find Creators</a>
                        </li>
                        <li>
                            <a><i className="bi bi-star icon-theme"></i>Favourits</a>
                        </li>
                        <li>
                            <a><i className="bi bi-chat-dots icon-theme"></i>Chat</a>
                        </li>
                        <li onClick={() => { navigate("/creator/analytics"); }}
                        >
                            <a><i className="bi bi-graph-up icon-theme"></i>Statics</a>
                        </li>
                        <li onClick={() => { navigate("/settings"); }}
                        >
                            <a><i className="bi bi-gear icon-theme"></i>Settings</a>
                        </li>
                        <li onClick={() => { navigate("/Advertisment"); }}
                        >
                            <a><i className="bi bi-badge-ad-fill icon-theme"></i>Advertisment</a>
                        </li>
                    </ul><br />

                    <div className="premium">
                        <div className="content-pre">
                            <p className="para">
                                Upgrade to premimum <i className="bi bi-gem icon-pre"></i>
                            </p>
                            <p className="para">
                                small description on to have
                                interest on premium package
                            </p>
                        </div>
                    </div>

                </div>
            </nav>
        </span>
    )
}

export default SideNavBar;