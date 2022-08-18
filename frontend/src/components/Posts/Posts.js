import './Posts.css';
import Post from '../Post/Post';

function Posts( props ){
	const posts = [
		{
			id:1,
			name:"Mahesh Lakshan",
			message:"owasfbgbaeufbv jubfubauifg jasdguawrbfuawrg",
			timestamp:"August 8,2022 at 08:22 PM",
			image:"https://images.unsplash.com/photo-1508179719682-dbc62681c355?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2378&q=80",
			userImage:"https://images.genius.com/2326b69829d58232a2521f09333da1b3.1000x1000x1.jpg",
			comments:[
				{
					id:5,
					name:"Roman Reigns",
					message:"hi,how you doing?",
					userImage:"https://images.genius.com/2326b69829d58232a2521f09333da1b3.1000x1000x1.jpg",
					timestamp:"August 8,2022 at 08:22 PM",
				},
				{
					id:6,
					name:"Dwaine Johnson",
					message:"whatsup?",
					userImage:"https://images.genius.com/2326b69829d58232a2521f09333da1b3.1000x1000x1.jpg",
					timestamp:"August 8,2022 at 08:22 PM",
				}
				],
			likes:20
		},
		{
			id:2,
			name:"Janitha",
			message:"owasfbgbaeufbv jubfubauifg jasdguawrbfuawrg",
			timestamp:"August 8,2022 at 08:23 PM",
			userImage:"https://images.genius.com/2326b69829d58232a2521f09333da1b3.1000x1000x1.jpg",
			likes:10
		},	
		{
			id:3,
			name:"Charith Anjana",
			message:"owasfbgbaeufbv jubfubauifg jasdguawrbfuawrg",
			timestamp:"August 8,2022 at 07:23 PM",
			image:"https://images.unsplash.com/photo-1566737236500-c8ac43014a67?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
			userImage:"https://images.genius.com/2326b69829d58232a2521f09333da1b3.1000x1000x1.jpg",
			likes:50
		}
		];


	return(
		<div className="pb-3">
			{
				posts.map(post => {
					return(<Post 
						key={post.id}
						userName = { props.name }
						profilePic = { props.profilePic }
						name={post.name}
						message={post.message}
						timestamp={post.timestamp}
						image={post.image}
						userImage = {post.userImage}
						comments = {post.comments}
						likes= {post.likes}
						/> 
						)
					}
				)
			}
		</div>
	)
}

export default Posts;