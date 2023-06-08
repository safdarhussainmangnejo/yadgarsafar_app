import * as Yup from 'yup';
import { v4 as uuid } from "uuid";
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';
import { Form, FormikProvider, useFormik } from 'formik';
import Axios from 'axios';
// material
import { LoadingButton } from '@mui/lab';
import { Box, Card, Grid, Stack, TextField} from '@mui/material';
import { styled } from '@mui/material/styles';
import useIsMountedRef from '../../../hooks/useIsMountedRef';
import { PATH_DASHBOARD } from '../../../routes/paths';


const RootStyle = styled('div')(({ theme }) => ({
  width: 250,
  height: 250,
  margin: 'auto',
  borderRadius: '10%',
  padding: theme.spacing(1),
  border: `1px dashed ${theme.palette.grey[500_32]}`
}));

UserNewForm.propTypes = {
  isEdit: PropTypes.bool,
  currentUser: PropTypes.object
};

export default function ViewTourists() {
    const [tourists,setTourists ] = useState([]);
    const TouristData = async () => {
        fetch("http://localhost:8080/getData")               
          .then(response => response.json()).then(data => {
            setTourists(data)
          })
      }
  
  useEffect(() => {
    TouristData();
}, [])

//   const navigate = useNavigate();
//   const { enqueueSnackbar } = useSnackbar();

  const formik = useFormik({
    initialValues: {
 
      packageName: tourists?.firstname || '',
      tourType: tourists?.lastname || '',
      packageProvince: tourists?.email || '',
      packageCity: tourists?.city || '',
      image: tourists?.image || '',
    },
   
    onSubmit: async (values, { setSubmitting }) => { 
    }
  });

  const { errors, values, touched, handleSubmit, isSubmitting, setFieldValue, getFieldProps, handleChange } = formik;
    const handleImage = (e)=>{
      const reader  = new FileReader();
      reader.onload = function()
      {
        formik.setFieldValue('image', reader.result)
      }
      reader.readAsDataURL(e.target.files[0])
    }

    const handleNewField = () => {
      formik.setFieldValue("tripPlan", [
        ...formik.values.tripPlan,
        { tripid: uuid(), details: "" }
      ]);
      setCounter(counter+1);
      // countDay;
    };
  
    const handleRemoveField = id => {
      formik.setFieldValue(
        "tripPlan",
        formik.values.tripPlan.filter(contact => contact.tripid !== id)
      );
    };
  
  return (
    
    
     <FormikProvider value={formik}>
      
      <Form  onSubmit={handleSubmit} encType="multipart/form-data">
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Card sx={{ py: 10, px: 3 }}>

              <Box sx={{ mb: 5 }}>
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={handleImage}
                /> 
              </Box>
              
              <Box sx={{ mb: 5 }}>
                <>
                  <RootStyle sx={{mt: 2,
                            mx: 'auto',
                            display: 'block',
                            textAlign: 'center',
                            color: 'text.secondary'}}
                  >
                  {values.image && (
                    <Box
                      component="img"
                      alt="avatar"
                      src={values.image}
                      sx={{ zIndex: 8, objectFit: 'cover', width: 200,height: 200, borderRadius: "10%"}}
                    />
                  )}
                </RootStyle>
                </>
              </Box>
            </Card>
          </Grid>

           <Grid item xs={12} md={8}>
             <Card sx={{ p: 3 }}>
               <Stack spacing={3}>
                 <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 3, sm: 2 }}>
                   <TextField
                    fullWidth
                    label="First Name"
                    name='name'
                    value={getFieldProps('packageName')}
                    
                    {...getFieldProps('packageName')}
                    helperText={touched.packageName && errors.packageName}
                  />
                  <TextField
                    select
                    fullWidth
                    label="Last Name"
                    placeholder="Tour Type"
                    {...getFieldProps('tourType')}
                    SelectProps={{ native: true }}
                    error={Boolean(touched.tourType && errors.tourType)}
                    helperText={touched.tourType && errors.tourType}
                  >
                  </TextField>
                </Stack>

                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 3, sm: 2 }}>
                <TextField
                    select
                    fullWidth
                    label="Email"
                    value={getFieldProps('packageProvince')}
                    {...getFieldProps('packageProvince')}
                    SelectProps={{ native: true }}
                    error={Boolean(touched.packageProvince && errors.packageProvince)}
                    helperText={touched.packageProvince && errors.packageProvince}
                  >
                  </TextField>

                  <TextField
                    fullWidth
                    label="City"
                    name='packageCity'
                    value={getFieldProps('packageCity')}
                    {...getFieldProps('packageCity')}
                    error={Boolean(touched.packageCity && errors.packageCity)}
                    helperText={touched.packageCity && errors.packageCity}
                  />
                </Stack>

                {/* <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 3, sm: 2 }}>
                  <TextField
                    fullWidth
                    label="Duration in format like 3 days and 1 night"
                    type='text'
                    name='packageDuration'
                    value={getFieldProps('packageDuration')}
                    {...getFieldProps('packageDuration')}
                    error={Boolean(touched.packageDuration && errors.packageDuration)}
                    helperText={touched.packageDuration && errors.packageDuration}
                  />
                  <TextField
                    fullWidth
                    label="Price"
                    type='Number'
                    value={getFieldProps('price')}
                    {...getFieldProps('price')}
                    error={Boolean(touched.price && errors.price)}
                    helperText={touched.price && errors.price}
                  />
                </Stack>
                  
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ md: 2, xs: 3, sm: 2 }} >
                
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DatePicker
                      fullWidth
                      className='form-control'
                      label="Trip Starting Date"
                      defaultValue={dateNow}
                      value={getFieldProps('packageStartFrom')}
                      {...getFieldProps('packageStartFrom')}
                      onChange={value => setFieldValue("packageStartFrom", value, true)}
                      renderInput={(params) => <TextField {...params} sx={{width: '100%'}} />}
                      />
                    </LocalizationProvider>
                    
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DatePicker
                      fullWidth
                      className='form-control'
                      label="Trip Ending Date"
                      defaultValue={dateNow}
                      value={getFieldProps('packageEndAt')}
                      {...getFieldProps('packageEndAt')}
                      onChange={value => setFieldValue("packageEndAt", value, true)}
                      renderInput={(params) => <TextField {...params} sx={{width: '100%'}}/>}
                      />
                    </LocalizationProvider>
                    
                </Stack>

                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 3, sm: 2 }}>
                  
                  <TextField
                    select
                    fullWidth
                    label="Included Service 1"
                    value={getFieldProps('included1')}
                    {...getFieldProps('included1')}
                    SelectProps={{ native: true }}
                    error={Boolean(touched.included1 && errors.included1)}
                    helperText={touched.included1 && errors.included1}
                  >
                    <option name="Choose an option" disabled /> 
                      <option key="Accommodation" value="Accommodation">Accommodation</option>
                      <option key="Photography" value="Photography">Photography</option>
                      <option key="First Aid Box" value="First Aid Box">First Aid Box</option>
                      <option key="Food" value="Food">Food</option>
                      <option key="Transport" value="Transport">Transport</option>
                      <option key="Tour Guide" value="Tour Guide">Tour Guide</option>
                  </TextField>
                  <TextField
                    select
                    fullWidth
                    label="Included Service 2"
                    value={getFieldProps('included2')}
                    {...getFieldProps('included2')}
                    SelectProps={{ native: true }}
                    error={Boolean(touched.included2 && errors.included2)}
                    helperText={touched.included2 && errors.included2}
                  >
                    <option name="Choose an option" disabled/> 
                      <option key="Accommodation" value="Accommodation">Accommodation</option>
                      <option key="Photography" value="Photography">Photography</option>
                      <option key="First Aid Box" value="First Aid Box">First Aid Box</option>
                      <option key="Food" value="Food">Food</option>
                      <option key="Transport" value="Transport">Transport</option>
                      <option key="Tour Guide" value="Tour Guide">Tour Guide</option>
                  </TextField>
                  
                </Stack>

                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 3, sm: 2 }}>
                <TextField
                    select
                    fullWidth
                    label="Not Include Services 1"
                    value={getFieldProps('notIncluded1')}
                    {...getFieldProps('notIncluded1')}
                    SelectProps={{ native: true }}
                    error={Boolean(touched.notnotIncluded1 && errors.notIncluded1)}
                    helperText={touched.notIncluded1 && errors.notIncluded1}
                  >
                    <option name="Choose an option" disabled /> 
                      <option key="Accommodation" value="Accommodation">Accommodation</option>
                      <option key="Photography" value="Photography">Photography</option>
                      <option key="First Aid Box" value="First Aid Box">First Aid Box</option>
                      <option key="Food" value="Food">Food</option>
                      <option key="Transport" value="Transport">Transport</option>
                      <option key="Tour Guide" value="Tour Guide">Tour Guide</option>
                  </TextField>
                  <TextField
                    select
                    fullWidth
                    label="Not Include Services 2"
                    {...getFieldProps('notIncluded2')}
                    SelectProps={{ native: true }}
                    error={Boolean(touched.notnotIncluded2 && errors.notIncluded2)}
                    helperText={touched.notIncluded2 && errors.notIncluded2}
                  >
                    <option name="Choose an option" disabled /> 
                      <option key="Accommodation" value="Accommodation">Accommodation</option>
                      <option key="Photography" value="Photography">Photography</option>
                      <option key="First Aid Box" value="First Aid Box">First Aid Box</option>
                      <option key="Food" value="Food">Food</option>
                      <option key="Transport" value="Transport">Transport</option>
                      <option key="Tour Guide" value="Tour Guide">Tour Guide</option>
                  </TextField>
                </Stack>

                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 3, sm: 2 }}>
                 
                  <TextField
                    select
                    fullWidth
                    label="Trip Category"
                    {...getFieldProps('tourCategory')}
                    SelectProps={{ native: true }}
                    error={Boolean(touched.nottourCategory && errors.tourCategory)}
                    helperText={touched.tourCategory && errors.tourCategory}
                  >
                    <option name="Choose an option" disabled/> 
                      <option key="Summer Tour" value="Summer Tour">Summer Tour</option>
                      <option key="Winter Tour" value="Winter Tour">Winter Tour</option>
                      <option key="Cultural Tour" value="Cultural Tour">Cultural Tour</option>
                      <option key="Adventurous Tour" value="Adventurous Tour">Adventurous Tour</option>
                      <option key="Honeymoon Tour" value="Honeymoon Tour">Honeymoon Tour</option>
                      <option key="Trekking Tour" value="Trekking Tour">Trekking Tour</option>
                  </TextField>

                  <TextField
                    select
                    fullWidth
                    label="Age Range for Trip"
                    {...getFieldProps('ageRange')}
                    SelectProps={{ native: true }}
                    error={Boolean(touched.ageRange && errors.ageRange)}
                    helperText={touched.ageRange && errors.ageRange}
                  >
                    <option name="Choose an option" disabled /> 
                      <option key="Under 18" value="Under 18">Under 18</option>
                      <option key="18-50" value="18-50">18-50</option>
                      <option key="18-30" value="18-30">18-30</option>
                      <option key="31-40" value="31-40">31-40</option>
                      <option key="41-50" value="41-50">41-50</option>
                      <option key="51-70" value="51-70">51-70</option>
                  </TextField> 
                </Stack>*/}

                

                
                
                 <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end' }}>
                  {console.log("isSubmitting in Userform in LoadingBUttton: ", isSubmitting)}
                   <LoadingButton type="submit" variant="contained" loading={isLoading} disabled={isLoading}>
                     {!isEdit ? 'Create Package' : 'Save Changes'}
                   </LoadingButton>
                 </Box>
               </Stack>
            </Card>
          </Grid>
        </Grid>
      </Form>
    </FormikProvider>

  );
}
