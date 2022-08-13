import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Blog from './Blog';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect( () => {
        fetch('https://glacial-mesa-67623.herokuapp.com/blog')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])

    return (
        <div>
            {
                blogs.map(blog => <Blog
                key={blog._id}
                blog={blog}
                ></Blog>)
            }
        </div>
    );
};

export default Blogs;