import { StyleSheet } from 'react-native'
import { Fonts, Colors, Metrics, Base } from '../../Themes/'

export default StyleSheet.create({
  topRight: {
    backgroundColor:'orange',
    flex:1,
    padding: 10,
    flexDirection:'column',
    alignItems: 'flex-end',
  },
  subtotal: {
    paddingBottom: 30,
  },
  total: {
    flex: 1,
    alignSelf: "flex-end",
    justifyContent: "flex-end",
  },
  mediumFont: {
    fontSize: 20,
  },
  largeMonospace: {
    fontSize: 35,
    fontFamily: Fonts.monospace,
  },
  small: {
    fontSize: 12,
    fontFamily: Fonts.monospace,
  }
})
