import './Post.css';
import { useState,useRef } from 'react';

function Post(props){
	const commentRef = useRef(null); 
	const [comment,setComment] = useState("comment here");
	const [iscommentBoxOpen,setCommentBoxOpen] = useState(false);
	const addComment = (e) => {
		setCommentBoxOpen(true);
		console.log("button click",iscommentBoxOpen);
	}
	const sendComment = e => {
    	e.preventDefault();
    	setCommentBoxOpen(false);
    	if (e.target.files[0]){
			setComment(comment);
		}
		const temp = props.comments;
		console.log("button click",iscommentBoxOpen,temp);
  	}
	return(
		<span className="Post">
		<div className="d-flex post">
			<div className="p-3 pb-2 mt-3 post-header rounded-top">
				<div className="d-flex justify-content-between gap-2">
				<div className="d-flex justify-items-center gap-2">
					<img className="rounded-circle" src={props.userImage} width={40} height={40} />
					<div>
						<p className="m-0 post-name">{props.name}</p>
						<p className="m-0 post-timestamp">
							{/* {new Date(props.timestamp.toDate()).toLocaleString()} */}
							{props.timestamp}
						</p>
					</div>
					</div>
				{/* not checked the output */}
					<div class="dropdown d-inline-block drop-list-upper">
                        <button className="dr-btn" id="page-header-notifications-dropdown"
                            data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="bi bi-three-dots"></i>
                        </button>

                        <div class="dropdown-menu dropdown-menu-lg dropdown-menu-end dropdown-menu-arrow"
                            aria-labelledby="page-header-notifications-dropdown">
                            <a class="dropdown-item dinv"><i class="bi bi-flag-fill dinvit icon-theme"></i> <span class="align-middle">Report</span></a>
                        </div>

                    </div>
				</div>
				<p className="pt-3 m-0 fs-8">{props.message}</p>
			</div>
			{props.image && (
				<div className="post-image-container">
					<img src={props.image} className="m-0 post-image"/>
				</div>)}
			<div className="bg-white d-flex justify-content-between">
				<div className="d-flex fs-8 align-items-center gap-1 flex-grow justify-content-center p-1 px-4 post-inputIcon"><i className="bi bi-hand-thumbs-up-fill"></i><p className="m-0 post-react-count">{props.likes}</p></div>
				<div className="d-flex align-items-center gap-1 flex-grow justify-content-center p-1 px-4 post-inputIcon"><p className="m-0  post-react-count">30 Comments</p></div>
			</div>
			<div className="p-1 border-top post-footer d-flex justify-content-between align-items-center rounded-bottom bg-white">
   				<div className="d-flex align-items-center gap-1 flex-grow justify-content-center p-1 px-4 post-inputIcon"><i className="bi bi-hand-thumbs-up-fill"></i><p className="m-0 post-react">Like</p></div>
				<div onClick={addComment} className="d-flex align-items-center gap-1 flex-grow justify-content-center p-1 px-4 post-inputIcon"><i className="bi bi-chat-square-dots-fill"></i><p className="m-0  post-react">Comment</p></div>
				<div className="d-flex align-items-center gap-1 flex-grow justify-content-center p-1 px-4 post-inputIcon"><i className="bi bi-star-fill"></i><p className="m-0 post-react">Favourite</p></div>
			</div>
		{/* comment */}
		{ iscommentBoxOpen && (
			<div className="mt-6 p-2 inputBox">
				{ comment && (
					<div>
						<div className="p-3 pt-0 pb-2 d-flex justify-items-center gap-2">
							<img className="rounded-circle" src={props.userImage} width={30} height={30} />
							<div>
								<p className="px-3 rounded pt-1 pb-1 m-0 fs-9 comment text-muted">{comment}</p>
								<p className="m-0 comment-like">Like</p>
							</div>
							<div class="dropdown d-inline-block drop-list-upper">
		                        <button className="dr-btn" id="page-header-notifications-dropdown"
		                            data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
		                            <i class="bi bi-three-dots"></i>
		                        </button>

		                        <div class="dropdown-menu dropdown-menu-lg dropdown-menu-end dropdown-menu-arrow"
		                            aria-labelledby="page-header-notifications-dropdown">
		                            <a class="dropdown-item dinv"><i class="bi bi-flag-fill dinvit icon-theme"></i> <span class="align-middle">Report</span></a>
		                        </div>
                    		</div>
                    		
						</div>
					</div>
					) }
			    <div className="inputBox-body">
			    	<img src={props.userImage} width={40} height={40} className="rounded-circle"/>
			        <form className="inputBox-form">
			          <input ref={commentRef} className="inputBox-input text-muted" type="text" placeholder={`what's on your mind ${"mahesh"} ?`}  />
			          <button className="btn btn-primary" onClick={sendComment} hidden>Send</button>
			        </form>
			    </div>
    		</div> )}
		</div>
		</span>
	)
}

export default Post;