import Portfolio from './pages/Portfolio';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route path="/Portfolio" element={<Portfolio />} />
      <Route path="/Portfolio/" element={<Portfolio />} />
    </Routes>
  );
};

export default App;
