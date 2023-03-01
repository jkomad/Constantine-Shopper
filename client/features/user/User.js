import '../styles/User.css'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import { selectUser, fetchSingleUser, clearUserState } from './userSlice'

const User = () => {
    const user = useSelector(selectUser)
    const {id} = useParams()
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
        <div className='user-container'>
            <div className='user'>
                <img className='user-pic' src={user.imgUrl}/>
                <h1>{user.username}</h1>
                <h2>{user.email}</h2>
                <h3>{user.address}</h3>
                <button className='return' onClick={handleClick}>View All Users</button>
            </div>
        </div>
    )
}

export default User
