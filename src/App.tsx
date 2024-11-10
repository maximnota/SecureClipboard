import "@radix-ui/themes/styles.css";
import { Theme } from '@radix-ui/themes';
import DecryptionScreen from "./components/decryptionScreen";

function App() {
  return (
      <Theme
      accentColor="crimson"
      grayColor="sand"
      radius="large"
      scaling="95%"
    >
      <DecryptionScreen />
    </Theme>
  );
}

export default App;
