import { StyleSheet } from 'react-native'
import { Fonts, Colors, Metrics, Base } from '../../Themes/'

export default StyleSheet.create({
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
  buttonText: {
    textAlign:'center'
  },
})
