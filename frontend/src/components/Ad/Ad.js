import React from 'react'
import './Ad.css';

function Ad(props) {
  return (
    <div class="card adCard mb-3 rounded-bottom">
        <img src={props.image} class="card-img-top " alt="advertisement"/>
    </div>
  )
}

export default Ad