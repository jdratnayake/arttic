import "./SideNavBar.css";


function SideNavBar() {
    return (
        <>
            <nav id="sidebar">
                <div className="content-top">
                    <ul class="list-unstyled">
                        <li class="activesb">
                            <a><i class="bi bi-rss icon-theme"></i>Feed</a>
                        </li>
                        <li>
                            <a><i class="bi bi-people-fill icon-theme"></i>Find Creators</a>
                        </li>
                        <li>
                            <a><i class="bi bi-star icon-theme"></i>Favourits</a>
                        </li>
                        <li>
                            <a><i class="bi bi-chat-dots icon-theme"></i>Chat</a>
                        </li>
                        <li>
                            <a><i class="bi bi-graph-up icon-theme"></i>Statics</a>
                        </li>
                        <li>
                            <a><i class="bi bi-gear icon-theme"></i>Settings</a>
                        </li>
                        <li>
                            <a><i class="bi bi-badge-ad-fill icon-theme"></i>Advertisment</a>
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
        </>
    )
}

export default SideNavBar;