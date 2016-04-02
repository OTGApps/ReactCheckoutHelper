import { StyleSheet } from 'react-native'
import { Colors } from '../Themes/'

export default StyleSheet.create({
  content: {
    flex: 1,
    marginTop: 64
  },
  topContent: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'blue'
  },
  listView: {
    flex: 1,
    backgroundColor: 'yellow',
    // Shadows don't work on list views as of now :(
    // shadowColor: "#000000",
    // shadowOpacity: 0.8,
    // shadowRadius: 2,
    // shadowOffset: {
    //   height: -5,
    //   width: 0
    // }
  },
  bottomContent: {
    flex: 1
  },
  row: {
    flex: 1,
    flexDirection: 'row'
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#AAAAAA',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 2,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Colors.silver
  },
  redButton: {
    backgroundColor: Colors.red
  },
  blueButton: {
    backgroundColor: Colors.blue
  },
  greenButton: {
    backgroundColor: Colors.green
  }
})
