import { ThemeProvider } from "@/context/useTheme";
import "../../global.css";
import App from "./App";

const _layout = () => {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  )
}

export default _layout;