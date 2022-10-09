import { NativeBaseProvider, Text, Box } from "native-base";
import Cart from "./src/Screens/Cart";

export default function App() {
  return (
    <NativeBaseProvider>
      <Cart />
    </NativeBaseProvider>
  );
}
