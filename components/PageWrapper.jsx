import { Container } from '@mui/material';

const PageWrapper = ({ children }) => (
 <Container
  // component={"main"}
  maxWidth={false}
  sx={{
   // margin: { xs: "0 auto" },
   mx: "auto",
   boxSizing: 'border-box',
   padding: { xs: 0 },
   width: '100%',
   overflowX: 'hidden'
  }}
 >
  {children}
 </Container>
);

export default PageWrapper;
