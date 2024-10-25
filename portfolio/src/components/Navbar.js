import React from 'react'
import '../styles/navbar.css'

export default function navbar() {
    const today = new Date();
    const hours = today.getHours();
    const minutes = today.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
  
    const currentTime = `${hours}:${minutes < 10 ? '0' : ''}${minutes} ${ampm}`;
  
    const formatDate = (date) => {
      const options = { weekday: 'short', month: 'short', day: 'numeric'};
      return date.toLocaleDateString('en-US', options).replace(',', '');;
    }
    return (
    <div className="navbar">
      <div className="navbar-left">
        <div style={{ fontWeight: 'bold'}}> Jiahua 'Aimee' Mai </div>
        <div style={{ textDecoration: 'none'}}> aimee4312@gmail.com </div>
      </div>
      <div className="navbar-right">
        <div>{formatDate(today)}</div>
        <div>{currentTime}</div>
      </div>
    </div>
  )
}
