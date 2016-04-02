import React, { Component } from 'react'

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
        <p>Created by:</p>
        <ul>
          <li>
            <em>
              <a href="https://twitter.com/ZillDing">DING Zeyu</a>
            </em> (A0123421Y)
          </li>
          <li><em>PUSAPATI Padmavathi</em></li>
          <li><em>WANG Peikai</em></li>
          <li><em>XU Qian</em></li>
        </ul>
      </div>
    )
  }
}
