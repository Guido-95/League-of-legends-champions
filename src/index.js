import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Header from './components/Header';
import Footer from './components/Footer';
import DetailChampion from './pages/DetailChampion';
import App from './App';
import Champions from './pages/Champions';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Champions />} />
        {/* <Route path="/champions" element={<Champions />} /> */}
        <Route path='/:nameChampion' element= {<DetailChampion />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
