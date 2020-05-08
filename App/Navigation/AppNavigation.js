import { createAppContainer } from 'react-navigation'
import SitesDetailsScreen from '../Containers/SitesDetailsScreen'
import SitesListScreen from '../Containers/SitesListScreen'
import { createStackNavigator } from 'react-navigation-stack';
import LaunchScreen from '../Containers/Root'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  SitesDetailsScreen: { screen: SitesDetailsScreen },
  SitesListScreen: { screen: SitesListScreen },
  LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'LaunchScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default createAppContainer(PrimaryNav)
