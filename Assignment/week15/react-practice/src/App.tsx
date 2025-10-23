import { useRef } from "react";
import CustomCursor from "./Components/CustomCursor";
import Keybord from "./Components/Keybord";

const App = () => {

  const cursor = useRef(null);

  return (
    <div className="bg-background text-foreground h-screen w-screen flex items-center justify-center cursor-none">
      <CustomCursor refObject={cursor}/>
      <Keybord />
    </div>
  );
}

export default App;