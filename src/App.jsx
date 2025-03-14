import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import Home from './components/Home'
import Test from './components/Test'
import Result from './components/Result'
import './App.css'

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#4096ff',
          colorLink: '#4096ff',
          colorLinkHover: '#1677ff',
          borderRadius: 8,
          fontFamily: '"Helvetica Neue", Arial, sans-serif',
          boxShadow: '0 8px 24px rgba(149, 157, 165, 0.1)',
          colorBgContainer: '#ffffff',
          colorBgElevated: '#ffffff',
        },
      }}
    >
      <Router>
        <div className="app-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/test" element={<Test />} />
            <Route path="/result" element={<Result />} />
          </Routes>
        </div>
      </Router>
    </ConfigProvider>
  )
}

export default App
