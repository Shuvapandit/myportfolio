import { useEffect, useState } from "react";
import Spinner from "./pages/Spinner/Spinner";
import Home from "./pages/Home/Home";
import ScrollTotop from "./pages/ScrollTotop/ScrollTotop";
function App() {
const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Simulating an async operation
    setTimeout(() => {
      setIsLoading(false); // Set isLoading to false after loading is completed
    }, 3000);
  }, []);
  return (
    <div className="font-serif ">
      {isLoading ? (
        <Spinner />
      ) : (
        <div>
          <Home></Home>
        </div>
      )}
      <ScrollTotop/>
    </div>
  );
}
export default App;
