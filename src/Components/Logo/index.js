import React from 'react'
import logo from '../../../public/imgs/logo.svg'
import { config } from '../../config'

const styles = {
  container: {
    width: '100%',
    height: 80,
    textAlign: 'center',
    marginTop: 10
  },
  image: {
    width: 150,
    margin: 'auto auto'
  }
}

const Logo = ({ style, width = 150 }) => (
  <div style={{ ...styles.container, ...style }}>
    <a href={config.websiteUrl} target="_blank" rel="noopener noreferrer">
      <img style={{ ...styles.image, width: width }} src={logo} alt="logo" />
    </a>
  </div>
)

export default Logo
