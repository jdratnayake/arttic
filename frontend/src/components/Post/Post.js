import React from 'react'

import './Post.css'

function Post( props ) {
  return (
    <div className="card postCard mt-2">
        <div className="card-header">
          <div class="container">
            <div class="row">
              <div class="col-1 align-self-center">
                <i className="bi bi-person-circle postUserImg"></i>
                </div>
                <div class="col-10 align-self-center">
                  <p className="postUser">{props.name}</p>
                  <p className="postDate">{props.date}</p>
                </div>
              <div class="col-1 align-self-center">
                <i className="bi bi-pencil-square postEdit"></i>
              </div>
            </div>
            </div>
        </div>
        <div className="card-body">
            <p className="card-text">up the bulk of the card's content.</p>
        </div>
        <img src={props.image} className="card-img-top" alt="..."/>
        <hr className="mb-0 mt-1 p-0"/>
        <div class="container pb-1 mt-0 reactionSecrion">
            <div class="row justify-content-between">
              <div class="col-3 align-self-center reaction_1">
                <i class="bi bi-hand-thumbs-up-fill"></i>
                <i class="bi bi-suit-heart-fill"></i>
                <i class="bi bi-hand-thumbs-down-fill"></i>
              </div>
              <div class="col-2 align-self-center reaction_2">
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-chat-square-dots-fill"></i>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Post