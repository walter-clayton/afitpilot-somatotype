<<<<<<< HEAD
import Landing from './components/Landing';
=======
>>>>>>> 1f70a67d5a67d11c46082f8e8e14018681169bcc
import './App.css';
import Button from '@mui/material/Button';
import ResponsiveAppBar from './components/AppNavBar';
import { useState } from 'react';
import Profile from './Profile';

function App() {
  const [currentPageIndex, setCurrentPageIndex] = useState(0); 

  const pageHandler = (currentPageIndex:any) => {
    setCurrentPageIndex(currentPageIndex);
  }

  return (
<<<<<<< HEAD
    
    <div>
            <Landing/>

=======
    <div>
>>>>>>> 1f70a67d5a67d11c46082f8e8e14018681169bcc
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
  );
}

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> 1f70a67d5a67d11c46082f8e8e14018681169bcc
