import "./CreatorCard.css";
import { Link } from "react-router-dom";

function CreatorCard(props) {

  return (
    <span className="creatorCard">
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
              <h5 class="mb-0">{props.name}</h5>
              <span class="text-muted d-block mb-2"></span>

              <Link to={"/viewuserprofile/" + props.userId}>
                <button class="btn btn-secondary btn-sm follow">
                  Go to Profile
                </button>
              </Link>

              <div class="d-flex justify-content-between align-items-center mt-4 px-4">
                <div class="stats">
                  <h6 class="mb-0">Followers - {props.subCount}</h6>
                  <span></span>
                </div>

                <div class="stats">
                  <h6 class="mb-0">Posts : 142</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </span>
  );
}

export default CreatorCard;
