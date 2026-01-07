import {Routes, Route} from 'react-router'
import HomePage from './pages/HomePage.jsx';
import './App.css'
import OrdersPage from './pages/OrdersPage';
import TrackingPage from './pages/TrackingPage';
import CheckOutPage from './pages/checkout/CheckOutPage.jsx';
import PageNotFound from './pages/PageNotFound.jsx';

function App() {
  
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path='checkout' element={<CheckOutPage />} />
      <Route path='orders' element={<OrdersPage/>} />
      <Route path='tracking' element={<TrackingPage/>} />
      <Route path='*' element={<PageNotFound/>} />
    </Routes>
    
  )
}

export default App
