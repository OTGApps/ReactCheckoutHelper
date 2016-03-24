import { StyleSheet } from 'react-native'
import { Fonts, Colors, Metrics, Base } from '../../Themes/'

export default StyleSheet.create({
  li: {
    backgroundColor: '#fff',
    borderBottomColor: '#eee',
    borderColor: 'transparent',
    borderWidth: 1,
    paddingLeft: 16,
    paddingTop: 14,
    paddingBottom: 16,
  },
  liContainer: {
    flex: 2,
  },
  liText: {
    color: '#333',
    fontFamily: Fonts.monospace,
    fontSize: 16,
  },
})
