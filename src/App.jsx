
import './App.css'
import Preferences from './components/preferences.jsx';
import SignupPage from './pages/signupPage.jsx'
import { Routes, Route } from "react-router-dom";
import Result from './components/Result.jsx';

function App() {

  return (
   <Routes>
      <Route path='/' element={<SignupPage/>}></Route>
      <Route path='/preferences' element={<Preferences/>}></Route>
      <Route path='/result' element={<Result/>}></Route>
    </Routes>
  )
}

export default App
