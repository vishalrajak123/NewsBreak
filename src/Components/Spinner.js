import React, { Component } from 'react'
import Rocket from './Rocket.gif'

export class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={Rocket} alt="Rocket" />
      </div>
    )
  }
}

export default Spinner
