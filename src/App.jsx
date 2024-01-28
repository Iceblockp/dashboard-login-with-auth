import React from 'react'
import {Routes,Route} from 'react-router-dom'
import { BlogPage, Dashboard, InventoryPage, LoginPage, RegisterPage, TablePage } from './page'

const App = () => {
  return (
    
    <div>

      <Routes>
        <Route path='/' element={<RegisterPage/>} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/dashboard' element={<Dashboard/>} >
          <Route index element={<InventoryPage/>} />
          <Route path='blog' element={<BlogPage/>} />
          <Route path='table' element={<TablePage/>} />

        </Route>
      </Routes>
    </div>
  )
}

export default App