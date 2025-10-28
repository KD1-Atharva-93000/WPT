import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import FirstNew from './components/FirstNew.jsx'
import FirstReact from './components/FirstReact.jsx'
import Heros from './components/heros.jsx'

createRoot(document.getElementById('root')).render(
     //<div>
      //<FirstNew title="James Bond" author="Sean" category="hv" price="200"  /> 
    // </div>
    //<FirstReact/>
    <div>
       <Heros/>
    </div>
)
