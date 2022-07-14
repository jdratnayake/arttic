import NavBarCreator from "../../components/NavBarCreator/NavBarCreator";
import "./CreatorProfilePage.css";
import profile from "../../images/users/pic4.png";

function CreatorProfilePage() {
    return (
        <>
            <NavBarCreator />

            <div>
                <div class="main-container">
                    <div class="profile">
                        <div class="profile-avatar">
                            <img src={profile} alt="" class="profile-img" />
                                <div class="profile-name">User Name</div>
                        </div>
                        <img src="https://images.unsplash.com/photo-1508247967583-7d982ea01526?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80" alt="" class="profile-cover" />
                            <div class="profile-menu">
                                <a class="profile-menu-link">Timeline</a>
                                <a class="profile-menu-link">About</a>
                                <a class="profile-menu-link">Friends</a>
                                <a class="profile-menu-link">Photos</a>
                                <a class="profile-menu-link">More</a>
                            </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreatorProfilePage;