import React, { useEffect } from "react";

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {FiSettings} from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import {Navbar, Footer, Sidebar, ThemeSettings} from './components';
import {Ecommerce, Orders, Editor, ColorPicker, Calendar,Customers, Employees, Bar, Kanban} from './pages';
import './App.css';
const App = () => {
  const activeMenu = false;
  return (
  <div>
    <BrowserRouter>
    <div className="flex relative dark:bg-main-dark-bg">
      <div className="fixed right-4 bottom-4" style={{zIndex: '1000'}}>
        <TooltipComponent content ="Settings" position="Top">
          <button type="button" className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white" style={{background:'blue',
          borderRadius: "50%"}}>
            <FiSettings />
          </button>
        </TooltipComponent>
      </div>
      {activeMenu ? (
        <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
          <Sidebar />
        </div>
      ) :(
        <div className="w-0 dark:bg-secondary-dark-bg">
          <Sidebar />
        </div>
      )}
      <div className={
        `dark:bg-main-bg bg-mian-bg min-h-screen  w-full ${activeMenu ? ' md:ml-72' : ' flex-2'}`

      }>
        <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
          <Navbar />
        </div>
      </div>

      <div>
        <Routes>
          <Route path="/" element={<Ecommerce />} />
          <Route path="/ecommerce" element={<Ecommerce />} />
          {/* pages */}
          <Route path="/Orders" element={<Orders />} />
          <Route path="/employees" element={<Employees  />} />
          <Route path="/customers" element={<Customers  />} />
          {/* App */}
          <Route path="/kanban" element={<Kanban />} />
          <Route path="/editor" element={<Editor />} />
          <Route path="/calender" element={<Calendar />} />
          <Route path="/colorPicker" element={<ColorPick />} />
          {/* Chart */}
          <Route path="/bar" element={<Bar />} />
        </Routes>
      </div>


    </div>
    </BrowserRouter>
  </div>
  )
}

export default App;
