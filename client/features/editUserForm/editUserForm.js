import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

const editUser = ({editStatus}) => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')

    return (
        <div className='form-container'>
            <div className='form-header'>
                <h1>Edit User Information</h1>
            </div>
            <form id='edit-student'>
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