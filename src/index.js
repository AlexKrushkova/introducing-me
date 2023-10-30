import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, Navigate, Route, Routes, useLocation} from "react-router-dom";

// const ProtectedRoute = ({children}) => {
//   const {token} = useAuth();
//   const location = useLocation();

//   if (!token) {
//       return <Navigate to="/login" replace state={{from: location}}/>;
//   }
//   return children;
// };

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
    <BrowserRouter>
    {/* <AuthProvider> */}
      <Routes>
          {/* <Route path="login" element={<Login/>}/> */}
          <Route path="*" element={<App/>}/>
          {/* <Route path="*" element={<RadiosProvider><ProtectedRoute><App/></ProtectedRoute></RadiosProvider>}/> */}
      </Routes>
    {/* </AuthProvider> */}
    </BrowserRouter>
  </React.StrictMode>
);