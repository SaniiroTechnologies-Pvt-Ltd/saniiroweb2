import NavWrapper from '@/components/NavWrapper';
import Footer from '@/components/utils/Footer'

function WebLayout({ children }) {
 return (
  <>
   <NavWrapper />
   {children}
   <Footer />
  </>
 )
}

export default WebLayout
