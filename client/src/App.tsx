import './App.css';
import Signup from './components/Signup';
import Login from './components/Login';
import { BrowserRouter as Router,Route, Routes} from "react-router-dom"
import Button from '@mui/material/Button';
import ResponsiveAppBar from './components/AppNavBar';
import { useState } from 'react';
import Profile from './Profile';

function App() {
  const [currentPageIndex, setCurrentPageIndex] = useState(0); 

  const pageHandler = (currentPageIndex:any) => {
    setCurrentPageIndex(currentPageIndex);

  return (
    <div>
     <Router>
      <Routes>
      {/* <Route exact path="/" element={<Landing />}/> */}
      <Route path="/" element={<Signup />}/>
      <Route path='/Login' element={<Login/>}/>
      </Routes>
      </Router>
       </div>
        <div>
      <ResponsiveAppBar changeCurrentPage={pageHandler}/>
      
      {currentPageIndex === 0 ? 
        <div>
          <Button variant="contained">Hello World</Button>
          <h1>Hello</h1>
        </div> :
        null 
      }

      {currentPageIndex === 1 ?
        <Profile/> :
        null 
      }
    </div>




export default App;
