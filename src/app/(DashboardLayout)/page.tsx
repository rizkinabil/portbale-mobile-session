'use client';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import { Box, Grid } from '@mui/material';
// components

import RecentActivity from '@/app/(DashboardLayout)/components/dashboard/RecentActivity';
import SessionOverviewMetrics from '@/app/(DashboardLayout)/components/dashboard/SessionOverviewMetrics';
import SessionsTable from '@/app/(DashboardLayout)/components/dashboard/SessionsTable';
import YearlyBreakup from '@/app/(DashboardLayout)/components/dashboard/YearlyBreakup';

const Dashboard = () => {
  return (
    <PageContainer title="Dashboard" description="Sessions Management">
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={8}>
            <SessionOverviewMetrics />
          </Grid>
          <Grid item xs={12} lg={4}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <YearlyBreakup />
              </Grid>
              <Grid item xs={12}>
                <RecentActivity />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <SessionsTable />
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
};

export default Dashboard;
