import React, {useState, useEffect} from 'react'
import { SendModal } from '../../Components/SendModal'
import { useMediaQuery, Button, Grid, Input, InputAdornment, TextField, FormLabel, Paper, Chip, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { BtnStyle, BtnStyleSmall } from '../../Shared';
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import {msps} from '../../MSPs'
import {regions} from '../../REGIONS'
import { Frame1 } from './WriteComponents/Frame1';
import { Frame2 } from './WriteComponents/Frame2'

import { useSelector, useDispatch } from 'react-redux';

import {
  setCurrentRent,
  setNewRent,
  setPostcode,
  setName,
  setLettingAgent,
  setPersonalStory,
} from '../../Redux/rentSlice';


const Write = ({setValue}) => {

  const {currentRent, newRent, postcode, name, lettingAgent, personalStory} = useSelector((state) => state.rent);
  const dispatch = useDispatch();

  const [firstStage, setFirstStage] = useState(true)

//inputs
const updateCurrentRent = (rent) => dispatch(setCurrentRent(rent));
const updateNewRent = (rent) => dispatch(setNewRent(rent));
const updatePostcode = (code) => dispatch(setPostcode(code));
const updateName = (newName) => dispatch(setName(newName));
const updateLettingAgent = (agent) => dispatch(setLettingAgent(agent));
const updatePersonalStory = (story) => dispatch(setPersonalStory(story));


  const Mobile = useMediaQuery("(max-width:900px)");
  const Width500 = useMediaQuery("(max-width:500px)");


//postcode logic
const [gotPostcode, setGotPostcode] = useState(false);

const [constituency, setConstituency] = useState(null);
const [region, setRegion] = useState(null);
const [constMSPs, setConstMSPs] = useState([]);

const [invalid, setInvalid] = useState(false);


const fetchPostcodeDeets = async () => {
  try {
    const response = await fetch(
      `https://api.postcodes.io/scotland/postcodes/${postcode}`
    );

    const data = await response.json();
    invalid && setInvalid(false);
    setConstituency(data.result.scottish_parliamentary_constituency);
  } catch {
    setInvalid(true);
    setConstMSPs([])
    setConstituency(null)
    setRegion(null)
    console.log("invalid postcode");
  }
};

useEffect(() => {
  if (constituency) {
    setRegion(
      regions.filter((region) => region.constituency == constituency)[0]
        .region
    );
  }
}, [constituency]);

useEffect(() => {
  setConstMSPs(
    [
      {name: "John Swinney", email: "firstminister@gov.scot", party: "First Minister", handle: "@JohnSwinney"},
      {name: "Shirley-Anne Somerville", email: "CabSecforSJ@gov.scot", party: "Cabinet Secretary for Social Justice", handle: "@ShonaRobison"},
      {name: "Paul McLennan", email: "MinisterforHousing@gov.scot", party: "Minister for Housing", handle: "@PaulMcLennan7"},
    ...msps.filter(
      (msp) => msp.constituency == constituency || msp.constituency == region
    )]
  );
}, [region]);
console.log(constMSPs)

  const [emailing, setEmailing] = useState([]);
  const [notEmailing, setNotEmailing] = useState([]);


  useEffect(() => {
    if (constMSPs != emailing) {
      setEmailing(constMSPs)}
  }, [constMSPs])




    const channel = "Email"

   

  return (
    <div>
  {firstStage ? 
       <Frame1
       name={name}
       setName={updateName}  // Use the renamed dispatch function
       postcode={postcode}
       setPostcode={updatePostcode}  // Use the renamed dispatch function
       currentRent={currentRent}
       setCurrentRent={updateCurrentRent}  // Use the renamed dispatch function
       invalid={invalid}
       newRent={newRent}
       constituency={constituency}
       setNewRent={updateNewRent}  // Use the renamed dispatch function
       lettingAgent={lettingAgent}
       setLettingAgent={updateLettingAgent}  // Use the renamed dispatch function
       personalStory={personalStory}
       setPersonalStory={updatePersonalStory}  // Use the renamed dispatch function
       setFirstStage={setFirstStage}
       fetchPostcodeDeets={fetchPostcodeDeets}
     />
  : 
  <Frame2
  emailing={emailing}
  setEmailing={setEmailing}
  notEmailing={notEmailing}
  setNotEmailing={setNotEmailing}
  setFirstStage={setFirstStage}

  setValue={setValue}

  name={name}
  postcode={postcode}
  currentRent={currentRent}
  newRent={newRent}
  lettingAgent={lettingAgent}
  personalStory={personalStory}

/>

  }

    </div>
  )
}

export default Write