import { Navbar } from "./components/Navbar";
import { LandingPage } from "./pages/LandingPage";
import { Participation } from "./pages/Participation";

import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

const notify = () => toast("Here is your toast.");
function App() {
  // useEffect(() => {
  //   toast.success("Success");
  // }, [2]);

  return (
    <>
      <div className="min-w-screen min-h-[100vh] bg-[#000000]">
        <Navbar />
        <LandingPage />
        {/* <Participation /> */}
      </div>
    </>
  );
}

export default App;
