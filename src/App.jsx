import {Routes, Route} from 'react-router'
import HomePage from './pages/HomePage.jsx';
import './App.css'
import OrdersPage from './pages/OrdersPage';
import TrackingPage from './pages/TrackingPage';
import CheckOutPage from './pages/checkout/CheckOutPage.jsx';

function App() {
  
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path='checkout' element={<CheckOutPage />} />
      <Route path='orders' element={<OrdersPage/>} />
      <Route path='tracking' element={<TrackingPage/>} />
    </Routes>
    
  )
}

export default App
