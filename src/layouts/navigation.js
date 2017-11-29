import React from 'react'
import {BottomNavigation, BottomNavigationButton} from 'material-ui'
import * as Icons from 'material-ui-icons'
import './navigation.less'

export default class Navigation extends React.Component {
  render() {
    return(
      <div className='bottom-navigation'>
        <BottomNavigation
          showLabels
        >
          <BottomNavigationButton label='Home' icon={<Icons.Home />} />
          <BottomNavigationButton label='Near' icon={<Icons.LocationOn />} />
          <BottomNavigationButton label='Favorite' icon={<Icons.Favorite />} />
          <BottomNavigationButton label='Services' icon={<Icons.Store />} />
          <BottomNavigationButton label='Profile' icon={<Icons.Person />} />
        </BottomNavigation>
      </div>
    )
  }
}
