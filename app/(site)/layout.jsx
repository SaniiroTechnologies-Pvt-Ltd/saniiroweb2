import PageWrapper from '@/components/PageWrapper'
import Footer from '@/components/utils/Footer'

export default function WebLayout({ children }) {
 return (
  <PageWrapper>
   {children}
   <Footer />
  </PageWrapper>
 )
}