import "./CreatorCard.css";

function CreatorCard() {
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
                  src="https://i.imgur.com/JgYD2nQ.jpg"
                  class="rounded-circle"
                  width="80"
                />
              </div>
            </div>

            <div class="mt-5 text-center">
              <h5 class="mb-0">Benjamin Tims</h5>
              <span class="text-muted d-block mb-2">Los Angles</span>

              <button class="btn btn-primary btn-sm follow">Follow</button>

              <div class="d-flex justify-content-between align-items-center mt-4 px-4">
                <div class="stats">
                  <h6 class="mb-0">Followers</h6>
                  <span>8,797</span>
                </div>

                <div class="stats">
                  <h6 class="mb-0">Posts</h6>
                  <span>142</span>
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
