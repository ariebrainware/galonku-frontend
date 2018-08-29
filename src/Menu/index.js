import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, Menu, Segment, Sidebar } from 'semantic-ui-react'

import MyNavigation from '../Navigationbar'

export default class MyMenu extends Component {
  constructor(props) {
    super(props)

    this.state = {
      visible: false
    }
  }

  handleButtonClick = () => this.setState({ visible: !this.state.visible })
  handleSidebarHide = () => this.setState({ visible: false })

  render() {
    const { visible } = this.state

    return (
      <div>
        <MyNavigation>
          <Button icon='bars' onClick={this.handleButtonClick} className='button-menu' />
        </MyNavigation>

        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation='overlay'
            icon='labeled'
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={visible}
            width='thin'
          >
            <Link to='/'>
              <Menu.Item>
                Beranda
              </Menu.Item>
            </Link>
            <Link to='/about'>
              <Menu.Item>
                Tentang kami
              </Menu.Item>
            </Link>
            <Link to='/contact'>
              <Menu.Item>
                Hubungi kami
              </Menu.Item>
            </Link>
            <Link to='/merchants/register'>
              <Menu.Item>
                Registrasi penjual
              </Menu.Item>
            </Link>
            <Link to='/users/register'>
              <Menu.Item>
                Registrasi pembeli
              </Menu.Item>
            </Link>
          </Sidebar>

          <Sidebar.Pusher>
            <Segment basic>
              {this.props.children}
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}