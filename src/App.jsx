import { useEffect, useState } from "react";

import Spinner from "./pages/Spinner/Spinner";
import Home from "./pages/Home/Home";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating an async operation
    setTimeout(() => {
      setIsLoading(false); // Set isLoading to false after loading is completed
    }, 3000);
  }, []);

  return (
    <div className="font-serif">
      {isLoading ? (
        <Spinner />
      ) : (
        /* Render your main content here */
        <div>
          <Home></Home>
        </div>
      )}
    </div>
  );
}

export default App;
