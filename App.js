import Register from "./src/Screens/Register";
import { NativeBaseProvider, Text, Box } from "native-base";

export default function App() {
  return (
    <NativeBaseProvider>
      <Register />
    </NativeBaseProvider>
  );
}
