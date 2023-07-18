import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import AddUser from './Components/AddUser'
import AllUser from './Components/AllUsers'
import EditUser from './Components/EditUser'
import HomePage from './Components/HomePage'

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<HomePage />}></Route>
          <Route exact path='/add' element={<AddUser />}></Route>
          <Route exact path='/all' element={<AllUser />}></Route>
          <Route exact path='/edit/:id' element={<EditUser />}></Route>
        </Routes>
      </Router>

    </>
  )
}

export default App
