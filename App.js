import { StatusBar } from "expo-status-bar";
import Login from "./src/Screens/Login";
import { NativeBaseProvider, Text, Box } from "native-base";

export default function App() {
  return (
    <NativeBaseProvider>
      <Login />
    </NativeBaseProvider>
  );
}
