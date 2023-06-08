import PropTypes from 'prop-types';
// material
import { Grid, Stack } from '@mui/material';
//
import ProfileAbout from './ProfileAbout';
import ProfilePostCard from './ProfilePostCard';
import ProfilePostInput from './ProfilePostInput';
import ProfileFollowInfo from './ProfileFollowInfo';
import ProfileSocialInfo from './ProfileSocialInfo';
import ProfileLocation from './ProfileLocation';
import AdminLocation from './AdminLocation';

import useAuth from '../../../../hooks/useAuth';
// ----------------------------------------------------------------------

Profile.propTypes = {
  myProfile: PropTypes.object,
  posts: PropTypes.array
};

export default function Profile({ myProfile, posts }) {
  const {user} = useAuth();
  const userData = user.data;
  localStorage.setItem("useAuthUser", JSON.stringify(user.data));
  console.log("useAuthUser:-=--===", user)
  const agencyLocalStorage = JSON.parse(localStorage.getItem("agency"));
  const isPackageTrue = true;
  const isPackageFalse = false;
  return (
    <Grid container spacing={3} sx={{alignItems:"center"}}>
      {/* <Grid item xs={12} md={12} sm={4}>
        <Stack spacing={3} >
          <ProfileFollowInfo profile={myProfile} />
          
        </Stack>
      </Grid> */}

    {userData.role === 'agency' ? 
    
    (<>
    <Grid item xs={12} md={6}>
      <Stack spacing={3} >
        <ProfileAbout profile={agencyLocalStorage} role={userData.role} />
        <ProfileSocialInfo profile={myProfile} />
      </Stack>
    </Grid>

    <Grid item xs={12} md={6}>
      <Stack spacing={3}>
      <ProfileLocation profile={agencyLocalStorage} packages={isPackageFalse} />
      <ProfileLocation profile={agencyLocalStorage} packages={isPackageTrue} />
      </Stack>
    </Grid></>)
    :
    (<><Grid item xs={12} md={6}>
      <Stack spacing={3} >
        <ProfileAbout profile={userData} />
        <ProfileSocialInfo profile={myProfile} />
      </Stack>
    </Grid>

    <Grid item xs={12} md={6}>
      <Stack spacing={3}>
      <AdminLocation profile={userData} packages={isPackageFalse} />
      <AdminLocation profile={userData} packages={isPackageTrue} />
      </Stack>
    </Grid></>)}

      {/* <Grid item xs={12} md={8}>
        <Stack spacing={3}>
          <ProfilePostInput />
          {posts.map((post) => (
            <ProfilePostCard key={post.id} post={post} />
          ))}
        </Stack>
      </Grid> */}
    </Grid>
  );
}
