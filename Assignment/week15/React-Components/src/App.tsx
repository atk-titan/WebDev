import GlowingButton from "./components/GlowingButton";
import Pattern from "./components/Pattern";

function App() {
  return (
    <div className="h-screen w-screen relative bg-neutral-900 overflow-hidden flex justify-center items-center">
      <GlowingButton className="text-neutral-200 z-10" title="Click Me" />
      <Pattern />
    </div>
  );
}

export default App;