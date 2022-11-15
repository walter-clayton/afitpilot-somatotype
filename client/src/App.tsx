import Landing from "./components/Landing";
import "./App.css";
import Button from "@mui/material/Button";
import ResponsiveAppBar from "./components/AppNavBar";
import { useState } from "react";
import Profile from "./Profile";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { BrowserRouter as Router,Route, Routes} from "react-router-dom"

function App() {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  const pageHandler = (currentPageIndex: any) => {
    setCurrentPageIndex(currentPageIndex);
  };

  return (
    <div>
      {/* <Landing />
      <Login />
      <Signup /> */}
      <ResponsiveAppBar changeCurrentPage={pageHandler} />

      {currentPageIndex === 0 ? (
        <div>
          {/* <Button variant="contained">Hello World</Button>
          <h1>Hello</h1> */}
               <Router>
      <Routes>
      <Route path="/" element={<Landing />}/>
      <Route path="/Signup" element={<Signup />}/>
      <Route path='/Login' element={<Login/>}/>
      </Routes>
      </Router>

        </div>
      ) : null}

      {currentPageIndex === 1 ? <Profile /> : null}
    </div>
  );
}

export default App;
