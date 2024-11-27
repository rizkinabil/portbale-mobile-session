'use client';

import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import SessionsTable from '@/app/(DashboardLayout)/components/dashboard/SessionsTable';
import { Box, Grid } from '@mui/material';

const ProxyManagement = () => {
  return (
    <PageContainer title="Proxy Management" description="this is Proxy Management">
      <Box>
        <Grid container>
          <Grid item xs={12}>
            <SessionsTable />
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
};

export default ProxyManagement;
