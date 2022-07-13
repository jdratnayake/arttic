import "./FeedPage.css";

import NavBar from "../../components/NavBar/NavBar";
import SideNavBar from "../../components/SideNavBar/SideNavBar";
import Post from "../../components/Post/Post";

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
                                <Post image={t}/>
                            </div>
                        </div>
                    </div>
                    <div class="col-3  add">
                        Add
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default FeedPage;