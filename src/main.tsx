import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import HomePage from './pages/HomePage'
import './styles/index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivacyPolicy from './pages/PrivacyPolicy'
import CookiesPolicy from './pages/CookiesPolicy';
import Host from './pages/Host';
import FranchiseOwner from './pages/FranchiseOwner';
import Join from './pages/Join';
import Sponsors from './pages/Sponsors';
import ResearchersEngineer from './pages/ResearcherEngineer';
import Media from './pages/Media';
import WatchVideo from './pages/WatchVideo';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/cookie-policy" element={<CookiesPolicy />} />
        <Route path='/host-nation' element={<Host />} />
        <Route path='researcher-engineer' element={<ResearchersEngineer />} />
        <Route path='/franchise-owner' element={<FranchiseOwner />} />
        <Route path='/join' element={<Join />} />
        <Route path='/sponsors' element={<Sponsors />} />
        <Route path='/media' element={<Media />} />
        <Route path='/video' element={<WatchVideo />} />
      </Routes>
    </Router>
  </StrictMode>,
)
