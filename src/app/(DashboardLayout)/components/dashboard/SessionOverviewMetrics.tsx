import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';
import { MenuItem, Select } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import dynamic from 'next/dynamic';
import React from 'react';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const SessionUtilization = () => {
  // select
  const [month, setMonth] = React.useState('1');

  const handleChange = (event: any) => {
    setMonth(event.target.value);
  };

  // chart color
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const secondary = theme.palette.secondary.main;

  // chart
  const optionscolumnchart: any = {
    chart: {
      type: 'line',
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: '#adb0bb',
      toolbar: {
        show: true,
      },
      height: 370,
    },
    colors: [primary, secondary],
    stroke: {
      show: true,
      width: 5,
      curve: 'smooth',
      lineCap: 'butt',
      colors: [primary, secondary],
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    grid: {
      borderColor: 'rgba(0,0,0,0.1)',
      strokeDashArray: 3,
      xaxis: {
        lines: {
          show: false,
        },
      },
    },
    yaxis: {
      tickAmount: 4,
    },
    xaxis: {
      categories: ['16/08', '17/08', '18/08', '19/08', '20/08', '21/08', '22/08', '23/08'],
      axisBorder: {
        show: false,
      },
    },
    tooltip: {
      theme: 'dark',
      fillSeriesColor: false,
    },
  };
  const seriescolumnchart: any = [
    {
      name: 'Session Usage',
      data: [355, 390, 300, 350, 390, 180, 355, 390],
    },
  ];

  return (
    <DashboardCard
      title="Session Utilization Over Time"
      action={
        <Select labelId="month-dd" id="month-dd" value={month} size="small" onChange={handleChange}>
          <MenuItem value={1}>October 2024</MenuItem>
          <MenuItem value={2}>November 2024</MenuItem>
          <MenuItem value={3}>December 2024</MenuItem>
        </Select>
      }
    >
      <Chart options={optionscolumnchart} series={seriescolumnchart} type="line" height={490} width={'100%'} />
    </DashboardCard>
  );
};

export default SessionUtilization;
