import * as React from 'react'
import { createDrawerNavigator } from "react-navigation-drawer"

import MyProfileScreen from '../screens/MyProfileScreen'
import FindMechanicScreen from '../screens/FindMechanicScreen'
import CustomSideBarMenu from './CustomSideBarMenu'

export const AppDrawerNavigator = createDrawerNavigator({
    MyProfile: {screen:MyProfileScreen},
    FindMechanic: {screen:FindMechanicScreen},
},
{
    initialRouteName: 'MyProfile'
},
{
    contentComponent: CustomSideBarMenu
}
)