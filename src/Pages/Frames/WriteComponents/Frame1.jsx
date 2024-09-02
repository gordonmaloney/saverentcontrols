import React, {useState, useEffect} from 'react'
import { SendModal } from '../../../Components/SendModal'
import { useMediaQuery, Button, Grid, Input, InputAdornment, MenuItem, TextField, FormLabel, Paper, Chip, Accordion, AccordionSummary, AccordionDetails, Select } from '@mui/material';
import { BtnStyle, BtnStyleSmall } from '../../../Shared';
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import {msps} from '../../../MSPs'
import {regions} from '../../../REGIONS'

import axios from 'axios';
import {axiosURL} from '../../../axiosURL'




export const Frame1 = ({ name, constituency, setName, invalid, fetchPostcodeDeets, postcode, setPostcode, currentRent, setCurrentRent, newRent, setNewRent, lettingAgent, setLettingAgent, personalStory, setPersonalStory, firstStage, setFirstStage }) => {


  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const sendData = async (data) => {
    try {
      const response = await axios.post(axiosURL, data);
      console.log(response.data);
    } catch (error) {
      console.error('Error sending data:', error.response);
    }
  };


    const [checking, setChecking] = useState(false)

useEffect(() => {
  if (postcode !== '') {
    fetchPostcodeDeets();
  }
}, [])

useEffect(() => {
    if (invalid) {
        if (!checking) {
            setChecking(true)
            setTimeout(() => {
                setChecking(false)
            }, [2000])
        }
    }
}, [postcode])

useEffect(() => {
    if (invalid && !checking) {
        console.log('checking: ', postcode)
        fetchPostcodeDeets();
    }
}, [checking])


const [nextBtnClicked, setNextBtnClicked] = useState(false)

useEffect(() => {
  if (constituency && nextBtnClicked) {
    setFirstStage(false)

    if (email || phone) {
    sendData({
      name: name,
      postcode: postcode ,
      lettingAgent: lettingAgent,
      personalStory: personalStory,
      phoneNumber: phone,
      currentRent: currentRent,
      newRent: newRent,
      email: email,
    })}
  }
}, [constituency])

useEffect(() => {
  if (invalid) {
    setNextBtnClicked(false)
  }
}, [postcode, invalid])

useEffect(() => {
  setNextBtnClicked(false)
}, [])

const nextBtn = () => {
  setNextBtnClicked(true)

  if (!constituency) {
    fetchPostcodeDeets();
  }

  if (constituency) {
  setFirstStage(false)

  if (email || phone) {
  sendData({
    name: name,
    postcode: postcode ,
    lettingAgent: lettingAgent,
    personalStory: personalStory,
    phoneNumber: phone,
    currentRent: currentRent,
    newRent: newRent,
    email: email,
  })}

   }
  ;}

        return (
          <div>
              <h1>SAVE RENT CONTROLS: WRITE TO THE SCOTTISH GOVERNMENT</h1>
      
              <p>
                
              Landlords, letting agents and developers across Scotland are trying to water down, delay and sabotage rent controls. We cannot - and will not - let them.
<br/><br/>
Scrapping rent controls would be a surrender to the landlord and developer lobby. It would be an enormous and unforgivable betrayal of renters and the working class across Scotland.
<br/><br/>

Use this quick and easy tool to <b>write to your MSPs and the Scottish Government ministers</b> responsible demanding they stand up for Scotland's tenants and keep their commitment to robust rent controls:</p>
      
  
      <Grid container alignItems={'center'} spacing={3}>
      
      <Grid item xs={12} sm={6}>
          <Grid container alignItems={'center'}>
            <Grid item xs={6}><b>Your name:</b></Grid>
            <Grid item xs={6}><Input 
            value={name}
            onChange={(e) => {e.preventDefault(); setName(e.target.value)}}
            fullWidth/></Grid>
          </Grid>
      
      </Grid>
      
      <Grid item xs={12} sm={6}>
          <Grid container alignItems={'center'}>
            <Grid item xs={6}><b>Your postcode:</b></Grid>
            <Grid item xs={6}><Input fullWidth 
            
            value={postcode}
            onBlur={() => fetchPostcodeDeets()}
            onChange={e => {setPostcode(e.target.value)}
          }
            />
            {invalid && <div
            style={{color: 'red', fontSize: '12px', textAlign: 'center'}}
            ><em>This doesn't look like a valid postcode.</em></div>}
            </Grid>
          </Grid>
      </Grid>
      
      
           {console.log(currentRent)}
      <Grid item xs={12} sm={6}>
          <Grid container alignItems={'center'}>
            <Grid item xs={6}><b>Are you a renter?</b></Grid>
            <Grid item xs={6}>
              
              <Select 
              value={currentRent}
              onChange={e => setCurrentRent(e.target.value)}
              fullWidth
              >

                <MenuItem value={"Yes"}>Yes</MenuItem>
                <MenuItem value={"No"}>No</MenuItem>

              </Select>
              
             </Grid>
          </Grid>  
      </Grid>
      
      <Grid item xs={12} sm={6}>
          <Grid container alignItems={'center'}>
            <Grid item xs={6}><b>Your letting agent:</b><br/><span style={{fontSize:'12px'}}><em>(if you have one)</em></span></Grid>
            <Grid item xs={6}><Input 
                  value={lettingAgent}
                  onChange={e => setLettingAgent(e.target.value)}
            fullWidth
      /></Grid>
          </Grid>  
      </Grid>
      
      
      
      <Grid item xs={12}>
          <Grid container alignItems={'center'}>
            <Grid item xs={12}><b>Say in your own words why rent controls are so important to you:</b>
            <br/><span style={{fontSize:'12px'}}>Your message will be included in the email to your MSPs. If you feel that the high cost of housing has hit you disproportionately because you are a migrant, parent, woman or person with disabilities, it would be powerful to highlight that too:</span></Grid>
            <Grid item xs={12} sx={{marginTop: '5px'}}><TextField fullWidth
            multiline rows={3} 
            value={personalStory}
            onChange={e => setPersonalStory(e.target.value)}
      /></Grid>
          </Grid>  
      
 


      <Grid item xs={12} sx={{marginTop: '5px'}}>
          <Grid container alignItems={'center'} spacing={1}>
            <Grid item xs={12}><b>Your details:</b><br/><span style={{fontSize:'12px'}}>This is optional, but filling it out will allow Living Rent to reach out. It will not be shared with anyone else. Only fill it out if you're happy to be contacted.</span></Grid>
            
            
            <Grid item xs={12} md={6}>
              <TextField 
                  value={email}
                  label="Email Address"
                  onChange={e => setEmail(e.target.value)}
                  size="small"
                  fullWidth
                  /></Grid>
            <Grid item xs={12} md={6}>
              <TextField 
                  value={phone}
                  label="Phone number"
                  onChange={e => setPhone(e.target.value)}
                  size="small"
                  fullWidth
                  /></Grid>

          </Grid>
          </Grid> 
      
      </Grid>
      </Grid>
      
      
      <Grid container justifyContent={'space-around'} sx={{marginTop: '20px'}}>
      <Grid item xs={6}>
      
      
      </Grid>
        <Grid item xs={6}>
      
      <Button
      sx={{...BtnStyleSmall, float:  'right'}}
      onClick={() => nextBtn()}
      disabled={!currentRent || !postcode || !name || !personalStory || invalid || nextBtnClicked}
      >NEXT</Button>
      
        </Grid>
      </Grid>
  </div>)    
      
}