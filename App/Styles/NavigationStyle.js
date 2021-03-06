import React from 'react-native'
import { Fonts, Metrics, Colors } from '../Themes/'

const NavigationStyle = React.StyleSheet.create({
  titleWrapper: {
    flex: 1,
    padding: Metrics.baseMargin,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  navTitle: {
    color: Colors.black,
    fontSize: Metrics.fonts.regular,
    fontFamily: Fonts.bold,
    justifyContent: 'center',
    alignSelf: 'center'
  },
  navSubtitle: {
    flex: 1,
    color: Colors.black,
    fontSize: Metrics.fonts.medium,
    fontFamily: Fonts.base,
    alignSelf: 'center'
  },
  backButton: {
    color: Colors.black,
    padding: Metrics.baseMargin
  },
  navigationBar: {
    backgroundColor: Colors.steel
  },
  settingsButton: {
    paddingRight: Metrics.baseMargin,
    paddingTop: Metrics.baseMargin + 3
  }
})

export default NavigationStyle
