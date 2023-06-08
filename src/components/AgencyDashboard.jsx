import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import TourRoundedIcon from '@mui/icons-material/TourRounded';
import a from '../images/logo2.png';
import '../index.css';
import PendingOrders from './PendingOrders'
import ListItemButton from '@mui/material/ListItemButton';
import AppBar from '@mui/material/AppBar';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import HowToRegIcon from '@mui/icons-material/HowToReg';

// const drawerWidth = 240;

// const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
//   ({ theme, open }) => ({
//     flexGrow: 1,
//     padding: theme.spacing(3),
//     transition: theme.transitions.create('margin', {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//     marginLeft: `-${drawerWidth}px`,
//     ...(open && {
//       transition: theme.transitions.create('margin', {
//         easing: theme.transitions.easing.easeOut,
//         duration: theme.transitions.duration.enteringScreen,
//       }),
//       marginLeft: 0,
//     }),
//   }),
// );

// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== 'open',
// })(({ theme, open }) => ({
//   transition: theme.transitions.create(['margin', 'width'], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   ...(open && {
//     width: `calc(100% - ${drawerWidth}px)`,
//     marginLeft: `${drawerWidth}px`,
//     transition: theme.transitions.create(['margin', 'width'], {
//       easing: theme.transitions.easing.easeOut,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   }),
// }));

// const DrawerHeader = styled('div')(({ theme }) => ({
//   display: 'flex',
//   alignItems: 'center',
//   padding: theme.spacing(0, 1),
//   // necessary for content to be below app bar
//   ...theme.mixins.toolbar,
//   justifyContent: 'flex-end',
// }));

// export default function AgencyDashboard() {
//   const theme = useTheme();
//   const [open, setOpen] = React.useState(false);

//   const handleDrawerOpen = () => {
//     setOpen(true);
//   };

//   const handleDrawerClose = () => {
//     setOpen(false);
//   };

//   return (
//     <Box sx={{ display: 'flex' }}>
//       <CssBaseline />
//       <AppBar position="fixed" open={open}>
//         <Toolbar>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             onClick={handleDrawerOpen}
//             edge="start"
//             sx={{ mr: 2, ...(open && { display: 'none' }) }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" noWrap component="div" className="divClass">
//           <img src={a} alt="logo" width='120px'/>
//           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//           </Typography>
//             <span>Yadgar Safar</span>
//         </Toolbar>
//       </AppBar>
//       <Drawer
//         sx={{
//           width: drawerWidth,
//           flexShrink: 0,
//           '& .MuiDrawer-paper': {
//             width: drawerWidth,
//             boxSizing: 'border-box',
//           },
//         }}
//         variant="persistent"
//         anchor="left"
//         open={open}
//       >
//         <DrawerHeader>
//           <IconButton onClick={handleDrawerClose}>
//             {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
//           </IconButton>
//         </DrawerHeader>
//         <Divider />
//         <List>
//           {['Dashboard', 'Bookings', 'Company Details', 'Payments', 'Packages'].map((text, index) => (

//             <a href="/">
//             <ListItem button key={text}>
              
//               <ListItemIcon>
//                 <DashboardRoundedIcon/>
//               </ListItemIcon>

//               <ListItemText primary={text} />
//             </ListItem>
//             </a>
            
//           ))}
//         </List>
//         <Divider />
//       </Drawer>

//       <Main open={open}>
//         <DrawerHeader />
//         <div className='row'>
//           <div className='col-xl-3 col-lg-3 col-md-6 col-sm-12 box1'><h3>Orders Completed <br/><br/> 0</h3></div>
//           <div className='col-xl-3 col-lg-3 col-md-6 col-sm-12 box2'><h3>Orders Pending <br/><br/> 0</h3></div>
//           <div className='col-xl-3 col-lg-3 col-md-6 col-sm-12 box3'><h3>Tour Packages <br/><br/> 0</h3></div>
//           <div className='col-xl-3 col-lg-3 col-md-6 col-sm-12 box4'><h3>Revenue <br/><br/> 0</h3></div>
//         </div>
//         <br/><br/>
//         <PendingOrders/>
//         </Main>
//     </Box>
//   );
// }
const drawerWidth = 240;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

export default function ResponsiveDrawer(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
        <img src={a} alt="logo" width='120px'/>
      <Divider />
      <List>
        {['Dashboard', 'Bookings', 'Company Details', 'Payments', 'Packages'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index === 0 ? <DashboardRoundedIcon/> : null }
                {index === 1 ? <HowToRegIcon/> : null }
                {index === 2 ? <ManageAccountsIcon/> : null }
                {index === 3 ? <CreditScoreIcon/> : null }
                {index === 4 ? <TourRoundedIcon/> : null }
                
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Yadgar Safar
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >

        <br/><br/><br/>
        <div className='row'>
           <div className='col box box1'><h5>Orders Completed <br/><br/>0</h5></div>
           <div className='col box box2'><h5>Orders Pending <br/><br/> 0</h5></div>
           <div className='col box box3'><h5>Tour Packages <br/><br/> 0</h5></div>
           <div className='col box box4'><h5>Revenue <br/><br/> 0</h5></div>
         </div>
         
         <br/><br/>
         <PendingOrders/>        
      </Box>
    </Box>
  );
}