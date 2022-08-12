
import userImg from "../../images/avatar/avatar-1.jpg";
import './InputBox.css';
import {useRef,useState} from 'react';

function InputBox() {
  const inputRef = useRef(null);
  const filepickerRef = useRef(null); 
  const [imageToPost, setImageToPost] = useState(null);
  const sendPost = e => {
    e.preventDefault();

    if(!inputRef.current.value) return ;
    
  }
  const addimageToPost= e => {
    const reader =  new FileReader();
    if (e.target.files[0]){
      reader.readAsDataURL(e.target.files[0])
    }

    reader.onload = ( readerEvent) => {
      setImageToPost(readerEvent.target.result)
    }
  }

  const removeImage = () =>{
    setImageToPost(null);
  }

  return (
    <div className="mt-6 p-2 inputBox">
      <div className="inputBox-body">
          <img src={userImg} width={40} height={40} className="rounded-circle"/>
          <form className="inputBox-form">
            {/*<input ref={inputRef} className="inputBox-input text-muted" type="text" placeholder={`what's on your mind ${"mahesh"} ?`}  />*/}
            <a
              href="#"
              class="inputBox-input text-muted"
              data-bs-toggle="modal"
              data-bs-target="#inputBox"
            >
                what's on your mind,{"mahesh"} ?
            </a>
            <button hidden type="submit" onClick={sendPost}>Submit</button>
          </form>
          {imageToPost && (
            <div onClick={removeImage} className="post-preview">
              <img src={imageToPost} className="post-preview-image"/>
              <p className="m-0 post-preview-p">Remove</p>
            </div>)}
      </div>
      <div className="d-flex justify-content-evenly p-2 border-top">
          <div className="d-flex align-items-center gap-1 flex-grow justify-content-center p-1 px-4 inputBox-inputIcon">
            <a className="d-flex gap-1 inputBox-action" data-bs-toggle="modal" data-bs-target="#inputBox">
              <i class="bi bi-camera-reels-fill text-danger"></i>
              <p className="m-0 inputBox-icon">Video</p>
            </a>
          </div>
          <div className="d-flex align-items-center gap-1 flex-grow justify-content-center p-1 px-4 inputBox-inputIcon">
            <a className="d-flex gap-1 inputBox-action" data-bs-toggle="modal" data-bs-target="#inputBox">
              <i class="bi bi-file-image-fill text-success"></i>
              <p className="m-0 inputBox-icon">Photo</p>
            </a>
          </div>
      </div>
          {/* update plan modal */}
      <div
          class="modal fade"
          id="inputBox"
          tabindex="-1"
          aria-labelledby="complainModalLabel"
          aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal-lg">
          <div class="modal-content">
            <div class="modal-header p-3">
              <div>
                <h6 class="mb-0" id="complainModalLabel">
                  Create a post
                </h6>
              </div>
              <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
              ></button>
            </div>
            <div class="modal-body p-4 ">
              <div class="card border shadow-none border-bottom p-4 pb-0">
                <div class="row">
                  <div>
                    {/* border */}
                    <form>
                      {/* row */}
                      <div class="mb-3 row">
                        <label
                          for="description"
                          class="col-sm-4 col-form-label form-label"
                        >
                          Description
                        </label>
                        <div class="col-md-8 col-12">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Description"
                            id="description"
                          />
                        </div>
                      </div>
                      <div class="row mb-3">
                        <div class="col-md-12">
                          {/* dropzone input */}
                          <div>
                            <form action="#" class="dropzone mb-3 border-dashed dz-clickable">
                              <div class="dz-default dz-message">
                                <button className="dz-button" type="button"><span className="text-muted">Drop files here to upload</span></button>
                              </div>
                            </form>
                            <button type="submit" class="btn btn-secondary">
                              Change
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer justify-content-start p-4 pt-2">
                <button type="submit" class="btn btn-primary">
                  {" "}
                  Post
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InputBox