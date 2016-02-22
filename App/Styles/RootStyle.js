import { StyleSheet } from 'react-native'
import Fonts from './Fonts'

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
  listView: {
    backgroundColor: 'red',
    backgroundColor:'yellow',
    flex:1,
  },
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
