import NavBarSection from './navbar/navbar.jsx'
import { Outlet } from 'react-router-dom'
import Footer from './footerSection/footer.jsx'
import { ThemeProvider } from './navbar/themeContext'

function App() {

  return (
    <>
      <ThemeProvider>
        <div className='min-h-screen flex flex-col '>
          <NavBarSection />
          <main className="flex-1 ">
            <Outlet />
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
