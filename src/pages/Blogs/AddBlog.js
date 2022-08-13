import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';


const AddBlog = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [user] = useAuthState(auth);
    const name = user?.displayName;
    const email = user?.email;
    const imageStorageKey = '4fb1911cd7fea07ca539c23c89d490db';

    const onSubmit = async data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const blog = {
                        name: name,
                        user_id: email,
                        title: data.title,
                        slug: data.slug,
                        blog1: data.blog1,
                        blog2: data.blog2,
                        blog3: data.blog3,
                        doc: data.doc,
                        img: img,
                    }
                    fetch('https://glacial-mesa-67623.herokuapp.com/blog', {
                        method: "POST",
                        headers: {
                            'content-type': "application/json",
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(blog)
                    })
                        .then(res => res.json())
                        .then(result => {
                            if (result.success) {
                                toast(`Successfully blog added.Thank you...`);
                                reset();
                            }
                        })
                }
            })
    }

    return (
        <div className='flex justify-center items-center'>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Title</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Title"
                        className="input input-bordered w-full max-w-xs"
                        {...register("title", {
                            required: {
                                value: true,
                                message: 'Title is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.title?.type === 'required' && <span className="label-text-alt text-red-500">{errors.title.message}</span>}
                    </label>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Slug</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Slug"
                        className="input input-bordered w-full max-w-xs"
                        {...register("slug", {
                            required: {
                                value: true,
                                message: 'Slug is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.slug?.type === 'required' && <span className="label-text-alt text-red-500">{errors.slug.message}</span>}
                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Blog1</span>
                    </label>
                    <input
                        type="text"
                        placeholder="First Blog"
                        className="input input-bordered w-full max-w-xs"
                        {...register("blog1", {
                            required: {
                                value: true,
                            }
                        })}
                    />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Blog2</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Secong Blog"
                        className="input input-bordered w-full max-w-xs"
                        {...register("blog2", {
                            required: {
                                value: true,
                            }
                        })}
                    />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Blog3</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Third Blog"
                        className="input input-bordered w-full max-w-xs"
                        {...register("blog3", {
                            required: {
                                value: true,
                            }
                        })}
                    />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Documentation Link</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Documentation link"
                        className="input input-bordered w-full max-w-xs"
                        {...register("doc", {
                            required: {
                                value: true,
                            }
                        })}
                    />
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Image</span>
                    </label>
                    <input
                        type="file"
                        placeholder="Image"
                        className="input input-bordered w-full max-w-xs"
                        {...register("image", {
                            required: {
                                value: true,
                                message: 'Image is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.image?.type === 'required' && <span className="label-text-alt text-red-500">{errors.image.message}</span>}
                    </label>
                </div>

                <input className='btn w-full max-w-xs text-white' type="submit" value="Add Blog" />
            </form>
        </div>
    );
};

export default AddBlog;