import React, { Component } from 'react'
import { Button, Menu, Segment, Sidebar } from 'semantic-ui-react'

import MyNavigation from '../../Navigationbar'
import NavbarPusher from '../../NavbarPusher'
import Landing from '../../Landing'
import About from '../../About'

// import './index.css'

export default class Home extends Component {
    state = { visible: false }

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
              <Menu.Item as='a'>
                            Home
              </Menu.Item>
              <Menu.Item as='a'>
                            About us
              </Menu.Item>
              <Menu.Item as='a'>
                            Contact us
              </Menu.Item>
            </Sidebar>

            <NavbarPusher><Landing/></NavbarPusher>
            <NavbarPusher><About/></NavbarPusher>
          </Sidebar.Pushable>
        </div>
      )
    }
}
