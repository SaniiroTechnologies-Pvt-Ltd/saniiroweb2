import PageWrapper from '@/components/PageWrapper'
import Footer from '@/components/utils/Footer'

function WebLayout({ children }) {
 return (
  <PageWrapper>
   {children}
   <Footer />
  </PageWrapper>
 )
}

export default WebLayout
