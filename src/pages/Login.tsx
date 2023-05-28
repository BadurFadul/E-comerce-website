import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Box, TextField, Button, Typography, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';

import loginSchema, { logindata } from '../validations/loginSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import Register from './Register';

const Login = () => {
  const { handleSubmit, control, formState: { errors } } = useForm<logindata>({
    resolver: yupResolver(loginSchema)
  });

  const [loginOpen, setLoginOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);

  const handleLoginOpen = () => {
    setLoginOpen(true);
  };

  const handleLoginClose = () => {
    setLoginOpen(false);
  };

  const handleRegisterOpen = () => {
    setRegisterOpen(true);
  };

  const handleRegisterClose = () => {
    setRegisterOpen(false);
  };

  const onSubmit = (data: logindata) => {
    console.log(data);
    handleLoginClose();
  };

  return (
    <>
      <Button onClick={handleLoginOpen}>Login</Button>
      <Dialog open={loginOpen} onClose={handleLoginClose}>
        <DialogTitle>Login</DialogTitle>
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogContent>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <Controller
                control={control}
                name="email"
                render={({ field: { onChange } }) => (
                  <TextField
                    placeholder="Badur@mail.com"
                    label="Enter your email"
                    type="email"
                    onChange={onChange}
                  />
                )}
              />
              {errors.email && (
                <Typography sx={{ color: 'red' }}>{errors.email.message}</Typography>
              )}
              <Controller
                control={control}
                name="password"
                render={({ field: { onChange } }) => (
                  <TextField
                    label="Enter your password"
                    type="password"
                    onChange={onChange}
                  />
                )}
              />
              {errors.password && (
                <Typography sx={{ color: 'red' }}>{errors.password.message}</Typography>
              )}
            </Box>
            <Box>
              <Typography>
                Don't have an account? <span onClick={handleRegisterOpen} style={{cursor: 'pointer', color: 'blue'}}>register</span> 
              </Typography>
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleLoginClose}>Cancel</Button>
            <Button type="submit" variant="contained">
              Log in
            </Button>
          </DialogActions>
        </form>
      </Dialog>

      <Dialog open={registerOpen} onClose={handleRegisterClose}>
        <Register />
      </Dialog>
    </>
  );
};

export default Login;