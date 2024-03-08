import { View, Text } from 'react-native'
import {useState} from 'react'

//export default function ToDoList({tasks}) {
export default function ToDoList() {
    const [tasks] = useState(['Do laundry', 'Go to gym', 'Walk dog'])
  return (
    <View>
    {tasks.map((item, index) =>
    <Text key={index}>{item}</Text>
    )}
    </View>
  )
}