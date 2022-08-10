import React from 'react';

const AddBlog = () => {
    const handleAdd = event => {
        event.preventDefault();

        const blog = {
            title: event.target.title.value,
            slug: event.target.slug.value,
            blog1: event.target.blog1.value,
            blog2: event.target.blog2.value,
            blog3: event.target.blog3.value,
        }
        console.log(blog);
        fetch('http://localhost:5000/blog', {
            method: "POST",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(blog)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.success) {
                    // toast(`Successfully blog added.Thank you...`)
                }
                else {
                    // toast.error(`Sorry!!! Your request is failed `)
                }
            })
    }

    return (
        <div>
            <h2>Add</h2>
            <form
                onSubmit={handleAdd}
                className='grid grid-cols-1 gap-3 justify-items-center mt-2'>

                <input type="text" name="title" placeholder='Title' className="input input-bordered w-full max-w-xs" />
                <input type="text" name="slug" placeholder='Slug' className="input input-bordered w-full max-w-xs" />

                <input type="text" name="blog1" placeholder="First Block"
                    className="input input-bordered w-full max-w-xs" />
                <input type="text" name="blog2" placeholder="Second Block"
                    className="input input-bordered w-full max-w-xs" />
                <input type="text" name="blog3" placeholder="Third Block"
                    className="input input-bordered w-full max-w-xs" />

                <input type="submit" value="Add Blog" className="btn btn-secondary w-full max-w-xs" />
            </form>
        </div>
    );
};

export default AddBlog;