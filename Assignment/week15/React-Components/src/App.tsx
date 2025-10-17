import Card from "./components/Card";
// import GlowingButton from "./components/GlowingButton";
import Pattern from "./components/Pattern";

function App() {
  return (
    <div className="h-screen w-screen relative bg-neutral-900 overflow-hidden flex flex-col justify-center items-center">
      {/* <GlowingButton className="text-neutral-200 z-10" title="Click Me" /> */}
      <div className="z-10">
        <Card className="bg-neutral-900"/>
      </div>
      <Pattern />
    </div>
  );
}

export default App;