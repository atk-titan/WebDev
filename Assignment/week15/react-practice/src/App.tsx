import CustomCursor from "./Components/CustomCursor";
import Keybord from "./Components/Keybord";

const App = () => {
  return (
    <div className="bg-background text-foreground h-screen w-screen flex items-center justify-center">
      <CustomCursor />
      <Keybord />
    </div>
  );
}

export default App;