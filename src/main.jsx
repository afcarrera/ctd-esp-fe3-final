import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import Context from "./Context.jsx";
import ContextProvider from './Components/utils/global.context.jsx';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ContextProvider>
      <Context>
        <App />
      </Context>
    </ContextProvider>
  </BrowserRouter>
);


