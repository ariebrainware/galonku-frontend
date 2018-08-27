import React, { Component } from 'react'
import { Header, Segment, Sidebar } from 'semantic-ui-react'

const NavbarPusher = ({ children }) => (
  <Sidebar.Pusher>
    <Segment basic>
      <Header as='h3'>
        {children}
      </Header>
    </Segment>
  </Sidebar.Pusher >
)

export default NavbarPusher