import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UserContext from './UserContext/UserContext.jsx'
import 'remixicon/fonts/remixicon.css'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <UserContext>
      <App />
    </UserContext>
  // </StrictMode>,
)
