import { useState, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { InputLabel, MenuItem, Select, FormControl } from '@mui/material';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { userSignIn } from '../config/Firebase/firebasemethods';

// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

const theme = createTheme();

export default function Signup() {
  const [select, setSelect] = useState("")
  function handleSelect(value) {
    setSelect(value)
    // console.log(value)
  }
  const [signUpModel, setSignUpModel] = useState({});
  const [userName, setUserName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [contact, setContact] = useState("")

  function handleSubmit(event) {
    event.preventDefault();
    setSignUpModel(
      {...signUpModel, 
        Username: userName, 
        Email: email, 
        Password: password, 
        ConfirmPassword:confirmPassword, 
        Contact: contact, 
        UserType: select
      }
    )
    userSignIn(signUpModel)
    .then((res)=>{
      console.log(res)
    })
    .catch((err)=>{
      console.log(err)
    })

};

    useEffect(()=>{
      console.log(signUpModel)
    },[signUpModel])

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 0, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              onChange={(e)=>setUserName(e.target.value)}
              label="User Name"
              name="userName"
              />
            <TextField
              margin="normal"
              required
              fullWidth
              onChange={(e)=>setEmail(e.target.value)}
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              onChange={(e)=>setPassword(e.target.value)}
              autoComplete="current-password"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              onChange={(e)=>setConfirmPassword(e.target.value)}
              autoComplete="current-password"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="contact"
              label="Contact"
              type="number"
              onChange={(e)=>setContact(e.target.value)}
            />
            <FormControl 
                required
                fullWidth
                margin='normal'
            >
                <InputLabel id="Select">Select</InputLabel>
                <Select 
                id='selectUser'
                onChange={(e)=> handleSelect(e.target.value)}
                value={select}
                label="Select"
                labelId='Select'
                >
                    <MenuItem value="Transporter">Transporter</MenuItem>
                    <MenuItem value="User">User</MenuItem>
                </Select>
            </FormControl>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 1, mb: 1 }}
            >
              Sign up
            </Button>
            {/* <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid> */}
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
      </Container>
    </ThemeProvider>
  );
}