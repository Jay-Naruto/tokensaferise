import React from 'react'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { motion } from 'framer-motion';
import styles from "../styles/Table.module.css"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];

  

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  

export default function TableComponent() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  return (
    <motion.div
    initial="hidden" animate="visible" variants={{
      hidden: {
        scale: .8,
        opacity: 0
      },
      visible: {
        scale: 1,
        opacity: 1,
        transition: {
          delay: .4
        }
      },
    }}>
            <Box sx={{ width: '100%', display:'flex', justifyContent:'center'
          
          , alignItems:'center', margin:'70px 0',zIndex:1000 , }}>
            <Box sx={{ width: '90%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider',display:'flex', justifyContent:'center'
          
          , alignItems:'center', }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab sx={{ fontSize:30, textTransform:'capitalize'}} label="Project" {...a11yProps(0)} />
          <Tab  sx={{ fontSize:30, textTransform:'capitalize'}} label="Creator" {...a11yProps(1)} />
          <Tab  sx={{ fontSize:30, textTransform:'capitalize'}} label="Utilities" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        {

          [1,2,3,4,5].map((data)=>(
            <div className={styles.cont} >

            <div className={styles.row}>
            <div className={styles.element} >
            <div className={styles.num}>
   01.
             </div>
             <div className={styles.logodp}>
 <img src='./dp.png' alt=''/>
             </div>
             <div className={styles.content}>
             <div className={styles.name}>
 Project Name
             </div>
             <div className={styles.details}>
 06 Utilities | 2222 Claims
             </div>
             </div>
                
            </div>
 
 
            <div className={styles.element} >
            <div className={styles.num}>
   01.
             </div>
             <div className={styles.logodp}>
 <img src='./dp.png' alt=''/>
             </div>
             <div className={styles.content}>
             <div className={styles.name}>
 Project Name
             </div>
             <div className={styles.details}>
 06 Utilities | 2222 Claims
             </div>
             </div>
                
            </div>
 
 
            <div className={styles.element} >
            <div className={styles.num}>
   01.
             </div>
             <div className={styles.logodp}>
 <img src='./dp.png' alt=''/>
             </div>
             <div className={styles.content}>
             <div className={styles.name}>
 Project Name
             </div>
             <div className={styles.details}>
 06 Utilities | 2222 Claims
             </div>
             </div>
                
            </div>

            
            <hr color='#fff' className={styles.hr} ></hr>
 
         </div>
         </div>
 
          ))
        }


      </TabPanel>
      <TabPanel value={value} index={1}>
      {

[1,2,3,4].map((data)=>(
  <div className={styles.cont} >

  <div className={styles.row}>
  <div className={styles.element} >
  <div className={styles.num}>
01.
   </div>
   <div className={styles.logodp}>
<img src='./dp.png' alt=''/>
   </div>
   <div className={styles.content}>
   <div className={styles.name}>
Project Name
   </div>
   <div className={styles.details}>
06 Utilities | 2222 Claims
   </div>
   </div>
      
  </div>


  <div className={styles.element} >
  <div className={styles.num}>
01.
   </div>
   <div className={styles.logodp}>
<img src='./dp.png' alt=''/>
   </div>
   <div className={styles.content}>
   <div className={styles.name}>
Project Name
   </div>
   <div className={styles.details}>
06 Utilities | 2222 Claims
   </div>
   </div>
      
  </div>


  <div className={styles.element} >
  <div className={styles.num}>
01.
   </div>
   <div className={styles.logodp}>
<img src='./dp.png' alt=''/>
   </div>
   <div className={styles.content}>
   <div className={styles.name}>
Project Name
   </div>
   <div className={styles.details}>
06 Utilities | 2222 Claims
   </div>
   </div>
      
  </div>

  
  <hr color='#fff' className={styles.hr} ></hr>

</div>
</div>

))
}


      </TabPanel>
      <TabPanel value={value} index={2}>
      {

[1,2,3,4].map((data)=>(
  <div className={styles.cont} >

  <div className={styles.row}>
  <div className={styles.element} >
  <div className={styles.num}>
01.
   </div>
   <div className={styles.logodp}>
<img src='./dp.png' alt=''/>
   </div>
   <div className={styles.content}>
   <div className={styles.name}>
Project Name
   </div>
   <div className={styles.details}>
06 Utilities | 2222 Claims
   </div>
   </div>
      
  </div>


  <div className={styles.element} >
  <div className={styles.num}>
01.
   </div>
   <div className={styles.logodp}>
<img src='./dp.png' alt=''/>
   </div>
   <div className={styles.content}>
   <div className={styles.name}>
Project Name
   </div>
   <div className={styles.details}>
06 Utilities | 2222 Claims
   </div>
   </div>
      
  </div>


  <div className={styles.element} >
  <div className={styles.num}>
01.
   </div>
   <div className={styles.logodp}>
<img src='./dp.png' alt=''/>
   </div>
   <div className={styles.content}>
   <div className={styles.name}>
Project Name
   </div>
   <div className={styles.details}>
06 Utilities | 2222 Claims
   </div>
   </div>
      
  </div>

  
  <hr color='#fff' className={styles.hr} ></hr>

</div>
</div>
))
}


      </TabPanel>
    </Box>
    </Box>
    </motion.div>
  )
}
