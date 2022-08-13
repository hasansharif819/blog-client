import React from 'react';

const User = ({ user, index }) => {
    const { email, role } = user;
    // console.log('index no',index)

    const makeAdmin = () => {
        const proceed = window.confirm('Are you sure to make Admin');
        if (proceed) {
            fetch(`https://glacial-mesa-67623.herokuapp.com/user/admin/${email}`, {
                method: 'PUT',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount > 0) {
                        <div class="alert alert-success shadow-lg">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                <span>You successfully making an admin</span>
                            </div>
                        </div>
                    }
                })
        }
    }

    const deleteUser = _id => {
        const proceed = window.confirm('Are you sure want to delete user?')
        if(proceed){
            fetch(`https://glacial-mesa-67623.herokuapp.com/user/${_id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0) {
                    <progress class="progress w-56"></progress>
                }
            })
        }
    }

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{user?.user?.displayName}</td>
            <td>{email}</td>
            <td>{ role !== 'admin' && <button onClick={() => makeAdmin(user._id)} className='btn btn-xs'>Make Admin</button>}</td>
            <td><button onClick={() => deleteUser(user._id)} className='btn btn-xs text-red-500'>Remove user</button></td>
        </tr>
    );
};

export default User;