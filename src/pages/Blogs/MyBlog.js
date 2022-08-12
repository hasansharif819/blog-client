import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyBlog = () => {
    const [user] = useAuthState(auth);
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/blog/email?user_id=${user.email}`, {
                method: 'GET',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => setBlogs(data))
        }
    }, [user]);

    const handleDelete = _id => {
        console.log('delete', _id);
        const proceed = window.confirm('Are you sure want to delete');
        if (proceed) {
            const url = `http://localhost:5000/blog/${_id}`;
            console.log('url from', url);
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    // if (data.deletedCount > 0) {
                    //     const remaining = blogs.filter(blog => blog.id !== _id)
                    //     setBlogs(remaining);
                    //     console.log('remaining from', remaining);
                    // }
                })
        }

    }


    return (
        <div>
            <h2 className='text-3xl text-primary font-bold'>My Blog: {blogs.length}</h2>
            {
                blogs.map(blog => <>

                    <div className='m-3 p-3'>
                        <div className="hero min-h-screen bg-base-200">
                            <div className="hero-content flex-col lg:flex-row-reverse">
                                <img src={blog.img} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                                <div>
                                    <h1 className="text-5xl font-bold">{blog.title}</h1>
                                    <h1 className="text-5xl font-bold">{blog.slug}</h1>
                                    <p className="py-6">{blog.blog1}</p>
                                    <p className="py-6">{blog.blog2}</p>
                                    <p className="py-6">{blog.blog3}</p>

                                    <div className='flex justify-between p-10'>
                                        <button className="btn btn-primary"> <a href={blog.doc} target="_blank">Documentation</a> </button>
                                        <button onClick={() => handleDelete(blog._id)} className="btn btn-primary btn-danger font-bold text-red-500">Remove Blog</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
                )
            }
        </div>
    );
};

export default MyBlog;