import '../styles/User.css'
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { selectUser, fetchSingleUser } from './userSlice'
import EditUser from '../editUserForm/editUserForm'

const User = () => {
    const user = useSelector(selectUser)
    const {id} = useParams()
    const [editStatus, setEditStatus] = useState(false)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(fetchSingleUser(id))
    }, [])

    const handleClick = () => {
        dispatch(clearUserState())
        navigate('/users')
    }

    const handleDelete = () => {
        dispatch(deleteUser(id))
        navigate('/users')
    }

    return (
        <>
        <div>{user.username}</div>
        <EditUser id={user.id}/>
        </>
    )
}

export default User
