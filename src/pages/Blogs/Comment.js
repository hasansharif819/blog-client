import React from 'react';

const Comment = ({ comment }) => {
    const { reviews, clientName, userImage } = comment;
    return (
        <div>
            <p className=''><img className='rounded-2xl' height={20} width={20} src={userImage} alt="" /> {clientName} <span className='ms-5'>-- {reviews}</span></p>
        </div>
    );
};

export default Comment;