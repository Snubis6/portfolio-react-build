import { Route, Routes, Navigate } from "react-router-dom";
import WelcomePage from './pages/WelcomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectSelectPage from './pages/ProjectSelectPage';
import Nav from './components/Nav';

function App() {
  return (
    <main>
      <Nav/>
      <Routes>
        <Route path='/' element={<WelcomePage/>}/>
        <Route path='/projects' element={<ProjectsPage/>}/>
        <Route path='/projects/:slug' element={<ProjectSelectPage/>}/>        
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='*' element={<Navigate to='/'/>}/>
      </Routes>
    </main>
  )
}

export default App;