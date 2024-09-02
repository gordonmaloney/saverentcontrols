import React, {useState} from 'react';
import { Box, Tab, Tabs, useTheme, useMediaQuery, Button } from '@mui/material';
import  Write  from './Frames/Write'
import  FAQ  from './Frames/FAQ'
import  Join  from './Frames/Join'
import { BtnStyle } from '../Shared';

function TabPanel(props) {
  const { children, value, index, ...other } = props;



  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      style={{width: '100%'}}
    >
      {value === index && (
        <Box className="frameBox">
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export const Frame = () => {
  const [value, setValue] = React.useState(0);
  const theme = useTheme();
  const isWideScreen = useMediaQuery(theme.breakpoints.up('sm')); // 'sm' corresponds to 600px

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };



const tabStyle = {
  maxWidth: isWideScreen ? '150px' : '120px',
  color: 'white',
  fontFamily: "Bebas Neue",
  fontSize: '22px',
  lineHeight: '22px',
  '&.Mui-selected': {color: 'white', backgroundColor:  'green'}
}

const [landing, setLanding] = useState(false)


  if (landing) {
    return (
      <div style={{ display: 'flex', margin: '15px 0', minHeight: 'calc(100vh - 90px)', alignItems: 'center', justifyContent: 'center' }}>
     
      <div id="bodyFrame"  style={{maxWidth: '700px'}}>
      <Box className="frameBox">
        <h1>SAVE RENT CONTROLS</h1>
<center>
        <p style={{padding: '10px'}}>
       Voices from both inside and outside the Scottish Government are trying to water down, delay and sabotage rent controls. We cannot - and will not - let them.
       
       <br/><br/>
       
       Use this tool 
         </p>
        
        <Button
        onClick={() => setLanding(false)}
        sx={BtnStyle}>
          GET STARTED
        </Button>

        </center>



</Box>
        </div>

        </div>

    )
  }

 if (!landing) {
  return (
    <div style={{ display: 'flex', margin: '15px 0', minHeight: 'calc(100vh - 90px)', alignItems: 'center', justifyContent: 'center' }}>
     
    <div id="bodyFrame">
    <Box 
    sx={{ width: '100%',  display: 'flex', flexDirection: isWideScreen ? 'row' : 'column' }}>
     
      <TabPanel value={value} index={0}>
        <Write setValue={setValue}/>
      </TabPanel>
  
    </Box></div></div>
  );}
}
