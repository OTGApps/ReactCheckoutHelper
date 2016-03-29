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
    backgroundColor: 'yellow'
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
    alignItems: 'center'
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
