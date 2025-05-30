import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { BrowserRouter as Router, Routes, Route ,Navigate} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import StorePage from './pages/StorePage';
import DashboardPage from './pages/DashboardPage';
import AuthForm from './components/AuthForm';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Navbar />
      <div style={{ minHeight: '80vh', padding: '20px' }}>
        <Routes>
          <Route path="/store/:store_id" element={<StorePage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/login" element={<AuthForm type="login" />} />
          <Route path="/register" element={<AuthForm type="register" />} />
          <Route path="/" element={<Navigate to="/login" replace />} />
          </Routes>
          </div>
      <Footer />
    </Router>
  )
}

export default App ;
