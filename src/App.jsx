import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CarListingsPage from './pages/CarListingsPage';
import CarDetailPage from './pages/CarDetailPage';
import SellCarPage from './pages/SellCarPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import AdminDashboard from './admin/AdminDashboard';
import CarManagement from './admin/CarManagement';
import Transactions from './admin/Transactions';
import UserManagement from './admin/UserManagement';
import './styles/global.css';
import './styles/tailwind.css'
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cars" element={<CarListingsPage />} />
            <Route path="/cars/:id" element={<CarDetailPage />} />
            <Route path="/sell" element={<SellCarPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/AdminDashboard" element={<AdminDashboard />} />
            <Route path="/car-management" element={<CarManagement />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/user-management" element={<UserManagement />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
