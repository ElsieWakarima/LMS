import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// @mui
import { Link, Stack, IconButton, InputAdornment, TextField, Checkbox, Box, Typography, Button } from '@mui/material';
import axios from 'axios';
import { LoadingButton } from '@mui/lab';
// components
import Iconify from '../../iconify';

// ----------------------------------------------------------------------

export default function StudentRegForm() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [StudentName, setStudentName] = useState('');
  const [StudentId, setStudentId] = useState('');
  const [Password, setPassword] = useState('');

  // const handleClick = () => {
  //   navigate('/dashboard', { replace: true });
  // };

  const handleLogin = () => {
    navigate('/admindashboard/feeupdate', { replace: true });
        const jarray = [];
        jarray.push({ studentid:StudentId,studentname: StudentName, password: Password, mkey: 1090 });
        let mydata =0
         mydata = JSON.stringify(jarray);
        // alert('ok')

        console.log(mydata)
        const url = "http://localhost/LMS_backend/studentreg.php";

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

              alert('Incorrect password')
            }
          })
          .catch((error) => {
            if (error.response) {
              alert(error.response.data);
              alert(error.response.status);
              alert(error.response.headers);
            }})
          alert('okay')
  }

  return (
    <Box className=' p-32 items-center justify-center sm:w-full md:w-[70vw] h-full'>
    <Box>
      <Stack spacing={3}>
      <Typography className=' text-center text-lg text-blue-500 font-bold'>
        Student registration
      </Typography>
      <TextField name="studentId" label="Student Id" onChange={(e) => { setStudentId(e.target.value) }} />

        <TextField name="studentname" label="Student Name" onChange={(e) => { setStudentName(e.target.value) }} />

        <TextField
          name="password"
          label="Password"
          onChange={(e) => { setPassword(e.target.value) }}
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


      <LoadingButton className=' mt-7' fullWidth size="large" color="primary" variant="outlined" type="submit"  onClick={handleLogin}>
        Next
      </LoadingButton>
  
      </Box>
    </Box>
  );
}


