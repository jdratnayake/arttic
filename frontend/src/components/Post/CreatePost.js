import React from 'react'

import './CreatePost.css'

function CreatePost( props ) {
  return (
    <div className="card postCard p-2">
            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Start a post"/>
        <div className="card-body pt-1 pb-0">
            <div class="input-group createPostInput">
                <label class="input-group-text inputLablesCreate" for="inputGroupFile01"><i class="bi bi-image-fill">  Photos</i></label>
                <input type="file"  id="inputGroupFile01" hidden/>

                <label class="input-group-text inputLablesCreate" for="inputGroupFile02"><i class="bi bi-camera-video-fill">  Videos</i></label>
                <input type="file" id="inputGroupFile02" hidden/>

                <label class="input-group-text inputLablesCreate" for="inputGroupFile03"><i class="bi bi-flag-fill"> Events</i></label>
                <input type="file" id="inputGroupFile03" hidden/>
            </div>
        </div>
    </div>
  )
}

export default CreatePost