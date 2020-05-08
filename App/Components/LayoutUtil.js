import React from 'react'
import { Dimensions, Text as RNText, View } from 'react-native'
import PropTypes from 'prop-types'

const REFERENCE_WIDTH = 414
const REFERENCE_HEIGHT = 736

const {height, width} = Dimensions.get('window')

// Scale according to reference size based on the the 360x640 mockups
const horizScale = (val) => width * ( val / REFERENCE_WIDTH )

// Position vertically according to the 360x640 mockups
const vertScale = (val) => height * ( val / REFERENCE_HEIGHT )

const primaryColor = '#44B7CC'
const colorGray = '#F8F8F8'
const primaryTextColor = '#3E3E3F'
const secondaryTextColor = '#403F41'

const basePadding = horizScale(40)
const baseSpacing = horizScale(40)

const Text = (props) => (
  <RNText style={[props.style]} allowTextFontScaling={true}>
    {props.children}
  </RNText>
)

const Spacer = (props) => (
  <View style={{width: '100%', height: horizScale(props.height)}} />
)
Spacer.propTypes = {
  height: PropTypes.number
}

export {
  vertScale,
  horizScale,
  primaryColor,
  basePadding,
  colorGray,
  baseSpacing,
  Text,
  Spacer
}
