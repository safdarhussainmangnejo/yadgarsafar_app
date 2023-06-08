import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react';
// material
import { Grid, Container, Stack } from '@mui/material';
// hooks
import useSettings from '../../hooks/useSettings';
// components
import Page from '../../components/Page';
import AdminList from './AdminList';
import {
  BankingIncome,
  BankingExpenses,
  BankingContacts,
  BankingInviteFriends,
  BankingQuickTransfer,
  BankingCurrentBalance,
  BankingBalanceStatistics,
  BankingRecentTransitions,
  BankingExpensesCategories
} from '../../components/_dashboard/general-banking';

// ---------------------------------------------------------------------

export default function GeneralBanking() {
  const { themeStretch } = useSettings();
  const local = JSON.parse(localStorage.getItem('user'));
  console.log('LOCAL : ...........> ', local);

  // ---------------------------------------------------------------------

  const [packages, setPackages] = useState({});

  useEffect(() => {
    fetch('http://localhost:8080/getUsers')
      .then((response) => response.json())
      .then((data) => setPackages(data));
  }, []);

  console.log('GET USERS>>>>>>>>>> ', packages);
  // ----------------------------------------------------------------------

  return local.role !== 'admin' ? (
    <>
      <Page title="General Banking">
        <Container maxWidth={themeStretch ? false : 'xl'}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={7}>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
                <BankingIncome />
                <BankingExpenses />
              </Stack>
            </Grid>

            <Grid item xs={12} md={5}>
              <BankingCurrentBalance />
            </Grid>

            <Grid item xs={12} md={12}>
              <Stack spacing={3}>
                <BankingBalanceStatistics />
                {/* <BankingExpensesCategories /> */}
                <BankingRecentTransitions />
              </Stack>
            </Grid>

            {/* <Grid item xs={12} md={4}>
            <Stack spacing={3}>
              <BankingQuickTransfer />
              <BankingContacts />
              <BankingInviteFriends />
              </Stack>
          </Grid> */}
          </Grid>
        </Container>
      </Page>
    </>
  ) : <AdminList/>
  
}
