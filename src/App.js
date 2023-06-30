import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import Footer from './components/Footer';

const App = () => {

  const apiKey = process.env.REACT_APP_NEWS_API;

  const [progress, setProgress] = useState(30);

  const setprogress = (progress) => {
    setProgress(progress)
  }
  const pageSize = 6;

  return (
    <Router>
      <Navbar />
      <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Routes>
        <Route exact path="/" element={<News setprogress={setprogress} apiKey={apiKey} pageSize={pageSize} country="in" category="general" key="general" />} />
        <Route exact path="business" element={<News setprogress={setprogress} apiKey={apiKey} pageSize={pageSize} country="in" category="business" key="business" />} />
        <Route exact path="entertainment" element={<News setprogress={setprogress} apiKey={apiKey} pageSize={pageSize} country="in" category="entertainment" key="entertainment" />} />
        <Route exact path="health" element={<News setprogress={setprogress} apiKey={apiKey} pageSize={pageSize} country="in" category="health" key="health" />} />
        <Route exact path="science" element={<News setprogress={setprogress} apiKey={apiKey} pageSize={pageSize} country="in" category="science" key="science" />} />
        <Route exact path="sports" element={<News setprogress={setprogress} apiKey={apiKey} pageSize={pageSize} country="in" category="sports" key="sports" />} />
        <Route exact path="technology" element={<News setprogress={setprogress} apiKey={apiKey} pageSize={pageSize} country="in" category="technology" key="technology" />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App