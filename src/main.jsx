import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {Provider} from "react-redux";
import App from './App.jsx'
import {store, persistor} from './redux/store';
import './index.css'
import {PersistGate} from "redux-persist/integration/react";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <App/>
            </PersistGate>
        </Provider>
    </StrictMode>,
)
