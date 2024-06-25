
import './App.css'
import { Route, Routes } from 'react-router-dom'
import MainPage from './pages/main/MainPage'
import UserInfoPage from './pages/userInfo/UserInfoPage'
import NotFoundPage from './pages/notFound/NotFoundPage'

function App() {
 

  return (
    <>
     <Routes>
      <Route path="/" element={<MainPage/>}>
      <Route path='/user/:id' element={<UserInfoPage/>}/>

      </Route>
      <Route path='/404' element={<NotFoundPage/>}/>
     </Routes>
    </>
  )
}

export default App
