import './App.css';
import Signup from './components/Signup';
import Login from './components/Login';
import { BrowserRouter as Router,Route, Routes} from "react-router-dom"

function App() {
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
  );
}

export default App;
