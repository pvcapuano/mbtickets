import SingleProduct from "./src/Screens/SingleProduct";
import { NativeBaseProvider, Text, Box } from "native-base";

export default function App() {
  return (
    <NativeBaseProvider>
      <SingleProduct />
    </NativeBaseProvider>
  );
}
