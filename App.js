import { StatusBar } from "expo-status-bar";
import HomeScreen from "./src/Screens/Home";
import { NativeBaseProvider, Text, Box } from "native-base";

export default function App() {
  return (
    <NativeBaseProvider>
      <HomeScreen />
    </NativeBaseProvider>
  );
}
