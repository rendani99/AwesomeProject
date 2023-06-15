import { Text, View, TextInput, Button, StyleSheet } from 'react-native'

export default function App() {
  return (
    <View>
      {/* to render input along with the button */}
      <view>
        <TextInput placeholder="Add Your Note Here " />
        <Button title="Add Note" />
      </view>
    </View>
  )
}

const styles = StyleSheet.create({})
