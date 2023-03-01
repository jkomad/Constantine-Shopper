import '../styles/User.css'
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import { selectUser, fetchSingleUser, clearUserState } from './userSlice'

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

    return (
        <>
        {!editStatus ? 
        <div className='user-container'>
            <div className='single-user'>
                <img className='user-pic' src={user.imgUrl}/>
                <h1>{user.username}</h1>
                <h2>{user.email}</h2>
                <h3>{user.address}</h3>
                <div className='buttons'>
                    <button className='back-button' onClick={handleClick}>View All Users</button>
                    <button className='edit-button' onClick={() => setEditStatus(true)}>Edit</button>
                </div>
            </div>
            <button className='delete-button'>X</button>
        </div>
        :
        <>
        <div className='user-container'>
            <div className='single-user'>
                <img className='user-pic' src={user.imgUrl}/>
                <h1>{user.username}</h1>
                <h2>{user.email}</h2>
                <h3>{user.address}</h3>
            </div>
        </div>
        <EditUser />
        </>
        }
        </>
    )
}

export default User
