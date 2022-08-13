// import React from 'react';

// const MySingleBlock = ({ blog }) => {
//     const { user_id, name, title, slug, blog1, blog2, blog3, img, doc, _id } = blog;

//     const handleDelete = _id => {
//         console.log('delete', _id);
//         const proceed = window.confirm('Are you sure want to delete');
//         if(proceed){
//             const url = `https://glacial-mesa-67623.herokuapp.com/blog/${_id}`;
//             console.log('url from', url);
//             fetch(url, {
//                 method: 'DELETE'
//             })
//             .then(res => res.json())
//             .then(data => {
//                 console.log(data);
//                 if(data.deletedCount > 0){
//                     const remaining = blogs.filter(blog => blog.id !== _id)
//                     setBlogs(remaining);
//                     console.log('remaining from', remaining);
//                 }
//             })
//         }
    
//     }

//     return (
//         <div className='m-3 p-3'>
//             <div className="hero min-h-screen bg-base-200">
//                 <div className="hero-content flex-col lg:flex-row-reverse">
//                     <img src={img} className="max-w-sm rounded-lg shadow-2xl" alt='' />
//                     <div>
//                         <h1 className="text-xl font-bold">This blog by {name}</h1>
//                         <h1 className="text-xl font-bold">Email: {user_id}</h1>
//                         <h1 className="text-5xl font-bold">{title}</h1>
//                         <h1 className="text-5xl font-bold">{slug}</h1>
//                         <p className="py-6">{blog1}</p>
//                         <p className="py-6">{blog2}</p>
//                         <p className="py-6">{blog3}</p>
                        
//                         <div className='flex justify-between p-10'>
//                         <button className="btn btn-primary"> <a href={doc} target="_blank">Documentation</a> </button>
//                         <button onClick={()=>handleDelete(blog._id)} className="btn btn-primary btn-danger font-bold text-red-500">Remove Blog</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default MySingleBlock;