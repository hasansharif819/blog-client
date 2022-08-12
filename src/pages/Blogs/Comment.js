import React from 'react';

const Comment = ({ comment }) => {
    const { reviews, clientName } = comment;
    return (
        <div className="collapse my-2 font-bold text-2xl">
            <input type="checkbox" className="peer" />
            <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                {reviews}
            </div>
            <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                <p>{clientName}</p>
            </div>
        </div>
    );
};

export default Comment;