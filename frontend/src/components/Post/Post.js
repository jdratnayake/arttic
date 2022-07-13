import React from 'react'

import './Post.css'

function Post( props ) {
  return (
    <div class="card postCard">
        <div class="card-header">
            <i class="bi bi-person-circle postUserImg"></i>
        </div>
        <img src={props.image} class="card-img-top" alt="..."/>
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
  )
}

export default Post