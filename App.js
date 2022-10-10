import { NativeBaseProvider } from "native-base";
import Payment from "./src/Screens/Payment";

export default function App() {
  return (
    <NativeBaseProvider>
      <Payment />
    </NativeBaseProvider>
  );
}
