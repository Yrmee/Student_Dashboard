import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

// Components
import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';

// Pages
import Home from './pages/home/Home';
import Analytics from './pages/analytics/Analytics';
import StudentList from './pages/studentList/StudentList';
import Student from './pages/student/Student';
import PageNotFound from './pages/pageNotFound/PageNotFound';

function App() {
  return (
    <BrowserRouter>
        <Topbar />
          <div className="container">
            <Sidebar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/studentlist" element={<StudentList />} />
              <Route path="/students/:id" element={<Student />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </div>
  </BrowserRouter>
  );
}

export default App;

