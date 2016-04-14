import React, { Component } from 'react'

import Card from './Card'

const data = [{
  name: 'DING Zeyu (A0123421Y)',
  imgSrc: 'http://www.gravatar.com/avatar/9af45a0d5e1c3330dfb195733953b63c?s=600',
  title: 'Consultant'
}, {
  name: 'PUSAPATI Padmavathi (A0120076U)',
  imgSrc: 'http://semantic-ui.com/images/avatar2/large/kristy.png',
  title: 'Business Analyst'
}, {
  name: 'WANG Peikai',
  imgSrc: 'http://semantic-ui.com/images/avatar/large/elliot.jpg',
  title: 'Consultant'
}, {
  name: 'XU Qian',
  imgSrc: 'http://semantic-ui.com/images/avatar/large/daniel.jpg',
  title: 'Developer'
}]

export default class About extends Component {
  render() {
    return (
      <div>
        <p>This is a school project.</p>
        <ul>
          <li>School: NUS</li>
          <li>Course: Mater of Computing</li>
          <li>Module: CS5224 Cloud Computing</li>
          <li>Schedule: Schedule (AY2015/16 – Semester 2) – Jan 2016</li>
          <li>Instructor:
            <a href="http://www.comp.nus.edu.sg/~teoym/">
              TEO Yong Meng, PhD, CEng, MBCS, MIEEE, Associate Professor
            </a>
          </li>
        </ul>
        <h3>Team</h3>
        <div className="ui cards">
          {
            data.map(({ name, imgSrc, title }) =>
              <Card
                key={name}
                name={name}
                imgSrc={imgSrc}
                title={title} />
            )
          }
        </div>
      </div>
    )
  }
}
