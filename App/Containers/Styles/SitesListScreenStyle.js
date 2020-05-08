import { Platform, StyleSheet } from 'react-native'
import Fonts from '../../Themes/Fonts'
import { horizScale } from '../../Components/LayoutUtil'

export default StyleSheet.create({
  container: {flex: 1, backgroundColor: '#FFF', marginTop: Platform.OS === 'ios' ? -20 : 0},
  titleText: {
    color: '#000',
    fontSize: Fonts.size.h5,
  },
  subTitleText: {flex: 1, color: '#000', fontSize: Fonts.size.medium},
  childItem: {
    margin: horizScale(5), flexDirection: 'row', padding: horizScale(5), backgroundColor: 'white',
    borderRadius: 10,
    shadowOffset: {width: 1, height: 1},
    shadowColor: 'black',
    shadowOpacity: 0.5,
  },
})
