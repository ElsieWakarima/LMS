import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactDOM from "react-dom";

// @mui
import { Link, Stack, IconButton, InputAdornment, TextField, Checkbox, Alert } from '@mui/material';
import axios from 'axios';
import { LoadingButton } from '@mui/lab';
// components
import Iconify from '../../../components/iconify';

// ----------------------------------------------------------------------

export default function LoginForm() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [username1, setusername] = useState('false');
  const [password2, setpassword] = useState('false');

  // const handleClick = () => {
  //   navigate('/dashboard', { replace: true });
  // };

  const handleLogin = () => {
  
        const jarray = [];
        jarray.push({ username: username1, password: password2, mkey: 1090 });
        let mydata =0
         mydata = JSON.stringify(jarray);
        // alert('ok')

        const url = "http://localhost/LMS_backend/login.php";

        const b = false;

        axios
          .post(url, mydata, { headers: { "Content-Type": "application/json" } })
          .then( (response) => {
            // alert('error')
    // check response
    console.log()
            if (response.data[0].status === 1) {
              // alert('okay')
              navigate('/dashboard', { replace: true });
            } else {

              ReactDOM.render(
                <React.StrictMode>
                  <Alert severity="error">
                    Invalid Username or Password !
                  </Alert>
                </React.StrictMode>,
                document.getElementById("error")
              );
            }
          })
          .catch((error) => {
            if (error.response) {
              alert(error.response.data);
              alert(error.response.status);
              alert(error.response.headers);
            }})
  }

  return (
    <>
      <Stack spacing={3}>
      <div id='error'> </div>
        <TextField name="username" label="User Name" onChange={(e) => { setusername(e.target.value) }} />

        <TextField
          name="password"
          label="Password"
          onChange={(e) => { setpassword(e.target.value) }}
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      {/* <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
        <Checkbox name="remember" label="Remember me" />
        <Link variant="subtitle2" underline="hover">
          Forgot password?
        </Link>
      </Stack> */}

      <LoadingButton fullWidth size="large" type="submit" variant="contained" onClick={handleLogin}>
        Login
      </LoadingButton>
    </>
  );
}


