import './App.css';
import { Dashboard } from '../src/pages';
import { SideNav, TopNav } from '../src/layouts';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='flex flex-col h-screen'>
      <Router>
        <div className='flex'>
          <SideNav />
          <div className='flex-1'>
            <TopNav />
            <div className='flex'>
              <div className='flex-1'>
                <Routes>
                  <Route path='/' element={<Dashboard />} />
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
