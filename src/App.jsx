import {Routes,Route} from 'react-router-dom'
import './Scss/main.scss'
import Home from './Pages/Home.jsx'
import Details from './Pages/Details.jsx'
import Page404 from './Pages/Page404.jsx'
function App() {

  return (
   <Routes>
    <Route path='/Image_Gallery' element={<Home/>}/>
    <Route path='/Image_Gallery/details/:id' element={<Details/>}/>
    <Route path='*' element={<Page404/>}/>
   </Routes>
  )
}

export default App
