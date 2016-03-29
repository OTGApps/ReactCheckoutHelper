import { StyleSheet } from 'react-native'
import { Fonts } from '../../Themes/'

export default StyleSheet.create({
  topRight: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-end',
    backgroundColor: 'orange',
    padding: 10
  },
  subtotal: {
    paddingBottom: 30
  },
  total: {
    flex: 1,
    alignSelf: 'flex-end',
    justifyContent: 'flex-end'
  },
  mediumFont: {
    fontSize: 20
  },
  largeMonospace: {
    fontSize: 35,
    fontFamily: Fonts.monospace
  },
  small: {
    fontSize: 12,
    fontFamily: Fonts.monospace
  }
})
