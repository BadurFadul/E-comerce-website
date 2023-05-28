import React, { useState, useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Box, TextField, Container, Button, Typography, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';

import registrationSchema from '../validations/registrationSchema';
import { registrationFormData } from '../validations/registrationSchema';

const Register = () => {
  const { handleSubmit, control, formState: { errors } } = useForm<registrationFormData>({
    resolver: yupResolver(registrationSchema)
  });

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = async (data: registrationFormData) => {
    console.log(data);
    handleClose();
  };

  useEffect(() => {
    handleOpen(); // Open the registration modal when the component is mounted
  }, []);

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="xs">
      <DialogTitle>Register</DialogTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogContent>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
            <Controller
              control={control}
              name="name"
              render={({ field: { onChange } }) => (
                <TextField
                  placeholder="Name"
                  label="Name"
                  onChange={onChange}
                />
              )}
            />
            {errors.name && (
              <Typography sx={{ color: 'red' }}>
                {errors.name.message}
              </Typography>
            )}
            <Controller
              control={control}
              name="email"
              render={({ field: { onChange } }) => (
                <TextField
                  placeholder="Badur@mail.com"
                  label="Email"
                  type="email"
                  onChange={onChange}
                />
              )}
            />
            {errors.email && (
              <Typography sx={{ color: 'red' }}>
                {errors.email.message}
              </Typography>
            )}
            <Controller
              control={control}
              name="password"
              render={({ field: { onChange } }) => (
                <TextField
                  label="Password"
                  type="password"
                  onChange={onChange}
                />
              )}
            />
            {errors.password && (
              <Typography sx={{ color: 'red' }}>
                {errors.password.message}
              </Typography>
            )}
            <Controller
              control={control}
              name="confirm"
              render={({ field: { onChange } }) => (
                <TextField
                  label="Confirm"
                  type="password"
                  onChange={onChange}
                />
              )}
            />
            {errors.confirm && (
              <Typography sx={{ color: 'red' }}>
                {errors.confirm.message}
              </Typography>
            )}
            <Controller
              control={control}
              name="avatar"
              render={({ field: { onChange } }) => (
                <TextField
                  placeholder="Avatar"
                  label="Avatar"
                  onChange={onChange}
                />
              )}
            />
            {errors.avatar && (
              <Typography sx={{ color: 'red' }}>
                {errors.avatar.message}
              </Typography>
            )}
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" variant="contained">
            Register
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default Register;