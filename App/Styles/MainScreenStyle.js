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
  }
})
