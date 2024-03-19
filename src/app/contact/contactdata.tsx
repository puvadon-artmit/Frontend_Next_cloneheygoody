import React from 'react'
import data from '../data/databran.json';

export default function contactdata() {
  return (
    <div>
      <h1>รายชื่อยี่ห้อรถ</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item.datajson}</li>
        ))}
      </ul>
    </div>
  )
}