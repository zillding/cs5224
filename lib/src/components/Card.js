import React from 'react'

const Card = ({ name, imgSrc, title }) => (
  <div className="card">
    <div className="image">
      <img src={imgSrc} />
    </div>
    <div className="content">
      <div className="header">{name}</div>
      <div className="meta">
        <span>{title}</span>
      </div>
    </div>
  </div>
)

export default Card
