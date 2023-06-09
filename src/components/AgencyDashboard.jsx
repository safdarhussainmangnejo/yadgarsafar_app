import * as React from 'react';
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
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
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


const drawerWidth = 240;

// interface Props {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window?: () => Window;
// }

export default function ResponsiveDrawer(props) {
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