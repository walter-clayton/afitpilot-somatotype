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
  );
}

export default App;
