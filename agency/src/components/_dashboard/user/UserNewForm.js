import * as Yup from 'yup';
import { v4 as uuid } from "uuid";
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useSnackbar } from 'notistack';
import { useNavigate, useParams } from 'react-router-dom';
import { Form, FormikProvider, useFormik } from 'formik';
import Axios from 'axios';
// material
import { LoadingButton } from '@mui/lab';
import { Box, Card, Grid, Stack, TextField} from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
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

export default function UserNewForm({ isEdit, currentUser, packageId, currentPackage }) {
  console.log("isEdit: ", isEdit);
  const isMountedRef = useIsMountedRef();
  console.log("packageId in UserNewForm: ", packageId);
  console.log("CurrentPackage in UserNewForm: ", currentPackage);
  const [url, setUrl] = useState('');
  const [counter, setCounter] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const dateNow = new Date();
  console.log("DateNow: ", dateNow)
  // let countDay=1;
  const uploadImage = async () => {
    
    const data = new FormData();
    console.log("Before sending image to Cloudinary: ", values.image)
    data.append('file', values.image);
    data.append('upload_preset', 'agency');
    data.append('cloud_name', 'yadgarsafar');
    const response = await fetch('https://api.cloudinary.com/v1_1/yadgarsafar/image/upload', {
      method: 'post',
      body: data
    });
    const convertedData = await response.json();
    console.log("Converted Data: ", convertedData);
    console.log("image URL: ", convertedData.url);
    setUrl(data.url);
    // console.log("image URL after setting state: ",url);
    return convertedData
  };

  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const NewUserSchema = Yup.object().shape({
    
    packageName: Yup.string().required('Trip Name is required'),
    packageCity: Yup.string().required('City is required'),
    packageDescription: Yup.string().required('Description is required'),
    packageDuration: Yup.string().required('Duration is required'),
    packageStartFrom:  Yup.date().nullable(),
    packageEndAt: Yup.date().nullable(),
    included1: Yup.string().required('Service 1 is required'),
    included2: Yup.string().required('Service 2 is required'),
    notIncluded1: Yup.string().required('Not Service 1 is required'),
    notIncluded2: Yup.string().required('Not Service 2 is required'),
    price: Yup.string().required('Price is required'),
    ageRange: Yup.string().required('Age is required'),
    tourCategory: Yup.string().required('Category is required'),
    tripPlan: Yup.array().nullable(),
    question1: Yup.string().required('question1 is required'),
    question2: Yup.string().required('question2 is required'),
    question3: Yup.string().required('question3 is required'),
    answer1: Yup.string().required('answer1 is required'),
    answer2: Yup.string().required('answer2 is required'),
    answer3: Yup.string().required('answer3 is required'),
    packageProvince: Yup.string().required('Province is required'),
    tourType: Yup.string().required('Tour Type is required'),
    image: Yup.mixed().required('image is required'),
    
  });

  const formik = useFormik({
    initialValues: {
 
      packageName: currentPackage?.packageName || '',
      packageCity: currentPackage?.packageCity || '',
      packageDescription: currentPackage?.packageDescription || '',
      packageDuration: currentPackage?.packageDuration || '',
      packageStartFrom: new Date(currentPackage?.packageStartFrom) || new Date(),
      packageEndAt: new Date(currentPackage?.packageEndAt) || new Date(),
      included1:  currentPackage?.included1 || '',
      included2:  currentPackage?.included2 || '',
      notIncluded1: currentPackage?.notIncluded1 || '',
      notIncluded2: currentPackage?.notIncluded2 || '',
      price: currentPackage?.price || '',
      ageRange: currentPackage?.ageRange || '',
      tourCategory: currentPackage?.tourCategory || '',
      question1: currentPackage?.question1 || '',
      question2: currentPackage?.question2 || '',
      question3: currentPackage?.question3 || '',
      answer1: currentPackage?.answer1 || '',
      answer3: currentPackage?.answer3 || '',
      answer2: currentPackage?.answer2 || '',
      packageProvince: currentPackage?.packageProvince || '',
      tourType: currentPackage?.tourType || '',
      image: currentPackage?.image || null,
      tripPlan: [
        {
          tripid: uuid(),
          details: "",
        }
      ],
    },
   
    onSubmit: async (values, { setSubmitting, resetForm, setErrors }) => {
      
     
      const plans = JSON.stringify(values.tripPlan);
      console.log("isSubmitting in Userform on start of submit: ", isSubmitting);
     
      try {
        console.log('Inseting Data: ', values);
        
        setIsLoading(true);
        uploadImage().then(async(url) => {
          console.log('Receiving Image URL after Promise Done : ', url,  +" , " +url.url);
        
          const formdata = new FormData();
          formdata.append("packageProvince",values.packageProvince);
          formdata.append("packageName",values.packageName);
          formdata.append("packageCity",values.packageCity);
          formdata.append("packageDescription",values.packageDescription);
          formdata.append("packageDuration",values.packageDuration);
          formdata.append("packageStartFrom",values.packageStartFrom);
          formdata.append("packageEndAt",values.packageEndAt);
          formdata.append("included1",values.included1);
          formdata.append("included2", values.included2)
          formdata.append("notIncluded1",values.notIncluded1);
          formdata.append("notIncluded2",values.notIncluded2);
          formdata.append("price",values.price);
          formdata.append("tourCategory",values.tourCategory);
          formdata.append("ageRange",values.ageRange);
          formdata.append("tripPlan",plans);
          formdata.append("question1",values.question1);
          formdata.append("question2",values.question2);
          formdata.append("question3",values.question3);
          formdata.append("question4",values.question4);
          formdata.append("answer1",values.answer1);
          formdata.append("answer2",values.answer2);
          formdata.append("answer3",values.answer3);
          formdata.append("answer4",values.answer4);
          formdata.append("image",url.url);
          formdata.append("agencyId", currentUser?._id);
          formdata.append("packageId", packageId);
          formdata.append("tourType", values.tourType)
      
          if(!isEdit){
            await Axios.post("http://localhost:8080/insertPackage",  formdata)
            .then(res => {
              setIsLoading(false);
              console.log("Agency Data Insertrd : ", res.data)
              localStorage.setItem("agency", JSON.stringify(res.data));
            }).catch(err => console.log(err))
          }
          else{
            await Axios.post("http://localhost:8080/agency/updatePackage",  formdata)
            .then(resp =>  {
              console.log("Package Updated, response is : ", resp.data)
              localStorage.setItem("agency", JSON.stringify(resp.data));
              setIsLoading(false);
             
            })
            .catch(err => console.log(err))
          }

          setSubmitting(false);
          setIsLoading(false);
          enqueueSnackbar(!isEdit ? 'New Package Added Successfully' : 'Package Updated Successfully', { variant: 'success' });
          if (isMountedRef.current) {
            setIsLoading(false);
            setSubmitting(false);
          }
          console.log("isSubmitting in Userform on closing of submit: ", isSubmitting);
          navigate(PATH_DASHBOARD.user.list);
      });
      } catch (error) {
        setIsLoading(false);
        console.error(error);
        setSubmitting(false);
        setErrors(error);
      }
    }
  });

  const { errors, values, touched, handleSubmit, isSubmitting, setFieldValue, getFieldProps, handleChange } = formik;
  // const handleDrop = useCallback(
  //   (acceptedFiles) => {
  //     const file = acceptedFiles[0];
  //     if (file) {
  //       setFieldValue('image', {
  //         ...file,
  //         preview: URL.createObjectURL(file)
  //       });
  //     }
  //   },
  //   [setFieldValue]
  // );
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
                  // onChange={(e) => formik.setFieldValue('image', e.currentTarget.files[0])}
                  // onChange={(e) => formik.setFieldValue('image', URL.createObjectURL(e.target.files[0]))}
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
                      sx={{ zIndex: 8, objectFit: 'cover', width: 250,height: 250, borderRadius: "10%"}}
                    />
                  )}
                </RootStyle>
            
                </>
              </Box>

                {/* <UploadAvatar
                  name="image"
                  accept="image/*"
                  file={values.image}
                  maxSize={3145728}
                  onDrop={handleDrop}
                  // onChange={(e) => formik.setFieldValue('image', e.currentTarget.files[0])}
                  error={Boolean(touched.image && errors.image)}
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
                
                <FormHelperText error sx={{ px: 2, textAlign: 'center' }}>
                  {touched.image && errors.image}
                </FormHelperText> */}
              {/* </Box> */}

            </Card>
          </Grid>

           <Grid item xs={12} md={8}>
             <Card sx={{ p: 3 }}>
               <Stack spacing={3}>
                 <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 3, sm: 2 }}>
                   <TextField
                    fullWidth
                    label="Trip Package Name"
                    name='name'
                    value={getFieldProps('packageName')}
                    
                    {...getFieldProps('packageName')}
                    helperText={touched.packageName && errors.packageName}
                  />
                  <TextField
                    select
                    fullWidth
                    label="Tour Type"
                    placeholder="Tour Type"
                    {...getFieldProps('tourType')}
                    SelectProps={{ native: true }}
                    error={Boolean(touched.tourType && errors.tourType)}
                    helperText={touched.tourType && errors.tourType}
                  >
                    <option value="" /> 
                      <option key="Group Tour" value="Group Tour">Group Tour</option>
                      <option key="Private Tour" value="Private Tour">Private Tour</option>
                  </TextField>
                </Stack>

                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 3, sm: 2 }}>
                <TextField
                    select
                    fullWidth
                    label="Trip in Province/Region"
                    value={getFieldProps('packageProvince')}
                    {...getFieldProps('packageProvince')}
                    SelectProps={{ native: true }}
                    error={Boolean(touched.packageProvince && errors.packageProvince)}
                    helperText={touched.packageProvince && errors.packageProvince}
                  >
                    <option value="" /> 
                      <option key="Sindh" value="Sindh">Sindh</option>
                      <option key="Punjab" value="Punjab">Punjab</option>
                      <option key="Balochistan" value="Balochistan">Balochistan</option>
                      <option key="KPK" value="KPK">KPK</option>
                      <option key="Gilgil" value="Gilgil Baltistan">Gilgil Baltistan</option>
                      <option key="Islamabad" value="Islamabad">Islamabad</option>
                      <option key="Azad Kashmir" value="Azad Kashmir">Azad Kashmir</option>
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

                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 3, sm: 2 }}>
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
                </Stack>

                

                { !isEdit &&
                  <>
                  <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 3, sm: 2 }}>
                  <TextField
                    fullWidth
                    label="Write FAQs Question 1"
                    type='text'
                    value={getFieldProps('question1')}
                    {...getFieldProps('question1')}
                    error={Boolean(touched.question1 && errors.question1)}
                    helperText={touched.question1 && errors.question1}
                  />
                  <TextField
                    fullWidth
                    label="Answer of FAQs Question 1"
                    type='text'
                    value={getFieldProps('answer1')}
                    {...getFieldProps('answer1')}
                    error={Boolean(touched.answer1 && errors.answer1)}
                    helperText={touched.answer1 && errors.answer1}
                  />
                </Stack>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 3, sm: 2 }}>
                  <TextField
                    fullWidth
                    label="Write FAQs Question 2"
                    type='text'
                    value={getFieldProps('question2')}
                    {...getFieldProps('question2')}
                    error={Boolean(touched.question2 && errors.question2)}
                    helperText={touched.question2 && errors.question2}
                  />
                  <TextField
                    fullWidth
                    label="Answer of FAQs Question 2"
                    type='text'
                    value={getFieldProps('answer2')}
                    {...getFieldProps('answer2')}
                    error={Boolean(touched.answer2 && errors.answer2)}
                    helperText={touched.answer2 && errors.answer2}
                  />
                </Stack>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 3, sm: 2 }}>
                  <TextField
                    fullWidth
                    label="Write FAQs Question 3"
                    type='text'
                    value={getFieldProps('question3')}
                    {...getFieldProps('question3')}
                    error={Boolean(touched.question3 && errors.question3)}
                    helperText={touched.question3 && errors.question3}
                  />
                  <TextField
                    fullWidth
                    label="Answer of FAQs Question 3"
                    type='text'
                    value={getFieldProps('answer3')}
                    {...getFieldProps('answer3')}
                    error={Boolean(touched.answer3 && errors.answer3)}
                    helperText={touched.answer3 && errors.answer3}
                  />
                </Stack>
                </>
}                
                <TextField 
                    fullWidth
                    {...getFieldProps('packageDescription')} 
                     multiline 
                    minRows={4} maxRows={4} 
                    label="Description About Trip Package"
                  />

                { !isEdit && <>{formik.values.tripPlan.map((contact, index) => (
                  <div key={contact.tripid}>
                    
                        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ md: 3, xs: 3, sm: 2 }}>
                        <h3>{contact.id}</h3>
                        <TextField
                        fullWidth
                        multiline 
                        minRows={3} maxRows={3}
                        label="Deatils of Trip Day"
                        value={getFieldProps('answer4')}
                        {...formik.getFieldProps(`tripPlan[${index}].details`)}
                        
                      />
                        
                        <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end' }}>
                          <LoadingButton type="button" variant="text" color="error"  onClick={() => handleRemoveField(contact.tripid)}>
                            Delete
                          </LoadingButton>
                        </Box>
                    </Stack>
                    </div>
                  ))}   
                  <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center' }}>
                   <LoadingButton type="button" variant="contained" onClick={handleNewField}>
                      Add Field
                   </LoadingButton>
                 </Box> </>}
                
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
