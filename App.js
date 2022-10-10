import { NativeBaseProvider } from "native-base";
import Shipping from "./src/Screens/Shipping";

export default function App() {
  return (
    <NativeBaseProvider>
      <Shipping />
    </NativeBaseProvider>
  );
}
