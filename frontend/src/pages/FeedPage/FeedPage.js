import "./FeedPage.css";
import { useState } from "react";


import NavBar from "../../components/NavBar/NavBar";
import SideNavBar from "../../components/SideNavBar/SideNavBar";
import Ad from "../../components/Ad/Ad";
import Feed from "../../components/Feed/Feed";
import Settings from "../../components/Settings/Settings";

function FeedPage() {
    const [component, setComponent] = useState("Feed");

    const handleClick = (component) => {
        switch (component) {
            case "Feed":
                setComponent("Feed")
                break;
            case "FindCreators":
                setComponent("FindCreators")
                break;
            case "Favourites":
                setComponent("Favourite")
                break;
            case "Chat":
                setComponent("Chat")
                break;
            case "Statics":
                setComponent("Statics")
                break;
            case "Settings":
                setComponent("Settings")
                break;
            case "Advertisment":
                setComponent("Advertisment")
                break;
        }
    }
    return (
        <>
            <NavBar />
            <div class="container mt-2 feedBack">
                <div class="row justify-content-center">
                    <div class="col-md-3 sidebar-col">
                        <nav id="sidebar">
                            <div className="content">
                                <ul class="list-unstyled">
                                    <li class="activesb">
                                        <a onClick={() => handleClick("Feed")}><i class="bi bi-rss icon-theme"></i>Feed</a>
                                    </li>
                                    <li>
                                        <a onClick={() => handleClick("FindCreators")}><i class="bi bi-people-fill icon-theme"></i>Find Creators</a>
                                    </li>
                                    <li>
                                        <a onClick={() => handleClick("Favourite")}><i class="bi bi-star icon-theme"></i>Favourits</a>
                                    </li>
                                    <li>
                                        <a onClick={() => handleClick("Chat")}><i class="bi bi-chat-dots icon-theme"></i>Chat</a>
                                    </li>
                                    <li>
                                        <a onClick={() => handleClick("Statics")}><i class="bi bi-graph-up icon-theme"></i>Statics</a>
                                    </li>
                                    <li>
                                        <a onClick={() => handleClick("Settings")} ><i class="bi bi-gear icon-theme"></i>Settings</a>
                                    </li>
                                    <li>
                                        <a onClick={() => handleClick("Advertisment")}><i class="bi bi-badge-ad-fill icon-theme"></i>Advertisment</a>
                                    </li>
                                </ul><br />

                                <div className="premium">
                                    <div className="content-pre">
                                        <p>
                                            Upgrade to premimum <i class="bi bi-gem icon-pre"></i>
                                        </p>
                                        <p>
                                            small description on to have
                                            interest on premium package
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </nav>
                        {/* <SideNavBar /> */}
                    </div>
                    <div className="col-md-9 col-xs-12">
                        {component === 'Feed' && <Feed />}
                        {component === 'Settings' && <Settings />}
                        {component === 'Advertisment' && <Ad />}
                    </div>

                    {/*  */}
                </div>
            </div>

        </>
    )
}

export default FeedPage;