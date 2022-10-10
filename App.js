import { NativeBaseProvider } from "native-base";
import Profile from "./src/Screens/Profile";

export default function App() {
  return (
    <NativeBaseProvider>
      <Profile />
    </NativeBaseProvider>
  );
}
