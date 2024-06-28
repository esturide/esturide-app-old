import { StyleSheet, Text, View } from "react-native";
import { TouchButton } from './components/TouchButton'
import Constants from "expo-constants";

function App() {
  return (
    <View style={styles.container}>
      <Text>Hello world</Text>
      <TouchButton label="Touch me" onPress={() => console.log("Text is touched")}/>
    </View>
  );
}

let AppEntryPoint = App;

if (Constants.expoConfig?.extra?.storybookEnabled === "true") {
  AppEntryPoint = require("./.storybook").default;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default AppEntryPoint;
