import React, { Component } from 'react'
import { connect } from 'react-redux'
import SitesListScreen from './SitesListScreen'

class Root extends Component {
  static navigationOptions = {
    header: null,
  }

  render () {
    return (<SitesListScreen parentNavigation={this.props.navigation}/>)
  }
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Root)
