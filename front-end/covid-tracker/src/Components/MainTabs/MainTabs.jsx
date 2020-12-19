import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import AllEmployees from '../AllEmployees/AllEmployees';
import CovidPostiveEmployees from '../CovidPositiveEmployees/CovidPositiveEmployees';
import { useSelector } from 'react-redux';
import QuarantinedEmployees from '../QuarantinedEmployees/QuarantinedEmployees';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: "100%",
  },
}));

export default function MainTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const allEmpArr = useSelector(state => state.allEmpRoot.all_emp_arr)


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
        //   variant="fullWidth"S
          aria-label="full width tabs example"
        >
          <Tab label={`All Employees (${allEmpArr.length>0?allEmpArr.length: "Loading.."})`  }   {...a11yProps(0)} />
          <Tab label={`Covid +ve (${allEmpArr.length>0?allEmpArr.filter(item => item.covid_positive === true).length: "Loading.."})`  } {...a11yProps(1)} />
          <Tab label={`Quarantined (${allEmpArr.length>0?allEmpArr.filter(item => item.covid_positive === true).length: "Loading.."})`  } {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <AllEmployees />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <CovidPostiveEmployees/>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <QuarantinedEmployees/>
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
