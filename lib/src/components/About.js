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
  name: 'WANG Peikai (A0123507N)',
  imgSrc: 'http://semantic-ui.com/images/avatar/large/elliot.jpg',
  title: 'Consultant'
}, {
  name: 'XU Qian (A0137797J)',
  imgSrc: 'http://semantic-ui.com/images/avatar/large/daniel.jpg',
  title: 'Developer'
}]

const enrolLinks = [
  'http://www.tablebuilder.singstat.gov.sg/publicfacing/createDataTable.action?refId=6574',
  'http://www.tablebuilder.singstat.gov.sg/publicfacing/createDataTable.action?refId=6577',
  'http://www.tablebuilder.singstat.gov.sg/publicfacing/createDataTable.action?refId=6566',
  'http://www.tablebuilder.singstat.gov.sg/publicfacing/createDataTable.action?refId=6578'
]

const gradLinks = [
  'http://www.tablebuilder.singstat.gov.sg/publicfacing/createDataTable.action?refId=6579',
  'http://www.tablebuilder.singstat.gov.sg/publicfacing/createDataTable.action?refId=6576',
  'http://www.tablebuilder.singstat.gov.sg/publicfacing/createDataTable.action?refId=6570',
  'http://www.tablebuilder.singstat.gov.sg/publicfacing/createDataTable.action?refId=6565'
]

const LinkLi = ({ src }) => (
  <li>
    <a href={src} target="_blank">{src}</a>
  </li>
)

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
        <h3>Data Source</h3>
        <h4>Enrolment Data</h4>
        <ul>
          {
            enrolLinks.map((src, index) =>
              <LinkLi
                key={index}
                src={src} />
            )
          }
        </ul>
        <h4>Graduates Data</h4>
        <ul>
          {
            gradLinks.map((src, index) =>
              <LinkLi
                key={index}
                src={src} />
            )
          }
        </ul>
        <h4>Job Vacancies Data</h4>
        <ul>
          <LinkLi src="http://www.tablebuilder.singstat.gov.sg/publicfacing/createDataTable.action?refId=5862"/>
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
