import NavBarSection from './navbar/navbar.jsx'
import { Outlet } from 'react-router-dom'
import Footer from './footerSection/footer.jsx'
import { ThemeProvider } from './navbar/themeContext'

function App() {

  return (
    <>
      <ThemeProvider>
        <NavBarSection />
        <Outlet />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
