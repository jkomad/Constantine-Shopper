import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { editUser } from '../user/userSlice'

const EditUser = ({id, /*editStatus*/}) => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')

    const dispatch = useDispatch()

    const handleSubmit = (evt) => {
        evt.preventDefault()
        const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

        if (username === '') {
            evt.target.username.style.color = 'red'
            evt.target.username.value = 'Choose a new username!'
        }
        if (email === '' || !email.match(emailFormat)) {
            evt.target.email.style.color = 'red'
            evt.target.email.value = 'Choose a valid email!'
        }
        if (address === '') {
            evt.target.address.style.color = 'red'
            evt.target.address.value = 'Choose a new address!'
        }

        if (username !== '' && email.match(emailFormat) && address !== '') {
            const editedUser = {
                id,
                username,
                email,
                address,
            }

            evt.target.username.value = ''
            evt.target.email.value = ''
            evt.target.address.value = ''

            dispatch(editUser(editedUser))
            editStatus(false)
        }    }

    return (
        <div className='form-container'>
            <div className='form-header'>
                <h1>Edit User Information</h1>
            </div>
            <form id='edit-user' onSubmit={handleSubmit}>
                <label htmlFor='firstName'>Choose a new username:</label>
                <input
                    name="username"
                    type="text"
                    placeholder="Username..."
                    value={username}
                    onChange={(evt) => {
                        evt.target.style.color = 'black'
                        setUsername(evt.target.value)
                    }}/>
                <label htmlFor='email'>Choose a new email:</label>
                <input
                    name="email"
                    type="text"
                    placeholder="Email..."
                    value={email}
                    onChange={(evt) => {
                        evt.target.style.color = 'black'
                        setEmail(evt.target.value)
                    }} />
                <label htmlFor='address'>Choose a new address:</label>
                <input
                    name="address"
                    type="text"
                    placeholder="Address..."
                    value={address}
                    onChange={(evt) => {
                        evt.target.style.color = 'black'
                        setAddress(evt.target.value)
                    }} />
                <div className='edit-menu-buttons'>
                    <button type="submit">Submit</button>
                    <button onClick={() => editStatus(false)}>Cancel</button>
                </div>
            </form>
        </div>    
    )
}

export default EditUser