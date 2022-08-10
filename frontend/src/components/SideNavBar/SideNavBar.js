import "./SideNavBar.css";
import { FaBeer } from 'react-icons/fa';


function SideNavBar() {
    return (
        <span className="sideNavBar">
            <nav id="sidebar">
                <div className="content-top">
                    <ul className="list-unstyled">
                        <li className="activesb">
                            {/* <a><i className="bi bi-rss icon-theme"></i>Feed</a> */}
                            {/* <a><FontAwesomeIcon icon="fal fa-rss" />Feed</a> */}
                            {/* <FontAwesomeIcon icon={["fal", "coffee"]} /> */}
                            <FaBeer />

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
                        <li>
                            <a><i className="bi bi-graph-up icon-theme"></i>Statics</a>
                        </li>
                        <li>
                            <a><i className="bi bi-gear icon-theme"></i>Settings</a>
                        </li>
                        <li>
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