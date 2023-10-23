import { Navbar } from "./components/Navbar";
import { LandingPage } from "./pages/LandingPage";
import { Participation } from "./pages/Participation";
function App() {
  return (
    <>
      <div className="min-w-screen min-h-[100vh] bg-[#000000]">
        <Navbar />

        <LandingPage />
        <Participation />
      </div>
    </>
  );
}

export default App;
