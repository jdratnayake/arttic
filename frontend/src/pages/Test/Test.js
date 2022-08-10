import React from "react";

import InputBox from "../../components/InputBox/InputBox";
import Posts from "../../components/TestPosts/Posts";
import Ad from "../../components/Ad/Ad";
import CreatePost from "../../components/Post/CreatePost";
import t from "../../images/NFTs/monkey-removebg.png";

function Test() {
  return (
    <div className="row p-0 m-0">
      <div class="col-sm-8 col-xs-12 p-0 feedBody">
        <div class="container-fluid p-0 feedPage">
          <div class="container p-0 feed-container">
            <InputBox />
            <Posts />
          </div>
        </div>
      </div>
      <div class="col-sm-4 col-xs-4 col-advertisment">
        <Ad />
      </div>
    </div>
  );
}
export default Test;


