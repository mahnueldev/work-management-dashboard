import './App.css';
import { Dashboard } from '../src/pages';
import { SideNav, TopNav } from '../src/layouts';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='flex flex-col h-screen'>
      <Router>
        <div>
        <SideNav />
          <div>
            <TopNav />
            <div>
              <div className='flex-1 ml-12 '>
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
