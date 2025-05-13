import { Container } from '@mui/material';

const PageWrapper = ({ children }) => (
 <Container
  component={"main"}
  maxWidth={'xxl'}
  disableGutters
  sx={{
   mx: "auto",
   boxSizing: 'border-box',
   width: '100%',
  }}
 >
  {children}
 </Container>
);

export default PageWrapper;
