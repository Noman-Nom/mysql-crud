import React, { useState } from 'react'

import './Add.css'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
const Update = () => {

    const {id} = useParams()

    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const handleSubmit = async (e)=>{
        e.preventDefault()
             try {
                await axios.put("http://localhost:8800/students/" +id ,{name,email})
                navigate('/')
             } catch (error) {
                console.log(error)
             }
    }
  return (
    <div>
        <form onSubmit={handleSubmit} >
            <h1>Updata Student</h1>
        <div className="form">
            <div className='form__input'>
                <label htmlFor="name">Name</label>
                <input type="text" placeholder='enter name' id='name' onChange={(e)=>setName(e.target.value)} />
            </div>
            <div className='form__input'>
                <label htmlFor="name">Email</label>
                <input type="text" placeholder='enter email' id='email' onChange={(e)=>setEmail(e.target.value)} />
            </div>
            <button >Update</button>
        </div>
        </form>
    </div>
  )
}

export default Update