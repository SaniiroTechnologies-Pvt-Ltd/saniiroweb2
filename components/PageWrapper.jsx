import { Container } from '@mui/material';

const PageWrapper = ({ children }) => (
 <Container
  component={"main"}
  maxWidth={'1536px'}
  sx={{
   margin: { xs: "0 auto" },
   boxSizing: 'content-box',
   padding: { xs: 0 },
   width: '100%',
  }}
 >
  {children}
 </Container>
);

export default PageWrapper;
