import React from 'react'
import { Card } from 'antd'
import AppFooter from '../../components/AppFooter'
import logoWhale from '../../assets/logo-icon.png'
import backgroundImage from '../../assets/background.jpg'
import './index.less'

class NotFound extends React.Component {
  render() {
    return (
      <div
        className='not-found-page'
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <Card className='container'>
          <div className='header'>
            <img src={logoWhale} height='100px' alt='React Starter' />
            <h1>404 Not Found</h1>
            <p>Sorry, that page doesn&apos;t exist!</p>
          </div>
        </Card>
        <AppFooter />
      </div>
    )
  }
}

export default NotFound
