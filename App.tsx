import { StyleSheet, Text, View } from "react-native";
import { TouchText } from '@/components/TouchText'
import {ButtonAlert} from "@/components/ButtonAlert";
import Constants from "expo-constants";

function App() {
  return (
    <View style={styles.container}>
      <Text>Hello world</Text>
      <TouchText label="Touch me" onPress={() => console.log("Text is touched")}/>
      <ButtonAlert label={"Alert"}/>
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
