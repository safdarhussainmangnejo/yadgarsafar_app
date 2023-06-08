import PropTypes from 'prop-types';
import { useRef, useState, useEffect } from 'react';
import { paramCase } from 'change-case';
import { Icon } from '@iconify/react';
import { Link as RouterLink } from 'react-router-dom';
import moreVerticalFill from '@iconify/icons-eva/more-vertical-fill';
import arrowIosForwardFill from '@iconify/icons-eva/arrow-ios-forward-fill';
// material
import { useTheme } from '@mui/material/styles';
import {
  Box,
  Card,
  Menu,
  Stack,
  Table,
  Avatar,
  Button,
  Divider,
  MenuItem,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
  CardHeader,
  Typography,
  TableContainer
} from '@mui/material';
// utils
import mockData from '../../../utils/mock-data';
//
import Scrollbar from '../../Scrollbar';
import { MIconButton } from '../../@material-extend';
import { PATH_DASHBOARD } from '../../../routes/paths'

// ----------------------------------------------------------------------

const MOCK_BOOKINGS = [...Array(5)].map((_, index) => ({
  id: mockData.id(index),
  name: mockData.name.fullName(index),
  avatar: mockData.image.avatar(index),
  checkIn: mockData.time(index),
  checkOut: mockData.time(index),
  phoneNumber: mockData.phoneNumber(index),
  status: (index === 1 && 'pending') || (index === 3 && 'un_paid') || 'paid',
  roomType: (index === 1 && 'double') || (index === 3 && 'king') || 'single'
}));

// ----------------------------------------------------------------------

MoreMenuButton.propTypes = {
  Approve: PropTypes.func,
  Reject: PropTypes.func,
  packageId: PropTypes.string
};

function MoreMenuButton({ packageId, Approve, Reject }) {
  const menuRef = useRef(null);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <>
        <MIconButton ref={menuRef} size="large" onClick={handleOpen}>
          <Icon icon={moreVerticalFill} width={20} height={20} />
        </MIconButton>
      </>

      <Menu
        open={open}
        anchorEl={menuRef.current}
        onClose={handleClose}
        PaperProps={{
          sx: { width: 200, maxWidth: '100%' }
        }}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        {/* <MenuItem onClick={Reject}>
          <Icon icon={downloadFill} width={20} height={20} />
          <Typography variant="body2" sx={{ ml: 2 }}>
            Download
          </Typography>
        </MenuItem>
        <MenuItem onClick={Approve}>
          <Icon icon={printerFill} width={20} height={20} />
          <Typography variant="body2" sx={{ ml: 2 }}>
            Print
          </Typography>
        </MenuItem> */}
        {packageId ? <MenuItem
          component={RouterLink}
          to={`${PATH_DASHBOARD.user.root}/${paramCase(packageId)}/view`}
          sx={{ color: 'text.secondary' }}
        >
          
          <Typography variant="body2" sx={{ ml: 2 }}>
            View Details
          </Typography>
        </MenuItem> 
        :
        <><MenuItem onClick={Reject}>
          {/* <Icon icon={downloadFill} width={20} height={20} /> */}
          <Typography variant="body2" sx={{ ml: 2 }}>
            Download
          </Typography>
        </MenuItem>
        <MenuItem onClick={Approve}>
          {/* <Icon icon={printerFill} width={20} height={20} /> */}
          <Typography variant="body2" sx={{ ml: 2 }}>
            Print
          </Typography>
        </MenuItem></>
        }
        
        <Divider />
        <MenuItem onClick={Reject} sx={{ color: 'error.main' }}>
          <Typography variant="body2" sx={{ ml: 2 }}>
            Reject
          </Typography>
        </MenuItem>
      </Menu>
    </>
  );
}

export default function BookingDetails({ Useremail }) {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';
  const [tourists, setTourists] = useState({});
  const [agency, setAgency] = useState({});

  const displayTouristsData = () => {
    fetch(`http://localhost:8080/getTourists`)
      .then((response) => response.json())
      .then((data) => {
        if (!data) {
          console.log('User Not found');
        } else {
          setTourists(data);
          localStorage.setItem('tourist', JSON.stringify(data));
        }
      });
  };

  const displayAgencyData = () => {
    fetch(`http://localhost:8080/getUsers`)
      .then((response) => response.json())
      .then((data) => {
        if (!data) {
          console.log('User Not found');
        } else {
          setAgency(data);
          // localStorage.setItem('tourist', JSON.stringify(data));
        }
      });
  };

  useEffect(() => {
    displayTouristsData();
    displayAgencyData();
  }, []);
  console.log('tourist Satet Values: ', tourists);

  const handleClickDownload = () => {};
  const handleClickPrint = () => {};
  const handleClickShare = () => {};
  const handleClickDelete = () => {};

  const local = JSON.parse(localStorage.getItem('user'));

  return (
    <>
      {Object.keys(local).length > 0 && local.role === 'agency' ? (
        <>
          <Card>
            <CardHeader title="Recent Bookings" sx={{ mb: 3 }} />

            <Scrollbar>
              <TableContainer sx={{ minWidth: 720 }}>
                <Table>
                  <TableHead>
                    <TableRow key="header1">
                      <TableCell sx={{ minWidth: 240 }}>Tourist</TableCell>
                      <TableCell sx={{ minWidth: 160 }}>Package Name</TableCell>
                      <TableCell sx={{ minWidth: 160 }}>Package City</TableCell>
                      <TableCell sx={{ minWidth: 120 }}>Price/per head</TableCell>
                      <TableCell sx={{ minWidth: 120 }}>Amount Paid</TableCell>
                      <TableCell sx={{ minWidth: 120 }}>People</TableCell>
                      <TableCell sx={{ minWidth: 200 }}>Status</TableCell>
                      <TableCell  sx={{ minWidth: 20 }}/>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {tourists.length > 0 &&
                      tourists.map((value) =>
                        value.bookedPackages.map(
                          (val, i) =>
                            val.companyEmail === Useremail && (
                              <>
                                <TableRow key={val._id}>
                                  <TableCell >
                                    <Stack direction="row" alignItems="center" spacing={2}>
                                      <Avatar alt={value.firstname} src={value.image} />
                                      <Typography variant="subtitle2">
                                        {value.firstname} {value.lastname}
                                      </Typography>
                                    </Stack>
                                  </TableCell>

                                  <TableCell >{val.packageName}</TableCell>
                                  <TableCell >{val.packageCity}</TableCell>
                                  <TableCell  sx={{ textTransform: 'capitalize' }}>{val.price}</TableCell>
                                  <TableCell  sx={{ textTransform: 'capitalize' }}>{val.amountPaid}</TableCell>
                                  <TableCell  sx={{ textTransform: 'capitalize' }}>{val.numberofPeople}</TableCell>

                                  <TableCell  sx={{ textTransform: 'capitalize' }}>{val.paymentStatus}</TableCell>

                                  <TableCell  >
                                    <MoreMenuButton  Reject={handleClickPrint} />
                                  </TableCell>
                                </TableRow>
                              </>
                            )
                        )
                      )}
                  </TableBody>
                </Table>
              </TableContainer>
            </Scrollbar>

            <Divider />

            <Box sx={{ p: 2, textAlign: 'right' }}>
              <Button
                to="#"
                size="small"
                color="inherit"
                component={RouterLink}
                endIcon={<Icon icon={arrowIosForwardFill} />}
              >
                View All
              </Button>
            </Box>
          </Card>
        </>
      ) : (
        <>
          <Card>
            <CardHeader title="Travel Agencies &#38; Operators" sx={{ mb: 3 }} />
            <Scrollbar>
              <TableContainer sx={{ minWidth: 720 }}>
                <Table>
                  <TableHead >
                    <TableRow key="header2">
                      <TableCell sx={{ minWidth: 240 }}>Company Name</TableCell>
                      <TableCell sx={{ minWidth: 160 }}>Province</TableCell>
                      <TableCell sx={{ minWidth: 160 }}>Email</TableCell>
                      <TableCell sx={{ minWidth: 120 }}>Phone</TableCell>
                      <TableCell sx={{ minWidth: 120 }}>No. of Packages</TableCell>
                      <TableCell />
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {Object.keys(agency).length > 0 &&
                      agency.map((value, i) =>
                        
                              <>
                                <TableRow key={value._id}>
                                  <TableCell>
                                    <Stack direction="row" alignItems="center" spacing={2}>
                                      <Avatar alt={value.companyName} src={value.companyImage} />
                                      <Typography variant="subtitle2">
                                        {value.companyName}
                                      </Typography>
                                    </Stack>
                                  </TableCell>

                                  <TableCell>{value.companyProvince}</TableCell>

                                  <TableCell>{value.email}</TableCell>

                                  <TableCell>{value.companyNumber}</TableCell>

                                  <TableCell sx={{ textTransform: 'capitalize' }}>{value.packages.length}</TableCell>

                                  <TableCell align="right">
                                    <MoreMenuButton packageId={value._id} Reject={handleClickPrint} />
                                  </TableCell>
                                </TableRow>
                              </>
                      )}
                  </TableBody>
                </Table>
              </TableContainer>
            </Scrollbar>

            <Divider />

            <Box sx={{ p: 2, textAlign: 'right' }}>
              <Button
                to="#"
                size="small"
                color="inherit"
                component={RouterLink}
                endIcon={<Icon icon={arrowIosForwardFill} />}
              >
                View All
              </Button>
            </Box>
          </Card>
        </>
      )}
    </>
  );
}
