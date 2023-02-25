import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import store, {persistor} from "./redux/store"
import { QueryClientProvider } from "react-query";
import { queryClient } from './utils/queryClient';
import { PersistGate } from "redux-persist/integration/react";
import { ReactQueryDevtools } from "react-query/devtools";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}> 
      <Provider store = {store}>
        <PersistGate loading={null} persistor={persistor}>
          <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
          <App />
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>
);

 
