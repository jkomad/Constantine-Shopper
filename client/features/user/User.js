import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { selectUser, fetchSingleUser } from './userSlice'
import EditUser from '../editUserForm/editUserForm'

const User = () => {
    const user = useSelector(selectUser)
    const {id} = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchSingleUser(id))
    }, [])

    return (
        <>
        <div>{user.username}</div>
        <EditUser id={user.id}/>
        </>
    )
}

export default User
