import React from "react";

import "./Post.css";

function Post(props) {
  return (
    <div className="container">
    <div className="album box">
      <div className="post_status-main">
        <img
          src="https://images.genius.com/2326b69829d58232a2521f09333da1b3.1000x1000x1.jpg"
          className="status-img"
        />
        <div className="album-detail">
          <div className="album-title">
            <strong>{props.name}</strong><br/> {props.title}
          </div>
          <div className="album-date">{props.date}</div>
        </div>
        <button className="intro-menu"></button>
      </div>
      <div className="album-content">
        {props.desc}
        <div className="album-photos">
          <img
            src="https://images.unsplash.com/photo-1508179719682-dbc62681c355?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2378&q=80"
            alt=""
            className="album-photo"
          />
          <div className="album-right">
            <img
              src="https://images.unsplash.com/photo-1502872364588-894d7d6ddfab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
              alt=""
              className="album-photo"
            />
            <img
              src="https://images.unsplash.com/photo-1566737236500-c8ac43014a67?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
              alt=""
              className="album-photo"
            />
          </div>
        </div>
      </div>
      <div className="album-actions">
        <a href="#" className="album-action">
          <i className="bi bi-hand-thumbs-up-fill"></i>
          87
        </a>
        <a href="#" className="album-action">
          <i className="bi bi-suit-heart-fill"></i>
          20
        </a>
        <a href="#" className="album-action">
          <i className="bi bi-hand-thumbs-down-fill"></i>
          13
        </a>

        {/*  sepate from here */}
        <div className="postReactLeft">
          <a href="#" className="album-action">
            <i className="bi bi-star-fill"></i>
            Favourite
          </a>
          <a href="#" className="album-action">
            <i className="bi bi-chat-square-dots-fill"></i>
            Comment
          </a>
        </div>
      </div>
    </div>
    </div>
    
    // <div className="card postCard mt-2">
    //     <div className="card-header">
    //       <div class="container">
    //         <div class="row">
    //           <div class="col-1 align-self-center">
    //             <i className="bi bi-person-circle postUserImg"></i>
    //             </div>
    //             <div class="col-10 align-self-center">
    //               <p className="postUser">{props.name}</p>
    //               <p className="postDate">{props.date}</p>
    //             </div>
    //           <div class="col-1 align-self-center">
    //             <i className="bi bi-pencil-square postEdit"></i>
    //           </div>
    //         </div>
    //         </div>
    //     </div>
    //     <div className="card-body">
    //         <p className="card-text">up the bulk of the card's content.</p>
    //     </div>
    //     <img src={props.image} className="card-img-top" alt="..."/>
    //     <hr className="mb-0 mt-1 p-0"/>
    //     <div class="container pb-1 mt-0 reactionSecrion">
    //         <div class="row justify-content-between">
    //           <div class="col-3 align-self-center reaction_1">
    //             <i class="bi bi-hand-thumbs-up-fill"></i>
    //             <i class="bi bi-suit-heart-fill"></i>
    //             <i class="bi bi-hand-thumbs-down-fill"></i>
    //           </div>
    //           <div class="col-2 align-self-center reaction_2">
    //             <i class="bi bi-star-fill"></i>
    //             <i class="bi bi-chat-square-dots-fill"></i>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
  );
}

export default Post;
