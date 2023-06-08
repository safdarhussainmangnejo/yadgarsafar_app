// import PropTypes from 'prop-types';
// import { Link as RouterLink } from 'react-router-dom';
// // material
// import { styled } from '@mui/material/styles';
// import { Typography, Button, Card, CardContent, Box } from '@mui/material';
// import { SeoIllustration } from '../../../assets';

// // ----------------------------------------------------------------------

// const RootStyle = styled(Card)(({ theme }) => ({
//   boxShadow: 'none',
//   textAlign: 'center',
//   backgroundColor: theme.palette.primary.lighter,
//   [theme.breakpoints.up('md')]: {
//     height: '100%',
//     display: 'flex',
//     textAlign: 'left',
//     alignItems: 'center',
//     justifyContent: 'space-between'
//   }
// }));

// // ----------------------------------------------------------------------

// AppWelcome.propTypes = {
//   displayName: PropTypes.string
// };
// export default function AppWelcome({companyName="admin"}) {

//   const local = JSON.parse(localStorage.getItem('user'));
 
//   return (
//     <RootStyle>
//       <CardContent
//         sx={{
//           p: { md: 0 },
//           pl: { md: 5 },
//           color: 'grey.800'
//         }}
//       >
//         <Typography gutterBottom variant="h4">
//           Welcome back,
//         </Typography>
//         <Typography gutterBottom variant="h1">
//           {console.log("copmanyName from Welcome ........... :  ",local.companyname)}
//           {local.companyname}
//         </Typography>

//         {local.role === 'admin' ? 
//         <Typography variant="body2" sx={{ pb: { xs: 3, xl: 5 }, maxWidth: 480, mx: 'auto' }}>
//           Manage travel packages and services, and get the overview of the registered tourists and companies.
//         </Typography>:
//         <Typography variant="body2" sx={{ pb: { xs: 3, xl: 5 }, maxWidth: 480, mx: 'auto' }}>
//         Start adding your travel packages and services, and expand your business with Yadgar Safar.
//       </Typography>}

//         <Button variant="contained" to="#" component={RouterLink}>
//           Go Now
//         </Button>
//       </CardContent>

//       {/* <SeoIllustration
//         sx={{
//           p: 3,
//           width: 360,
//           margin: { xs: 'auto', md: 'inherit' }
//         }}
//       /> */}
//       <Box component="img" src="/static/images/welcome-user.png" sx={{
//           p: 3,
//           width: 300,
//           height: 300,
//           margin: { xs: 'auto', md: 'inherit' }
//         }}  />
//      {/* <img src="/static/images/welcome-user.png" height={180} alt="man"/> */}
//     </RootStyle>
//   );
// }


// New Code.................................................

import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
import { Typography, Button, Card, CardContent, Box } from '@mui/material';
import { SeoIllustration } from '../../../assets';

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  textAlign: 'center',
  backgroundColor: theme.palette.primary.lighter,
  [theme.breakpoints.up('md')]: {
    height: '100%',
    display: 'flex',
    textAlign: 'left',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
}));

// ----------------------------------------------------------------------

AppWelcome.propTypes = {
  displayName: PropTypes.string
};
export default function AppWelcome({companyName="admin"}) {

  const local = JSON.parse(localStorage.getItem('user'));
 
  return (
    <RootStyle>
      <CardContent
        sx={{
          p: { md: 0 },
          pl: { md: 5 },
          color: 'grey.800'
        }}
      >
        <Typography gutterBottom variant="h4">
          Welcome back,
        </Typography>
        <Typography gutterBottom variant="h3">
          {console.log("copmanyName from Welcome ........... :  ",local.companyname)}
          {local.companyname}
        </Typography>

        {local.role === 'admin' ? 
        <Typography variant="body2" sx={{ pb: { xs: 3, xl: 5 }, maxWidth: 480, mx: 'auto' }}>
          Manage travel packages and services, and get the overview of the registered tourists and companies.
        </Typography>:
        <Typography variant="body2" sx={{ pb: { xs: 3, xl: 5 }, maxWidth: 480, mx: 'auto' }}>
        Start adding your travel packages and services, and expand your business with Yadgar Safar.
      </Typography>}

        {/* <Button variant="contained" to="#" component={RouterLink}>
          Go Now
        </Button> */}
      </CardContent>

      {/* <SeoIllustration
        sx={{
          p: 3,
          width: 360,
          margin: { xs: 'auto', md: 'inherit' }
        }}
      /> */}
      <Box component="img" src="/static/images/welcome-user.png" sx={{
          p: 3,
          width: 300,
          height: 300,
          margin: { xs: 'auto', md: 'inherit' }
        }}  />
     {/* <img src="/static/images/welcome-user.png" height={180} alt="man"/> */}
    </RootStyle>
  );
}
