import React from 'react'
import { Link } from 'react-router'

class HomePage extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h1>Hi, Airis!</h1>
        <h2>Ready for my challenge?</h2>
        <div className='options'>
          <Link to={'/challenge'} className='btn btn-default'>Yes!</Link>&nbsp;
          <Link to={'/later'} className='btn btn-default'>Maybe later</Link>
        </div>
      </div>
    )
  }
}

export default HomePage
