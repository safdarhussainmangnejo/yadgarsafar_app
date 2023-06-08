import { useEffect, useState } from 'react';
import { paramCase } from 'change-case';
import { useParams, useLocation } from 'react-router-dom';

// material
import { Container } from '@mui/material';
// redux
import { useDispatch, useSelector } from '../../redux/store';
import { getUserList } from '../../redux/slices/user';
// routes
import { PATH_DASHBOARD } from '../../routes/paths';
// hooks
import useSettings from '../../hooks/useSettings';
// components
import Page from '../../components/Page';
import HeaderBreadcrumbs from '../../components/HeaderBreadcrumbs';
import UserNewForm from '../../components/_dashboard/user/UserNewForm';

// ----------------------------------------------------------------------

export default function UserCreate() {
  const { themeStretch } = useSettings();
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const { name } = useParams();
  const { userList } = useSelector((state) => state.user);
  const isEdit = pathname.includes('edit');
  const [agencyData, setAgencyData]=useState({})
  const agencyLocalStorage = JSON.parse(localStorage.getItem('agency'));
  const currentUser = agencyLocalStorage;
  console.log("agencyLocalStorage:----- ", agencyLocalStorage);
  console.log("currentUser: ", currentUser);
  console.log("Package ID: ", name);
  const packagesList = currentUser?.packages;
  console.log("CurrentUser.Packages: ", packagesList);
  const item = packagesList.find(item => item._id === name);
  console.log("Package with packageId Found: ",item)
  // alert("currentPackage:--- ", item)
  useEffect(() => {
    dispatch(getUserList());
  }, [dispatch]);

  // setTimeout(alert("agencyData:-- ", agencyData), 1000);
  return (
    <Page title="Create a new package">
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <HeaderBreadcrumbs
          heading={!isEdit ? 'Create a new package' : 'Edit Package'}
          links={[
            { name: 'Dashboard', href: PATH_DASHBOARD.root },
            { name: 'User', href: PATH_DASHBOARD.user.root },
            { name: !isEdit ? 'New Package' : item?.packageName }
          ]}
        />

        <UserNewForm isEdit={isEdit} currentUser={currentUser} packageId={name} currentPackage={item} />
      </Container>
    </Page>
  );
}
