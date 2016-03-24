import { StyleSheet } from 'react-native'
import { Fonts, Colors, Metrics, Base } from '../Themes/'

export default StyleSheet.create({
  content: {
    flex:1,
    marginTop: 64,
  },
  topContent: {
    backgroundColor:'blue',
    flex:1,
    flexDirection:'row',
  },
  listView: {
    backgroundColor: 'red',
    backgroundColor:'yellow',
    flex:1,
  },
  topRight: {
    backgroundColor:'orange',
    flex:1,
    padding: 10,
    flexDirection:'column',
    alignItems: 'flex-end',
  },
  bottomContent: {
    flex:1,
  },
  row: {
    flex:1,
    flexDirection:'row',
  },
  button: {
    backgroundColor:'#AAAAAA',
    flex:1,
    flexDirection:'row',
    justifyContent:'center',
    alignItems: 'center',
  },
  redButton: {
    backgroundColor:'red'
  },
  blueButton: {
    backgroundColor:'blue'
  },
  greenButton: {
    backgroundColor:'green'
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
  }
})
