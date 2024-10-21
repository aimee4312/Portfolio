import React from 'react'
import '../styles/header.css'

export default function Header() {
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
    <div class="navbar">
      <div class="navbar-left">
        <div style={{ fontWeight: 'bold'}}> Jiahua 'Aimee' Mai </div>
        <div> aimee4312@gmail.com </div>
      </div>
      <div class="navbar-right">
        <div>{formatDate(today)}</div>
        <div>{currentTime}</div>
      </div>
    </div>
  )
}
