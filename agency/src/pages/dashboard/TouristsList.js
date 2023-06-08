import PropTypes from 'prop-types';
import { useRef, useState, useEffect } from 'react';
import { format } from 'date-fns';
import { sentenceCase } from 'change-case';
import { Icon } from '@iconify/react';
import { Link as RouterLink } from 'react-router-dom';
import shareFill from '@iconify/icons-eva/share-fill';
import printerFill from '@iconify/icons-eva/printer-fill';
import downloadFill from '@iconify/icons-eva/download-fill';
import trash2Outline from '@iconify/icons-eva/trash-2-outline';
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
import Scrollbar from '../../components/Scrollbar';
import { MIconButton } from '../../components/@material-extend';


// ----------------------------------------------------------------------


// ----------------------------------------------------------------------

MoreMenuButton.propTypes = {
  Approve: PropTypes.func,
  Reject: PropTypes.func
  // Approve: PropTypes.func,
  // Approve: PropTypes.func
};

function MoreMenuButton({ Delete, Edit }) {
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
        {/* <MenuItem onClick={Approve}>
          <Typography variant="body2" sx={{ ml: 2 }}>
            Approve
          </Typography>
        </MenuItem> */}
        <Divider />
        <MenuItem onClick={Delete} sx={{ color: 'error.main' }}>
          <Typography variant="body2" sx={{ ml: 2 }}>
            Delete
          </Typography>
        </MenuItem>
      </Menu>
    </>
  );
}

export default function TouristsList({ Useremail }) {
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

//   const displayAgencyData = () => {
//     fetch(`http://localhost:8080/getUsers`)
//       .then((response) => response.json())
//       .then((data) => {
//         if (!data) {
//           console.log('User Not found');
//         } else {
//           setAgency(data);
//         }
//       });
//   };

  useEffect(() => {
    displayTouristsData();
    // displayAgencyData();
  }, []);
  console.log('tourist Satet Values: ', tourists);

  const handleClickDownload = () => {};
  const handleClickPrint = () => {};
  const handleClickShare = () => {};
  const handleClickDelete = () => {};

  const local = JSON.parse(localStorage.getItem('user'));

  return (
    <>
          <Card>
            <CardHeader title="List of Tourists" sx={{ mb: 3 }} />
            <Scrollbar>
              <TableContainer sx={{ minWidth: 700 }}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell sx={{ minWidth: 240 }}>Tourist</TableCell>
                      <TableCell sx={{ minWidth: 170 }}>Email</TableCell>
                      <TableCell sx={{ minWidth: 170 }}>City</TableCell>
                      <TableCell sx={{ minWidth: 130 }}>Country</TableCell>
                      <TableCell align="right" sx={{ minWidth: 200 }}>Action</TableCell>
                      
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {Object.keys(tourists).length > 0 &&
                      tourists.map((value) =>
                       
                             (
                              <>
                                <TableRow key={value._id}>
                                  <TableCell>
                                    <Stack direction="row" alignItems="center" spacing={3}>
                                      <Avatar alt= {value.firstname} src={value.image} />
                                      <Typography variant="subtitle2">
                                        {value.firstname} {value.lastname}
                                      </Typography>
                                    </Stack>
                                  </TableCell>

                                  <TableCell>{value.email}</TableCell>

                                  <TableCell>{value.city}</TableCell>

                                  <TableCell>{value.country}</TableCell>

                                  <TableCell align="right">
                                    <MoreMenuButton Delete={handleClickDownload} Edit={handleClickPrint} />
                                  </TableCell>
                                </TableRow>
                              </>
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
      ) 
}
