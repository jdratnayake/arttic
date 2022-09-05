import "./UserCard.css";
import { Link } from "react-router-dom";

function UserCard(props) {

    return (
        <span className="UserCard">
            <div class="col mb-4">
                <div class="container d-flex justify-content-center align-items-center">
                    <div class="card">
                        <div class="upper">
                            <img src="https://i.imgur.com/Qtrsrk5.jpg" class="img-fluid" />
                        </div>

                        <div class="user text-center">
                            <div class="profile">
                                <img
                                    src={props.profilePhoto}
                                    class="rounded-circle"
                                    width="80"
                                />
                            </div>
                        </div>

                        <div class="mt-5 text-center">
                            <h5 class="mb-1">{props.name}</h5>
                            {props.type == 3 && (
                                <span class="text-muted d-block mb-3">Creator Account</span>
                            )}
                            {props.type == 4 && (
                                <span class="text-muted d-block mb-3">Follower Account</span>
                            )}
                            <Link to={"/viewuserprofile/" + props.userId}>
                                <button class="btn btn-secondary btn-sm follow">
                                    Go to Profiles
                                </button>
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </span>
    );
}

export default UserCard;
