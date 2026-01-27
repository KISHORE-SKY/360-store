import NavBarSection from './navbar/navbar.jsx'
import { Outlet } from 'react-router-dom'
import Footer from './footerSection/footer.jsx'

function App() {

  return (
    <>
      <NavBarSection />
      <Outlet />
      <Footer />
    </>
  );
}

export default App
