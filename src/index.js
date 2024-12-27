import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Test} from './all-componants/test'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import { Generalstore } from './all-componants/generalstore';
import { Sample } from './all-componants/sample';
import {CounterExample} from './all-componants/counterExample';
import { Styleing } from './Styles/stylesinReact';
import { Index } from './all-componants/RoutingConcept/IndexPage';
import { Todolist } from './all-componants/RoutingConcept/netflex';
import { Parent } from './all-componants/parent';
import { ThemeProvider } from './all-componants/ThemeProvider';
import { ProgressBar } from './ProgressBar';
import { Second } from './all-componants/second';
import { LandsPage } from './all-componants/Conditional Rendering/LandsPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <ThemeProvider/> */}
    {/* <ProgressBar/> */}
    {/* <Second/> */}
   <Index/>

   

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
