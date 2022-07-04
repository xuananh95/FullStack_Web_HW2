import React from 'react'
import './styles.css'
const UserInfo = ({data}) => {
  console.log(data);
  return (
    <div className="container">
      <h1>Thông tin người dùng</h1>
        <div className="user-info-container">
          <div className="info-item-left">
              <img alt="avatar" className="avatar" src={data.avatar_url} />
          </div>
          <div className="info-item-right">
            <label><i>Tên người dùng</i></label>
            <span className="info-item">{data.login}</span>
            <label><i>Email</i></label>
            <span className="info-item">{data.email}</span>
            <label><i>Công ty</i></label>
            <span className="info-item">{data.company}</span>
            <label><i>Số người theo dõi</i></label>
            <span className="info-item">{data.followers}</span>
          </div>
        </div>
    </div>
    
  )
}

export default UserInfo