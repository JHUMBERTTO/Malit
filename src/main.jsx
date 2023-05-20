import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import CustomRoutes from './components/CustomRoutes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <CustomRoutes />
  </BrowserRouter>
)
