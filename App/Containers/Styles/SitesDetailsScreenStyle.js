import { StyleSheet } from 'react-native'
import Fonts from '../../Themes/Fonts'

export default StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF' },
  titleText: {
    color: '#000',
    fontSize: Fonts.size.h5,
    fontWeight: '600'
  },
  subTitleText: { flex: 1, color: '#000', fontSize: Fonts.size.medium }
})
