import React from 'react';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';

const Blog = ({ blog }) => {
    const { title, slug, blog1, blog2, blog3 } = blog;
    // console.log(blog);

    const [user] = useAuthState(auth);
    const handleComment = event => {
        event.preventDefault();

        const comment = {
            client: user.email,
            clientName: user.displayName,
            reviews: event.target.comment.value,
        }
        fetch('http://localhost:5000/comment', {
            method: "POST",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(comment)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }

    return (
        <div>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content text-center">
                    <div class="max-w-md bg-slate-400">
                        <h1 class="text-5xl font-bold">{title}</h1>
                        <h1 class="text-2xl font-bold">{slug}</h1>
                        <p class="py-6">{blog1}</p>
                        <p class="py-6">{blog2}</p>
                        <p class="py-6">{blog3}</p>

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