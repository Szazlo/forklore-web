import {Box, Button, Container, Grid, InputAdornment, TextField, Typography} from '@mui/material';
import {EmailOutlined} from '@mui/icons-material';

export default function NewsletterBox() {


  return (
    <Box width={1} bgcolor="background.light" py={5} my={4}>
      <Container maxWidth="md" sx={{ textAlign: "center" }}>
        <Typography variant="h3" gutterBottom fontWeight="bold">Let's stay in touch!</Typography>
        <Container maxWidth="sm">
          <Typography variant="h6" color="text.dark" gutterBottom>Join our newsletter, so we can reach out to you with our news and offers.</Typography>
        </Container>
        <Container maxWidth="sm" sx={{ my: 2 }}>
          <Grid container width={1} alignItems="center" justifyContent="space-between" px={3} spacing={1}>
            <Grid item xs={12} sm={9}>
              <TextField InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                      <EmailOutlined />
                    </InputAdornment>
                ),
              }} sx={{ bgcolor: "white"}} size="small" fullWidth placeholder="Enter your email"/>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Button fullWidth className="flex-1" variant="contained" sx={{ textTransform: "capitalize"}}>Subscribe</Button>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </Box>
  );
}
