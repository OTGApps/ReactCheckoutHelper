import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  mainContainer: {
    flex:1,
  },
  toolbar: {
      backgroundColor:'#CCCCCC',
      paddingTop:30,
      paddingBottom:10,
      flexDirection:'row'
  },
  toolbarTitle: {
      color:'#000',
      textAlign:'center',
      fontWeight:'bold',
      flex:1
  },
  content: {
    flex:1,
  },
  topContent: {
    backgroundColor:'blue',
    flex:1,
    flexDirection:'row',
  },
  topLeft: {
    backgroundColor:'yellow',
    flex:1,
  },
  topRight: {
    backgroundColor:'orange',
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
  },
  buttonText: {
    textAlign:'center'
  }
});
