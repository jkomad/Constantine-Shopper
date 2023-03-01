import '../styles/Users.css'
import React, { useEffect }  from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchUsers, selectUsers } from './usersSlice'
//import uuid for our keys???

const Users = () => {
    const users = useSelector(selectUsers)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    return (
        <>
        <h1 id='users-header'>All Users</h1>
        <div id='users'>
            {users.map((user) => {
                return (
                    <div key={user.id} className='user-container'>
                        <Link to={`/users/${user.id}`} className='user'>
                        <img className='user-pic' src={user.imgUrl}/>
                        <h1>{user.username}</h1>
                        <h2>{user.email}</h2>
                        <h3>{user.address}</h3>
                        </Link>
                    </div>
                )
            })}
        </div>
        </>
    )
}

export default Users
