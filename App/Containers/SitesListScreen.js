import React, { Component } from 'react'
import { View, Platform, FlatList, TouchableOpacity, Image, Alert, AsyncStorage } from 'react-native'
import { connect } from 'react-redux'
import FastImage from 'react-native-fast-image'

import SitesActions from '../Redux/SitesDataRedux'

// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import PropTypes from 'prop-types'

// Styles
import styles from './Styles/SitesListScreenStyle'

import { horizScale, Spacer, Text } from '../Components/LayoutUtil'
import apiServices from '../Services/WebServices'

class SitesListScreen extends Component {
  static propTypes = {
    parentNavigation: PropTypes.object,
  }

  constructor (props) {
    super(props)
    this.state = {
      sitesList: [],
      isLoading: false,
    }
  }

  componentDidMount () {
    const {persistData} = this.props
    AsyncStorage.getItem('@NCEP:data', (err, data) => {
      if (data === null || !data) {
        apiServices.getSites().then((response) => {
          if (response && response.status && (response.status === 200 || response.status === 201)) {
            this.setState({sitesList: response.data.sites})
            persistData(response.data.sites)
          } else {
            Alert.alert('NCEP', 'Something went wrong! \n Please try again later!')
          }
        })
      } else {
        this.setState({sitesList: JSON.parse(data)})
      }
    })

  }

  render () {
    const {sitesList} = this.state
    return (
      <View style={styles.container}>
        <View style={{flex: 1}}>
          <Spacer height={horizScale(50)}/>
          <FlatList
            style={{flex: 1, margin: horizScale(10)}}
            data={sitesList}
            keyExtractor={(item, index) => item.id}
            renderItem={({item, index}) => <ChildItem item={item}
                                                      onTap={(selectedItem) => { this.props.parentNavigation.navigate('SitesDetailsScreen', {selectedSite: selectedItem}) }}/>}
          />
        </View>
      </View>
    )
  }
}

function ChildItem ({item, onTap, idx}) {
  return (
    <TouchableOpacity
      onPress={() => { onTap(item) }}
      style={styles.childItem}>
      <View>
        <FastImage
          style={{width: horizScale(80), height: horizScale(80)}}
          source={{
            uri: item.image,
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.cover}
        />
      </View>
      <View style={{flex: 1, justifyContent: 'center', marginLeft: horizScale(20)}}>
        {
          item.name && <Text style={styles.titleText}>{item.name}</Text>
        }
        <Spacer height={horizScale(10)}/>
        <View style={{flexDirection: 'row'}}>
          {
            item.address && <Text style={styles.subTitleText}>{item.address}</Text>
          }
        </View>
      </View>
    </TouchableOpacity>
  )
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    persistData: (data) => dispatch(SitesActions.persistData(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SitesListScreen)
