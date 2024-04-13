import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Layout } from './components';
import { Home, Store } from './pages';

import { ShoppingCartProvider } from './context/ShoppingCartContext';

function App() {
  return (
    <>
      <ShoppingCartProvider>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='store' element={<Store />} />
            {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
            {/* <Route path='*' element={<NoMatch />} /> */}
          </Route>
        </Routes>
      </ShoppingCartProvider>
    </>
  );
}

export default App;
