import { NativeBaseProvider } from "native-base";

import PlaceOrder from "./src/Screens/PlaceOrder";

export default function App() {
  return (
    <NativeBaseProvider>
      <PlaceOrder />
    </NativeBaseProvider>
  );
}
