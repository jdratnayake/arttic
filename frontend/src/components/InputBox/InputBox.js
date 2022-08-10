
import userImg from "../../images/avatar/avatar-1.jpg";
import './InputBox.css';
import {useRef,useState} from 'react';

function InputBox() {
  const filepickerRef = useRef(null); 
  const [imageToPost, setImageToPost] = useState(null);
  const sendPost = e => {
    e.preventDefault();
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
              <input className="inputBox-input text-muted" type="text" placeholder={`what's on your mind ${"mahesh"} ?`}  />
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
              <i class="bi bi-camera-reels-fill text-danger"></i>
              <p className="m-0 inputBox-icon">Video</p>
            </div>
            <div onClick={() => filepickerRef.current.click()} className="d-flex align-items-center gap-1 flex-grow justify-content-center p-1 px-4 inputBox-inputIcon">
              <i class="bi bi-file-image-fill text-success"></i>
              <p className="m-0 inputBox-icon">Photo</p>
              <input ref={filepickerRef} onChange={addimageToPost} type="file" hidden/>
            </div>
        </div>
    </div>
  )
}

export default InputBox