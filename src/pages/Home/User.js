import React from 'react';

const User = ({ user, index}) => {
    const { email } = user;
    // console.log('index no',index)
    return (
        <tr>
            <th>{index+1}</th>
            <td>{user?.user?.displayName}</td>
            <td>{email}</td>
            <td><button className='btn btn-xs'>Make Admin</button></td>
            <td><button className='btn btn-xs text-red-500'>Remove user</button></td>
        </tr>
    );
};

export default User;