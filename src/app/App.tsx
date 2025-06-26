import { useTheme } from "@/context/useTheme";
import Home from "./Home";
import Splash from "@/components/Splash";

const App = () => {
    const { isThemeLoaded } = useTheme();

    return (
        <>
            { isThemeLoaded ? <Home /> : <Splash /> }
        </>
    );
};

export default App;
