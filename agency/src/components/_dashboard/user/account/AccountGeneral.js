import * as Yup from 'yup';
import { useSnackbar } from 'notistack';
import { useCallback, useState, useEffect } from 'react';
import { Form, FormikProvider, useFormik } from 'formik';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
// material
import { Box, Grid, Card, Stack, Switch, TextField, FormControlLabel, Typography, FormHelperText } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { alpha, styled } from '@mui/material/styles';

// hooks
import useAuth from '../../../../hooks/useAuth';
import useIsMountedRef from '../../../../hooks/useIsMountedRef';
import { UploadAvatar } from '../../../upload';

// utils
import { fData } from '../../../../utils/formatNumber';
//
import { PATH_DASHBOARD } from '../../../../routes/paths';

const RootStyle = styled('div')(({ theme }) => ({
  width: 250,
  height: 250,
  margin: 'auto',
  borderRadius: '10%',
  padding: theme.spacing(1),
  border: `1px dashed ${theme.palette.grey[500_32]}`
}));
// ----------------------------------------------------------------------

export default function AccountGeneral() {
  const agencyLocalStorage = JSON.parse(localStorage.getItem("agency"));
  const userLocalStorage = JSON.parse(localStorage.getItem("user"));
  const isMountedRef = useIsMountedRef();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const { user} = useAuth();
  const userData = user.data;
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  const uploadImage = async () => {
    const data = new FormData();
    console.log("Before sending companyImage to Cloudinary: ", values.companyImage)
    data.append('file', values.companyImage);
    data.append('upload_preset', 'agency');
    data.append('cloud_name', 'yadgarsafar');
    const response = await fetch('https://api.cloudinary.com/v1_1/yadgarsafar/image/upload', {
      method: 'post',
      body: data
    });
    const convertedData = await response.json();
    console.log("Converted Data: ", convertedData);
    console.log("companyImage URL: ", convertedData.url);
    setUrl(data.url);
    console.log("companyImage URL after setting state: ",url);
    return convertedData
  };

  const UpdateUserSchema = Yup.object().shape({
    
      companyImage: Yup.string().required('Image is required'),
      companyNumber: Yup.string().required('Number is required'),
      companyProvince: Yup.string().required('Province is required'),
      companyOwner: Yup.string().required('Owner is required'),
      companyCity: Yup.string().required('CIty is required'),
      companyDescription: Yup.string().required('Description is required')
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      companyName: userLocalStorage?.companyname || '',
      email: userLocalStorage?.email || '',
      companyImage: agencyLocalStorage?.companyImage || '',
      companyNumber: agencyLocalStorage?.companyNumber || '',
      companyProvince: agencyLocalStorage?.companyProvince || '',
      companyOwner: agencyLocalStorage?.companyOwner || '',
      companyCity: agencyLocalStorage?.companyCity || '',
      companyDescription: agencyLocalStorage?.companyDescription || ''
    },

    validationSchema: UpdateUserSchema,
    onSubmit: async (values, { setErrors, setSubmitting }) => {
      
      try {
        console.log('Inseting Data: ', values);
        
        setIsLoading(true);
        uploadImage().then(async(url) => {
          console.log('Receiving Image URL after Promise Done : ', url,  +" , " +url.url);
        
          const formdata = new FormData();
          
          formdata.append("companyNumber",values.companyNumber);
          formdata.append("companyProvince",values.companyProvince);
          formdata.append("companyOwner",values.companyOwner);
          formdata.append("companyCity",values.companyCity);
          formdata.append("companyDescription",values.companyDescription);
          formdata.append("companyImage",url.url);
          formdata.append("agencyId", agencyLocalStorage?._id)
          console.log("Data before inserting into Update API: ", formdata)
          await Axios.post("http://localhost:8080/agency/updateAgencyInfo",  formdata)
            .then(resp =>{ console.log("Response after update: ",resp.data )
              localStorage.setItem("agency", JSON.stringify(resp.data))}
            )
            .catch(err => {
              setIsLoading(false);
              console.log(err)
            })
            setIsLoading(false);
            enqueueSnackbar('Update success', { variant: 'success' });
              if (isMountedRef.current) {
                setSubmitting(false);
                setIsLoading(false);
              }
            navigate(PATH_DASHBOARD.general.app);
      });
      } catch (error) {
        setIsLoading(false);
        console.error(error);
        if (isMountedRef.current) {
              setErrors({ afterSubmit: error.code });
              setIsLoading(false);
              setSubmitting(false);
            }
      }
      
    }
  });

  const { values, errors, touched, isSubmitting, handleSubmit, getFieldProps, setFieldValue } = formik;

  const handleImage = (e)=>{
    const reader  = new FileReader();
      reader.onload = function()
      {
        formik.setFieldValue('companyImage', reader.result)
      }
      reader.readAsDataURL(e.target.files[0])
    // formik.setFieldValue('companyImage', e.currentTarget.files[0])
    setIsUploading(true);
  }

  const handleDrop = useCallback(
    (acceptedFiles) => {
      
      const file = acceptedFiles[0];
      if (file) {
        setFieldValue('companyImage', {
          ...file,
          preview: URL.createObjectURL(file)
        });
      }
    },
    [setFieldValue]
  );

  return (
    userData.role === 'agency' ? <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit} encType="multipart/form-data">
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Card sx={{ py: 10, px: 3, textAlign: 'center' }}>
            <Box sx={{ mb: 5 }}>
                <input
                  type="file"
                  name="companyImage"
                  accept="image/*"
                  onChange={handleImage}
                /> 
              </Box>
              {isUploading ? 
                <Box sx={{ mb: 5 }}>
                <>
                  <RootStyle sx={{mt: 2,
                            mx: 'auto',
                            display: 'block',
                            textAlign: 'center',
                            color: 'text.secondary'}}
                  >
                  {values.companyImage && (
                    <Box
                      component="img"
                      alt="avatar"
                      src={values.companyImage}
                      sx={{ zIndex: 8, objectFit: 'cover', width: 250,height: 250, borderRadius: "10%"}}
                    />
                  )}
                </RootStyle>
            
                </>
              </Box>
              :
              <UploadAvatar
                accept="image/*"
                file={values.companyImage}
                maxSize={3145728}
                onDrop={handleDrop}
                error={Boolean(touched.companyImage && errors.companyImage)}
                caption={
                  <Typography
                    variant="caption"
                    sx={{
                      mt: 2,
                      mx: 'auto',
                      display: 'block',
                      textAlign: 'center',
                      color: 'text.secondary'
                    }}
                  >
                    Allowed *.jpeg, *.jpg, *.png, *.gif
                    <br /> max size of {fData(3145728)}
                  </Typography>
                }
              />
              }
              

              <FormHelperText error sx={{ px: 2, textAlign: 'center' }}>
                {touched.companyImage && errors.companyImage}
              </FormHelperText>
            </Card>
          </Grid>

          <Grid item xs={12} md={8}>
            <Card sx={{ p: 3 }}>
              <Stack spacing={{ xs: 2, md: 3 }}>
                <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
                  <TextField fullWidth disabled label="Company Name" {...getFieldProps('companyName')} />
                  <TextField fullWidth disabled label="Email Address" {...getFieldProps('email')} />
                </Stack>

                <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
                  <TextField fullWidth label="Phone Number" {...getFieldProps('companyNumber')} />
                  <TextField fullWidth label="Company Owner Name" {...getFieldProps('companyOwner')} />
                </Stack>

                <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
                  <TextField
                    select
                    fullWidth
                    label="Province/State"
                    placeholder="Province/State"
                    {...getFieldProps('companyProvince')}
                    SelectProps={{ native: true }}
                    error={Boolean(touched.companyProvince && errors.companyProvince)}
                    helperText={touched.companyProvince && errors.companyProvince}
                  >
                    <option value="" /> 
                      <option key="Sindh" value="Sindh">Sindh</option>
                      <option key="Punjab" value="Punjab">Punjab</option>
                      <option key="Balochistan" value="Balochistan">Balochistan</option>
                      <option key="KPK" value="KPK">KPK</option>
                      <option key="Gilgil" value="Gilgil Baltistan">Gilgil Baltistan</option>
                      <option key="Islamabad" value="Islamabad">Islamabad</option>
                      <option key="Azad Kashmir" value="Azad Kashmir">Azad Kashmir</option>
                    {/* {countries.map((option) => (
                      <option key={option.code} value={option.label}>
                        {option.label}
                      </option>
                    ))} */}
                  </TextField>
                  <TextField fullWidth label="City" {...getFieldProps('companyCity')} />
                </Stack>

                <TextField {...getFieldProps('companyDescription')} fullWidth multiline minRows={4} maxRows={4} label="Company About Description" />
              </Stack>

              <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end' }}>
                <LoadingButton type="submit" variant="contained" loading={isLoading} disabled={isLoading}>
                  Save Changes
                </LoadingButton>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Form>
    </FormikProvider> :

<FormikProvider value={formik}>
<Form autoComplete="off" noValidate onSubmit={handleSubmit} encType="multipart/form-data">
  <Grid container spacing={3}>
    <Grid item xs={12} md={4}>
      <Card sx={{ py: 10, px: 3, textAlign: 'center' }}>
      
        <UploadAvatar
          accept="image/*"
          file="/static/images/adminlogo.png"
          disabled
          maxSize={3145728}
          onDrop={handleDrop}
          error={Boolean(touched.companyImage && errors.companyImage)}
          // caption={
          //   <Typography
          //     variant="caption"
          //     sx={{
          //       mt: 2,
          //       mx: 'auto',
          //       display: 'block',
          //       textAlign: 'center',
          //       color: 'text.secondary'
          //     }}
          //   >
          //     Allowed *.jpeg, *.jpg, *.png, *.gif
          //     <br /> max size of {fData(3145728)}
          //   </Typography>
          // }
        />

        <FormHelperText error sx={{ px: 2, textAlign: 'center' }}>
          {touched.companyImage && errors.companyImage}
        </FormHelperText>
      </Card>
    </Grid>

    <Grid item xs={12} md={8}>
      <Card sx={{ p: 3 }}>
        <Stack spacing={{ xs: 2, md: 3 }}>
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
            <TextField fullWidth disabled label="Company Name" value={userData.companyname} />
            <TextField fullWidth disabled label="Email Address" value={userData.email}  />
          </Stack>

          <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
            <TextField fullWidth disabled label="Phone Number" value="03053603181" />
            <TextField fullWidth disabled label="Company Owner Name" value="Safdar Hussain" />
          </Stack>

          <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
          <TextField fullWidth disabled label="Province" value="Sindh" />
            <TextField fullWidth disabled label="City" value="Sukkur" />
          </Stack>
        </Stack>
      </Card>
    </Grid>
  </Grid>
</Form>
</FormikProvider>
  );
}
