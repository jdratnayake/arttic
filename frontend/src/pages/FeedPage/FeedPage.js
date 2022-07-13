import "./FeedPage.css";

import NavBar from "../../components/NavBar/NavBar";
import SideNavBar from "../../components/SideNavBar/SideNavBar";
import Post from "../../components/Post/Post";
import Ad from "../../components/Ad/Ad";
import CreatePost from "../../components/Post/CreatePost";
import t from '../../images/NFTs/monkey-removebg.png';

function FeedPage() {
    return (
        <>
            <NavBar />
            <div class="container mt-2">
                <div class="row">
                    <div class="col-3">
                        <SideNavBar />
                    </div>
                    <div class="col-6 p-0 feedBody">
                        <div class="container-fluid p-0 feedPage">
                            <div class="container feed-container">
                            <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
                                <div class="toast-body">
                                    Hello, world! This is a toast message.
                                    <div class="mt-2 pt-2 border-top">
                                    <button type="button" class="btn btn-primary btn-sm">Take action</button>
                                    <button type="button" class="btn btn-secondary btn-sm" data-bs-dismiss="toast">Close</button>
                                    </div>
                                </div>
                                </div>
                                <CreatePost/>
                                <Post image={t} name={"Peter Pan"} date={"2022-07-13"}/>
                                <Post image={t} name={"Peter Pan"} date={"2022-07-13"}/>
                            </div>
                        </div>
                    </div>
                    <div class="col-3">
                         <Ad/>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default FeedPage;