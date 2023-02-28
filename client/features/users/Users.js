import React, { useEffect }  from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectUsers, fetchUsers } from './usersSlice'
//import uuid for our keys???

const Users = () => {
    const users = useSelector(selectUsers)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchUsers())
    })

    return (
        <div id='users-container'>
            {users.map((user) => {
                return (
                    <div>{user.username}</div>
                )
            })}
        </div>
    )
}

export default Users