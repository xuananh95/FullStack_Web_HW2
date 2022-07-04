import React from 'react'
import { useState } from 'react'
import './styles.css'
const Input = ({setData}) => {
    const URL = 'https://api.github.com/users/';
    const [username, setUsername] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!username){
            alert('Please enter username');
            return;
        }
        fetchData();
    }
    const fetchData = async () => {
        let resp = await fetch(URL.concat(username));
        if (resp.status === 200){
            let data = await resp.json();
            setData(data);
        }
        else {
            setData(null);
        }
        
    }
    return (
        <form className='input-container' onSubmit={handleSubmit}>
                <label>Nhập tên người dùng github</label>
                <input autoFocus className="input-txt" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                <button className='input-btn'>Tìm kiếm</button>
        </form>
  )
}

export default Input