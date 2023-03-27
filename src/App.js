import './App.css';
import MainPage from './pages/MainPage';
import DetailPage from './pages/DetailPage';
import CartPage from './pages/CartPage';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/detail" element={<DetailPage />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
