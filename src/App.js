import './assets/App.css';
import Footer from './components/partials/Footer';
import Header from './components/partials/Header';
import Home from './pages/Home';
import { AnimatePresence } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'


import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const cursor = useRef (null)
  const cursor123 = useRef (null)

  useEffect(() => {
      document.addEventListener("mousemove", e => {
          // const { clientX, clientY } = e
          const mouseX = e.pageX 
          const mouseY = e.pageY
          
          cursor.current.style = `left:${mouseX}px; top: ${mouseY}px`
          setTimeout(() => {
              cursor123.current.style = `left:${mouseX}px; top: ${mouseY}px`
          },150)
      })
      return () => {}

  }, [])
  return (
    <Router>
       <div className="cursor position-absolute center rounded-circle bg-2" ref={cursor}></div>
      <div className="border-cursor position-absolute rounded-circle center" ref={cursor123}></div>
      <Header />
      <Route 
        render ={({location})=> (
          <AnimatePresence >
            <Switch location={location} key={location.pathname}>
              <Route exact path="/" render={() => <Home />}/>
            </Switch>
          </AnimatePresence>
        )}
      />
      <Footer />
    </Router>
  );
}

export default App;
