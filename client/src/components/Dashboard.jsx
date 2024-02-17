import React from 'react'
import PropTypes from 'prop-types'
import Sidebar from './Sidebar'

export default function Dashboard({ id }) {
  return (
    <div className="d-flex" style={{ height: '100vh' }}>
      <Sidebar id={id} />
    </div>
  )
}

Dashboard.propTypes = {
  id: PropTypes.string,
}
