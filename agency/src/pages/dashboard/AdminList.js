import { filter } from 'lodash';
import Axios from 'axios';
import { Icon } from '@iconify/react';
import { sentenceCase } from 'change-case';
import { useState, useEffect } from 'react';
import plusFill from '@iconify/icons-eva/plus-fill';
import { Link as RouterLink } from 'react-router-dom';
// material
import { useTheme, styled } from '@mui/material/styles';
import {
  Card,
  Table,
  Stack,
  Avatar,
  Button,
  Checkbox,
  TableRow,
  TableBody,
  TableCell,
  Container,
  Typography,
  TableContainer,
  TablePagination
} from '@mui/material';
// redux
import { useDispatch, useSelector } from '../../redux/store';
import user, { getUserList, deleteUser } from '../../redux/slices/user';
// routes
import { PATH_DASHBOARD } from '../../routes/paths';
// hooks
import useSettings from '../../hooks/useSettings';
// components
import Page from '../../components/Page';
import Label from '../../components/Label';
import Scrollbar from '../../components/Scrollbar';
import SearchNotFound from '../../components/SearchNotFound';
import HeaderBreadcrumbs from '../../components/HeaderBreadcrumbs';
import { UserListHead, UserListToolbar, UserMoreMenu } from '../../components/_dashboard/user/list';

// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: 'company', label: 'Image & Company Name', alignRight: false },
  { id: 'city', label: 'City', alignRight: false },
  { id: 'price', label: 'Price', alignRight: false },
  { id: 'range', label: 'Age-Range', alignRight: false },
  { id: 'duration', label: 'Duration', alignRight: false },
  { id: 'action', label: 'Action', alignRight: true }
];

// ----------------------------------------------------------------------
const ThumbImgStyle = styled('img')(({ theme }) => ({
  width: 64,
  height: 64,
  objectFit: 'cover',
  margin: theme.spacing(2, 4),
  borderRadius: theme.shape.borderRadiusSm
}));
// ----------------------------------------------------------------------

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function applySortFilter(array, comparator, query) {
  const stabilizedThis = array?.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  if (query) {
    return filter(array, (_user) => _user.name.toLowerCase().indexOf(query.toLowerCase()) !== -1);
  }
  return stabilizedThis.map((el) => el[0]);
}

export default function AdminList(props, variant) {
  const agencyLocalStorage = JSON.parse(localStorage.getItem("agency"));
  const { themeStretch } = useSettings();
  const theme = useTheme();
  const dispatch = useDispatch();
  const { userList } = useSelector((state) => state.user);
  const [page, setPage] = useState(0);
  const [order, setOrder] = useState('asc');
  const [selected, setSelected] = useState([]);
  const [orderBy, setOrderBy] = useState('name');
  const [filterName, setFilterName] = useState('');
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [users, setUsers] = useState({});
  const [agency, setAgency] = useState([]);
  const [packages, setPackages] = useState({});
  const [refresh,setRefresh]=useState(false);
 
//   const packageId = agencyLocalStorage?._id;
  const local = JSON.parse(localStorage.getItem('user'));
  console.log('LOCAL : ...........> ', local);

  // ---------------------------------------------------------------------


  useEffect(() => {
    fetch('http://localhost:8080/getUsers')
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  console.log('GET USERS >>>>>>>>>> ', users);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = userList.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleFilterByName = (event) => {
    setFilterName(event.target.value);
  };

  const handleDeleteUser = async (agencyId, packageId) => {
    let response = '';
    try{
        response = await Axios.delete(`http://localhost:8080/agency/deletepackage/${agencyId}&${packageId}`);
        console.log('deleted Pckage is : ', response);
        // setTimeout(searchAgencybyId(),500);
    }catch(error){
      console.log('deletePackage api error: ', error);
      // console.log('deletePackage api error: ', response.data.errorMessage);
    }
    
  };

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - userList.length) : 0;

  const filteredUsers = applySortFilter(userList, getComparator(order, orderBy), filterName);

  // const isUserNotFound = filteredUsers.length === 0;
  const isUserNotFound = users.length === 0;
  console.log("isUserNotFound=======: ",isUserNotFound);
  console.log("UserLength------: ",users.length);

  return (

    <Page title="Tour Packages">
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <HeaderBreadcrumbs
          heading='Tour Packages'
          links={[
            { name: 'Dashboard', href: PATH_DASHBOARD.root },
            { name: 'User', href: PATH_DASHBOARD.user.root },
            { name: 'List' }
          ]}
          
        //   action={
        //     <Button
        //       variant="contained"
        //       component={RouterLink}
        //       to={PATH_DASHBOARD.user.newUser}
        //       startIcon={<Icon icon={plusFill} />}
        //     >
        //      New Packages
        //     </Button>
        //   }
        />

        <Card>
          <UserListToolbar numSelected={selected.length} filterName={filterName} onFilterName={handleFilterByName} />

          <Scrollbar>
            <TableContainer sx={{ minWidth: 800 }}>
            <Table>
                <UserListHead
                  order={order}
                  orderBy={orderBy}
                  headLabel={TABLE_HEAD}
                  rowCount={userList.length}
                  numSelected={selected.length}
                  onRequestSort={handleRequestSort}
                  onSelectAllClick={handleSelectAllClick}
                />
                  
                  <TableBody>
                  
                  { Object.keys(users).length>0 && users.map((row)=>
                        row.packages.map(
                            (val) =>
                            
                            (
                            <>
                            <TableRow
                                hover
                                key={val._id}
                                tabIndex={-1}
                                // role="checkbox"
                                // selected={isItemSelected}
                                // aria-checked={isItemSelected}
                            >
                                <TableCell padding="checkbox">
                                <Checkbox  onChange={(event) => handleClick(event, val.packageName)} />
                                </TableCell>
                                <TableCell component="th" scope="row" padding="none">
                                <Stack direction="row" alignItems="center" spacing={1}>
                                    
                                    <ThumbImgStyle alt={val.packageName} src={val.image} />
                                    <Typography variant="subtitle2" noWrap>
                                    {val.packageName}
                                    </Typography>
                                </Stack>
                                </TableCell>
                                <TableCell align="left">{val.packageCity}</TableCell>
                                <TableCell align="left">{val.price}</TableCell>
                                <TableCell align="left">{val.ageRange}</TableCell>
                                <TableCell align="left">{val.packageDuration}</TableCell>

                                <TableCell align="right">
                                <UserMoreMenu onDelete={() => handleDeleteUser(row._id, val._id)} userName={val.packageName} packageId={val._id} />
                                </TableCell>
                            </TableRow>
                            </>
                    )
                  ))}
                  {emptyRows > 0 && (
                    <TableRow style={{ height: 53 * emptyRows }}>
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </TableBody>
                  
                                  
                {isUserNotFound && (
                  <TableBody>
                    <TableRow>
                      <TableCell align="center" colSpan={6} sx={{ py: 3 }}>
                        <SearchNotFound searchQuery={filterName} />
                      </TableCell>
                    </TableRow>
                  </TableBody>
                )}
              </Table>

            </TableContainer>
          </Scrollbar>

          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={userList.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Card>
      </Container>
    </Page>
  );
}
