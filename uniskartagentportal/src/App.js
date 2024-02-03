import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import SignIn from './Pages/Auth/LoginPage';
import LandingPage from './Pages/Dashboard/LandingPage';
import ForgetPassword from './Pages/Auth/LoginPage/ForgetPassword';
import SearchProgram from './Pages/SearchProgram/Index';
import Result from './Components/Result';
import { Unauthenticated, PrivateRoutes } from './ProtectedRoutes';
import Student_Register_form from './Pages/Student_Register_form';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Unauthenticated />}>
        <Route exact path="/login" element={<SignIn />} />
        <Route exact path="/forget-password" element={<ForgetPassword />} />
        <Route exact path="*" element={<Navigate to="/login" />} />
        </Route>
        <Route element={<PrivateRoutes />}>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/search-program" element={<SearchProgram />} />
          <Route exact path="/result" element={<Result />} />
          <Route exact path="/student-form/:id" element={<Student_Register_form />} />
          <Route exact path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes >
    </div>
  );
}

export default App;
