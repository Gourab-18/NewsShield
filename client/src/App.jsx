import { Navbar } from "./components/Navbar";
import { LandingPage } from "./pages/LandingPage";
function App() {
  return (
    <>
      <div className="min-w-screen min-h-[100vh] bg-[#000000]">
        <Navbar />

        <LandingPage />
      </div>
    </>
  );
}

export default App;
