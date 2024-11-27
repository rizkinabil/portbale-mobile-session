import DashboardCard from '@/app/(DashboardLayout)//components/shared/DashboardCard';
import {
  Box,
  Chip,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { IconPlayerPlay, IconPlayerStop, IconPlus, IconSearch, IconTrash } from '@tabler/icons-react';
import React from 'react';

const sessions = [
  {
    id: '1',
    sessionName: 'User Authentication',
    status: 'Active',
    statusColor: 'success.main',
  },
  {
    id: '2',
    sessionName: 'Data Sync',
    status: 'Inactive',
    statusColor: 'error.main',
  },
  {
    id: '3',
    sessionName: 'Payment Processing',
    status: 'Active',
    statusColor: 'success.main',
  },
  {
    id: '4',
    sessionName: 'Email Notifications',
    status: 'Inactive',
    statusColor: 'error.main',
  },
];

const SessionsTable = () => {
  const [search, setSearch] = React.useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const filteredSessions = sessions.filter((session) =>
    session.sessionName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <DashboardCard
      title="Sessions Management"
      action={
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <OutlinedInput
            sx={{ width: '150px' }}
            placeholder="Search"
            size="small"
            value={search}
            onChange={handleSearch}
            startAdornment={
              <InputAdornment position="start">
                <IconSearch size={18} />
              </InputAdornment>
            }
          />
          <IconButton color="primary" aria-label="add">
            <IconPlus size={18} />
          </IconButton>
        </Box>
      }
    >
      <Box sx={{ overflow: 'auto', width: { xs: '400px', sm: 'auto' }, mx: 'auto' }}>
        <Table
          aria-label="session table"
          sx={{
            whiteSpace: 'nowrap',
            mt: 2,
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant="subtitle2" fontWeight={600}>
                  Id
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2" fontWeight={600}>
                  Session Name
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2" fontWeight={600}>
                  Status
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2" fontWeight={600}>
                  Actions
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredSessions.map((session) => (
              <TableRow key={session.id}>
                <TableCell>
                  <Typography sx={{ fontSize: '15px', fontWeight: '500' }}>{session.id}</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2" fontWeight={600}>
                    {session.sessionName}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Chip
                    sx={{ px: '4px', backgroundColor: session.statusColor, color: '#fff' }}
                    size="small"
                    label={session.status}
                  />
                </TableCell>
                <TableCell>
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <IconButton color="primary" aria-label="start">
                      <IconPlayerPlay size={18} />
                    </IconButton>
                    <IconButton color="secondary" aria-label="stop">
                      <IconPlayerStop size={18} />
                    </IconButton>
                    <IconButton color="error" aria-label="delete">
                      <IconTrash size={18} />
                    </IconButton>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </DashboardCard>
  );
};

export default SessionsTable;
