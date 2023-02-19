import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'
import ProductContextProvider from './components/ProductsContextProvider';
import store from './redux/store';
import { Provider } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ProductContextProvider>
    <Router>
      <React.StrictMode>
        <Provider store={store}> 
          <ToastContainer
          theme="dark"
          position="bottom-right"
          autoClose={1000}
          closeOnClick
          pauseOnHover={false}
          />
          <App />
        </Provider>
      </React.StrictMode>
    </Router>
  </ProductContextProvider>
);
