import React, { Component } from 'react'
import {
  ScrollView,
  Text,
  KeyboardAvoidingView,
  View,
  Platform,
  PixelRatio,
  TouchableOpacity, Image, FlatList,
} from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/SitesDetailsScreenStyle'
import { horizScale, Spacer } from '../Components/LayoutUtil'

import { Colors } from '../Themes'
import FAIcon from 'react-native-vector-icons/FontAwesome'
import NavigationBar from 'react-native-navbar'
import FastImage from 'react-native-fast-image'

class SitesDetailsScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedSite: props.navigation.state.params.selectedSite
        ? props.navigation.state.params.selectedSite
        : null,
    }
  }

  render () {
    const {selectedSite} = this.state
    let mainContact = (selectedSite && selectedSite.contacts && selectedSite.contacts.length > 0) ? selectedSite.contacts[0] : null
    let remainingContacts = (selectedSite && selectedSite.contacts && selectedSite.contacts.length > 1) ? selectedSite.contacts.slice(1, selectedSite.contacts.length) : []
    return (
      <View style={styles.container}>
        <NavigationBar
          style={{
            borderBottomColor: '#CBC8C8',
            borderBottomWidth: 1 / PixelRatio.get(),
          }}
          title={{
            title: 'All sites',
            style: {
              color: 'black',
              fontSize: horizScale(16),
              fontWeight: '700',
            },
          }}
          leftButton={
            <TouchableOpacity
              style={{
                padding: 6,
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
                alignSelf: 'center',
              }}
              onPress={() => {
                this.props.navigation.goBack()
              }}>
              <View
                style={{
                  marginTop: horizScale(5),
                  width: horizScale(35),
                  height: horizScale(35),
                  backgroundColor: '#fff',
                  alignItems: 'center',
                  alignSelf: 'center',
                  padding: horizScale(3),
                  justifyContent: 'center',
                  borderColor: '#000',
                }}>
                <FAIcon
                  name="arrow-left"
                  size={20}
                  style={{color: Colors.purple, alignSelf: 'center'}}
                />
              </View>
            </TouchableOpacity>
          }
          rightButton={
            <TouchableOpacity
              style={{
                padding: 6,
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
                alignSelf: 'center',
              }}
              onPress={() => {
                console.log('edit this screen')
              }}>
              <View
                style={{
                  marginTop: horizScale(5),
                  width: horizScale(35),
                  height: horizScale(35),
                  backgroundColor: '#fff',
                  alignItems: 'center',
                  alignSelf: 'center',
                  padding: horizScale(3),
                  justifyContent: 'center',
                  borderColor: '#000',
                }}>
                <FAIcon
                  name="pencil"
                  size={20}
                  style={{color: Colors.purple, alignSelf: 'center'}}
                />
              </View>
            </TouchableOpacity>
          }
        />
        <ScrollView>
          <View style={{flex: 1}}>
            <Spacer height={horizScale(20)}/>
            <View
              style={{
                margin: horizScale(5), flexDirection: 'row', padding: horizScale(5),
              }}>
              <FastImage
                style={{ width: horizScale(120), height: horizScale(120) }}
                source={{
                  uri: selectedSite.image,
                  priority: FastImage.priority.normal,
                }}
                resizeMode={FastImage.resizeMode.cover}
              />
              <View style={{flex: 1, justifyContent: 'center', marginLeft: horizScale(30)}}>
                <View>
                  <Text style={styles.titleText}>{'Building name:'}</Text>
                  <Spacer height={horizScale(10)}/>
                  {
                    selectedSite.name && <Text style={styles.subTitleText}>{selectedSite.name}</Text>
                  }
                </View>
                <Spacer height={horizScale(10)}/>
                {
                  mainContact && <View>
                    <Text style={styles.titleText}>{'Main contact:'}</Text>
                    <Spacer height={horizScale(10)}/>
                    {
                      mainContact.name && <Text style={styles.subTitleText}>{mainContact.name}</Text>
                    }
                  </View>
                }
              </View>
            </View>
            <View
              style={{
                margin: horizScale(10), flexDirection: 'row', padding: horizScale(5),
              }}>
              <View style={{flex: 1, justifyContent: 'center'}}>
                <View>
                  <Text style={styles.titleText}>{'Address:'}</Text>
                  <Spacer height={horizScale(10)}/>
                  {
                    selectedSite.address && <Text style={styles.subTitleText}>{selectedSite.address}</Text>
                  }
                </View>
                <Spacer height={horizScale(30)}/>
                {
                  mainContact && <View>
                    <Text style={styles.titleText}>{'Phone:'}</Text>
                    <Spacer height={horizScale(10)}/>
                    {
                      mainContact.phone && <View style={{flexDirection: 'row'}}>
                        {
                          mainContact.phone && <Text style={{flex: 1}}>{mainContact.phone}</Text>
                        }
                        <Text style={{justifyContent: 'flex-end'}}>{'Phone'}</Text>
                      </View>
                    }
                    {
                      mainContact.phone_home && <View style={{flexDirection: 'row'}}>
                        {
                          mainContact.phone_home && <Text style={{flex: 1}}>{mainContact.phone_home}</Text>
                        }
                        <Text style={{justifyContent: 'flex-end'}}>{'Home'}</Text>
                      </View>
                    }
                    <Spacer height={horizScale(30)}/>
                    <Text style={styles.titleText}>{'Email:'}</Text>
                    <Spacer height={horizScale(10)}/>
                    {
                      mainContact.email && <Text>{mainContact.email}</Text>
                    }
                  </View>
                }
              </View>
            </View>
            {
              remainingContacts.length > 0 &&
              <View style={{ borderColor: '#000', borderWidth: 1, margin: horizScale(15) }}>
                <Text style={{fontWeight: '500', paddingLeft: horizScale(10), paddingTop: horizScale(5), paddingBottom: horizScale(5), backgroundColor: 'grey'}}>{'Other contacts'}</Text>
                <FlatList
                  style={{flex: 1}}
                  data={remainingContacts}
                  keyExtractor={(item, index) => item.id}
                  renderItem={({item, index}) => <ChildItem item={item}/>}
                />
              </View>
            }
          </View>
        </ScrollView>
      </View>
    )
  }
}

function ChildItem ({item, idx}) {
  return (
    <View
      style={{
        margin: horizScale(5), flexDirection: 'row', padding: horizScale(5),
      }}>
      <View style={{flexDirection: 'row', flex: 1}}>
        {
          item.name && <Text style={{flex: 1}}>{item.name}</Text>
        }
        {
          item.phone && <Text style={{justifyContent: 'flex-end'}}>{item.phone}</Text>
        }
      </View>
    </View>
  )
}

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SitesDetailsScreen)
