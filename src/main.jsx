import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { Provider } from 'react-redux';
import store from './app/store.js'

createRoot(document.getElementById('root')).render(
    <BrowserRouter >
        <Provider store={store}>
            <App />
            <ToastContainer />
        </Provider>
    </BrowserRouter>  
)
