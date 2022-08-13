import React from 'react';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useState } from 'react';
import { useEffect } from 'react';
import Comment from './Comment';

const Blog = ({ blog }) => {
    const { user_id, name, title, slug, blog1, blog2, blog3, img, doc } = blog;

    const [user] = useAuthState(auth);
    // console.log(user.photoURL);
    const handleComment = event => {
        event.preventDefault();

        const comment = {
            client: user.email,
            clientName: user.displayName,
            userImage: user.photoURL,
            reviews: event.target.comment.value,
            blogId: blog._id
        }
        fetch('https://glacial-mesa-67623.herokuapp.com/comment', {
            method: "POST",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(comment)
        })
            .then(res => res.json())
            .then(data => {
                if(data.success === true){
                    event.target.comment.value= '';
                }
            })
    }

    //comment load
    const [comments, setComments] = useState([]);
    useEffect(() => {
        fetch(`https://glacial-mesa-67623.herokuapp.com/comment/${blog._id}`)
            .then(res => res.json())
            .then(data => setComments(data))
    }, [blog, comments, user])


    return (
        <div className='m-3 p-3'>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={img} className="max-w-sm image-full rounded-lg shadow-2xl" alt='' />
                    <div>
                        <h1 className="text-xs flex justify-start font-bold"> {name} {user_id}</h1>
                        <h1 className="text-5xl font-bold">{title}</h1>
                        <h1 className="text-5xl font-bold">{slug}</h1>
                        <p className="py-6">{blog1}</p>
                        <p className="py-6">{blog2}</p>
                        <p className="py-6">{blog3}</p>
                        <button className="btn btn-primary"> <a href={doc} target="_blank">Documentation</a> </button>

                        {/* comment section */}
                        {/* <h2>total comment: {comments?.length}</h2> */}
                        {
                            comments?.map(comment => <Comment
                                key={comment._id}
                                comment={comment}
                            ></Comment>)
                        }
                        <form
                            onSubmit={handleComment}
                            className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
                            <input type="text" name="comment" placeholder='Comment Here' className="input input-bordered w-full max-w-xs" />
                            <input type="submit" value="Comment" className="btn btn-secondary w-full max-w-xs" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;