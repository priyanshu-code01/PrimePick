import Footer from './Footer'
import Navbar from './Navbar'
import SearchBar from './SearchBar'

const Layout = ({children}) => {
  return (
    <>
      <Navbar />
      <SearchBar />
      <>
      {children}
      </>
      <Footer />
    </>
  )
}

export default Layout
