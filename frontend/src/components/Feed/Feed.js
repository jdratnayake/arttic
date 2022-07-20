import React from "react";

import Post from "../../components/Post/Post";
import Ad from "../../components/Ad/Ad";
import CreatePost from "../../components/Post/CreatePost";
import t from '../../images/NFTs/monkey-removebg.png';

function Feed() {
  return (
    <div className="row p-0 m-0">
      <div class="col-sm-8 col-xs-12 p-0 feedBody">
        <div class="container-fluid p-0 feedPage">
          <div class="container feed-container">
            <div
              class="toast"
              role="alert"
              aria-live="assertive"
              aria-atomic="true"
            >
              <div class="toast-body">
                Hello, world! This is a toast message.
                <div class="mt-2 pt-2 border-top">
                  <button type="button" class="btn btn-primary btn-sm">
                    Take action
                  </button>
                  <button
                    type="button"
                    class="btn btn-secondary btn-sm"
                    data-bs-dismiss="toast"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
            <CreatePost />
            <Post
              image={t}
              name={"Peter Pan"}
              date={"2022-07-13"}
              title={"New album"}
              desc={"When the bass drops, so do my problems."}
            />
            <Post
              image={t}
              name={"Peter Pan"}
              date={"2022-07-13"}
              title={"Happy Holiday"}
              desc={
                "When the bass drops, so do my problems.When the bass drops, so do my problems."
              }
            />
          </div>
        </div>
      </div>
      <div class="col-sm-4 sidebar-col">
        <Ad />
      </div>
    </div>
  );
}

export default Feed;
