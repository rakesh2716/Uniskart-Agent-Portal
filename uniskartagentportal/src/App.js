import './App.css';
import { Route, Routes } from 'react-router-dom';
import SignIn from './Pages/Auth/LoginPage';
import LandingPage from './Pages/Dashboard/LandingPage';
import ForgetPassword from './Pages/Auth/LoginPage/ForgetPassword';
import SearchProgram from './Pages/SearchProgram/Index';
import Result from './Components/Result';

import { Unauthenticated, PrivateRoutes } from './ProtectedRoutes';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Unauthenticated />}>
        <Route exact path="/login" element={<SignIn />} />
        <Route exact path="/forget-password" element={<ForgetPassword />} />
        </Route>
        <Route element={<PrivateRoutes />}>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/search-program" element={<SearchProgram />} />
          <Route exact path="/result" element={<Result />} />
        </Route>
      </Routes >
    </div>
  );
}

export default App;
