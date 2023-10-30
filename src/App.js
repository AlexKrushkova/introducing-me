import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './pages/Home.js'
import Login from './pages/Login.js'
import Navigation from './components/Navigation';

function App() {

  return (
    <div className="App">
    <div className=''>
      <Navigation></Navigation>
    </div>
    <div>
              {/* <DataContext.Provider value={contextValues}> */}
                  <Routes>
                      <Route path="/" element={<Home/>}></Route>
                      <Route path="/login" element={<Login/>}></Route>
                     
                  </Routes>
              {/* </DataContext.Provider> */}
          </div>
  </div>
  );
}

export default App;
