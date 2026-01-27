import { createRoot } from 'react-dom/client'
import App from './app/App'
import { BrowserRouter } from 'react-router-dom'
import "./index.css"

const root = document.getElementById('root')
createRoot(root).render(
  <BrowserRouter>
    <div className='bg-(--color-bg)'>
      <App />
    </div>
  </BrowserRouter>
)
