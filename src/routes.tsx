import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';

function RoutesApp() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default RoutesApp;
