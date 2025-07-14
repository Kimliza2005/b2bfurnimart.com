'use client';
import React from 'react';
import * as Yup from 'yup';
import { FormControl, InputAdornment, TextField, Stack } from '@mui/material';
import { useMutation } from 'react-query';
import { Form, FormikProvider, useFormik } from 'formik';
import { toast } from 'react-hot-toast';
import { LoadingButton } from '@mui/lab';
import { BsFillSendFill } from 'react-icons/bs';
// import Image from 'next/image';
import * as api from 'src/services'; // keep your API import as is

export default function NewsLetter() {
  const [loading, setloading] = React.useState(false);

  const ChangePassWordSchema = Yup.object().shape({
    email: Yup.string().email('Please enter valid email').required('Email is required')
  });

  const formik = useFormik({
    initialValues: { email: '' },
    validationSchema: ChangePassWordSchema,
    onSubmit: (values) => {
      setloading(true);
      mutate(values);
    }
  });

  const { mutate } = useMutation(api.sendNewsletter, {
    onSuccess: (data) => {
      toast.success(data.message);
      setloading(false);
      formik.resetForm();
    },
    onError: (err) => {
      setloading(false);
      toast.error(err.response?.data?.message || 'Something went wrong');
    }
  });

  const { errors, touched, handleSubmit, getFieldProps } = formik;
  return (
    <FormikProvider value={formik}>
      <Form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <Stack sx={{ maxWidth: 500, margin: 'auto', mt: 4, mb: 2 }}>
          <FormControl fullWidth variant="outlined">
            <TextField
              size="medium"
              placeholder="Enter your Email"
              {...getFieldProps('email')}
              error={Boolean(touched.email && errors.email)}
              helperText={touched.email && errors.email}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <LoadingButton
                      name="newsletter-button"
                      variant="contained"
                      color="primary"
                      size="large"
                      type="submit"
                      loading={loading}
                      sx={{
                        p: 0,
                        height: 32,
                        borderRadius: 50,
                        minWidth: 32,
                        border: 'unset !important'
                      }}
                    >
                      <BsFillSendFill fontSize={16} />
                    </LoadingButton>
                  </InputAdornment>
                )
              }}
            />
          </FormControl>
        </Stack>
      </Form>
    </FormikProvider>
  );
}
