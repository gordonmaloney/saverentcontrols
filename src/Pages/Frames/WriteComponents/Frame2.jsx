
import React, {useState, useEffect} from 'react'
import { SendModal } from '../../../Components/SendModal'
import { useMediaQuery, Button, Grid, Input, InputAdornment, TextField, FormLabel, Paper, Chip, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { BtnStyle, BtnStyleSmall } from '../../../Shared';
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export const Frame2 = ({ emailing, name, newRent, currentRent, lettingAgent, setValue, postcode, personalStory, setEmailing, notEmailing, setNotEmailing, setFirstStage }) => {
  


  const bcc = "contact@livingrent.org"



    const [sent, setSent] = useState(false)
    const [noClient, setNoClient] = useState(false)

    const [subject, setSubject] = useState("Don't let anyone sabotage rent controls")
  
    const [body, setBody] = useState(`Dear First Minister John Swinney, Shona Robison - Cabinet Secretary for Social Justice, Paul McLennan - Minister for Housing, and all of my MSPs,
    
My name is ${name}, and I live in ${postcode}. ${currentRent == "Yes" ? `I am a renter${lettingAgent && ` and I rent from ${lettingAgent}`}.` : ""}

${personalStory}

My story, and thousands like it across the country, shows why a strong system of rent controls is so important. While landlords and developers are lobbying hard to protect their profits, I hope I can rely on you to stand up to them - and stand with tenants. Scrapping, delaying, or watering down rent controls would be an unforgivable betrayal of Scotland's renters. 

Will you support the provisions for rent controls in the upcoming Housing Bill?

Sincerely,
${name}`)
  

const Mobile = useMediaQuery("(max-width:900px)");

    //modals
    const [isSendOpen, setIsSendOpen] = useState(false);
    const onSendClose = () => {
      setIsSendOpen(false);
      setSent(false)
    };




const [newTemplate, setNewTemplate] = useState(``)
const channel = "Email"

const handleSend = (prop) => {

  //check for channel, compile everything

  if (channel == "Email" && prop !== "gmail" && prop !== "yahoo") {
    let sendLink = `mailto:${emailing.map(
      (targ) => targ.email + `,`
    )}?subject=${encodeURIComponent(subject)}&bcc=${bcc ? bcc : ""}&body=${encodeURIComponent(
      body
    )}`;

    window.open(sendLink);
  }

  

  if (channel == "Email" && prop == "gmail") {
    let sendLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailing.map(
      (targ) => targ.email + `,`
    )}&su=${encodeURIComponent(subject)}&bcc=${bcc ? bcc : ""}&body=${encodeURIComponent(
      body
    )}`;
    window.open(sendLink);
  }



  if (channel == "Email" && prop == "yahoo") {
    let sendLink = `http://compose.mail.yahoo.com/?To=${emailing.map(
      (targ) => targ.email + `,`
    )}&Subject=${encodeURIComponent(subject)}&bcc=${bcc ? bcc : ""}&Body=${encodeURIComponent(
      body.replace("%", "%25").replace(/\n/g, "%0A") + "%0A%0A"
    )}`;
    window.open(sendLink);
  }


  setTimeout(() => {
    setSent(true)
  }, [2000])


  //onSendClose();

//  setIsShareOpen(true);


};



const tweetMSPs = () => {
    let sendLink = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`Hey @JohnSwinney, @ShonaRobison and @PaulMcLennan7!
    git add README.mdTenants across Scotland are suffering the brunt of the housing emergency. Profit seeking landlords & developers are trying to water down and sabotage rent controls. Will you stand up for scotland's tenants? #SaveRentControls`)}`;

    const width = 550;
    const height = 400;
    const left = window.innerWidth / 2 - width / 2;
    const top = window.innerHeight / 2 - height / 2;

    const windowFeatures = `width=${width},height=${height},left=${left},top=${top}`;

    window.open(sendLink, "twitter", windowFeatures);
   
   
    setTimeout(() => {
        setSent(true)
      }, [1000])
}






    return (

        <div style={{width: '100%'}}>
            <h1>WRITE TO YOUR MSPs</h1>
    
    <p>There is a draft email below, based on your answers. You can personalise it however you like, and then hit ‘send’ when you’re ready.
</p>

<FormLabel sx={{ marginLeft: "2.5%", fontSize: '12px'}}>To:</FormLabel>
          <Paper
            sx={{
              width: "93%",
              margin: "1px 2.5% 7px 2.5%",
              padding: "5px",
              paddingY: "10px",
            }}
          >
  {emailing.map((msp, index) => (
              <Chip
                size="small"
                label={msp.name + " - " + msp.party}
                variant="outlined"
                key={index}
                sx={{ backgroundColor: "white", margin: "2px" }}
                onClick={() => {
                  setEmailing((prev) =>
                    prev.filter((prevMSP) => prevMSP.name !== msp.name)
                  );
                  setNotEmailing((prev) => [...prev, msp]);
                }}
                onDelete={() => {
                  setEmailing((prev) =>
                    prev.filter((prevMSP) => prevMSP.name !== msp.name)
                  );
                  setNotEmailing((prev) => [...prev, msp]);
                }}
              ></Chip>
            ))}
           
            { emailing.length == 0 && (
                <div style={{ color: "red", marginLeft: "10px" }}>
                  You need to pick at least one recipient!
                </div>
              )}

          </Paper>




              <div
                style={{
                  width: "95%",
                  marginLeft: "2.5%",
                  marginBottom: "5px",
                  display: notEmailing.length < 1 ? 'none' : 'block'
                }}
              >
                <Accordion
                  className="notEmailing"
                  sx={{
                    backgroundColor: "rgba(0, 66, 25, 0.9)",
                    borderRadius: "5px !important",
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="details"
                    sx={{
                      backgroundColor: "white",
                      borderRadius: "5px 5px 0 0",
                    }}
                  >
                    <div
                      style={{
                        color: "black",
                      }}
                    >
                      MSPs you
                      aren't emailing:
                    </div>
                  </AccordionSummary>
                  <AccordionDetails
                    sx={{
                      paddingY: "10px",
                      paddingX: "10px",
                      marginTop: "-10px",
                      backgroundColor: "white",
                      borderRadius: "0 0 5px 5px",
                    }}
                  >
                    <div style={{ marginLeft: "5px" }}>
                      <p style={{fontSize:  '12px', lineHeight: '14px', margin: '0'}}>These are the MSPs not
                      included in your email. If you'd like to include them,
                      just tap their name.</p>
                    </div>
                    {notEmailing.map((msp, index) => (
                      <Chip
                        size="small"
                        key={index}
                        label={msp.name + " - " + msp.party}
                        variant="outlined"
                        sx={{ backgroundColor: "white", margin: "2px" }}
                        deleteIcon={
                          <AddCircleIcon style={{ fontSize: "large" }} />
                        }
                        onDelete={() => {
                          setNotEmailing((prev) =>
                            prev.filter((prevMSP) => prevMSP.name !== msp.name)
                          );
                          setEmailing((prev) => [...prev, msp]);
                        }}
                        onClick={() => {
                          setNotEmailing((prev) =>
                            prev.filter((prevMSP) => prevMSP.name !== msp.name)
                          );
                          setEmailing((prev) => [...prev, msp]);
                        }}
                      ></Chip>
                    ))}
                  </AccordionDetails>
                </Accordion>


              </div>
              <p style={{fontSize: '12px',lineHeight: '14px', margin: 0, marginTop: '2px', marginBottom: '-10px'}}>   Everyone in Scotland has multiple MSPs. By default, this tool targets the two government ministers responsible for housing, and all of your MSPs. But if you'd like, you can choose which ones you'd like to message.</p>



            <br />
          <FormLabel sx={{ marginLeft: "2.5%", fontSize: '12px'}}>Subject:</FormLabel>
          <TextField 
          size="small"
                sx={{
                    width: "95%",
                    margin: "1px 2.5% 7px 2.5%",
                  }}
                  value={subject}
          />


<br />
          <FormLabel sx={{ marginLeft: "2.5%", fontSize: '12px'}}>Body:</FormLabel>
          <TextField 
          size="small"
                sx={{
                    width: "95%",
                    margin: "1px 2.5% 7px 2.5%",
                  }}
                  multiline
                  rows={8}
                  value={body}
          />


<Grid container justifyContent={'space-around'} sx={{marginTop: '20px'}}>
    <Grid item xs={6}>
    
    <Button
    sx={{...BtnStyleSmall, float:  'left'}}
    onClick={() => setFirstStage(true)}
    >BACK</Button>
    </Grid>
      <Grid item xs={6}>
    
    <Button
    sx={{...BtnStyleSmall, float:  'right'}}
    onClick={() => setIsSendOpen(true)}
    >SEND</Button>
    
      </Grid>
    </Grid>










    <SendModal
        isOpen={isSendOpen}
        onClose={() => {onSendClose(); setNoClient(false)}}
        title={!sent ? 'Send your message' : 'What now?'}
        body={noClient ? <p>
        If you don't use an email app, or the buttons on the last page didn't work, you can use these buttons to copy and paste the recipients, subject, and body of your email to whatever client you use:
        <br/><br/>

        <Grid container spacing={1} justifyContent={'center'} alignContent={'center'}>
            <Grid item sm={4} xs={12}>
              <center>
            <Button sx={BtnStyleSmall} 
          onClick={() => navigator.clipboard.writeText(
            `${emailing.map(
              (targ) => targ.email + `,`) }  ${bcc} `
          )}
    >
          Copy recipients</Button></center>
            </Grid>

            <Grid item sm={4} xs={12}>  
            <center> <Button sx={BtnStyleSmall} 
          onClick={() => navigator.clipboard.writeText(
            subject
          )}
    >
          Copy subject</Button></center> 
</Grid>
            <Grid item sm={4} xs={12}>  
            
            <center> <Button sx={BtnStyleSmall} 
          onClick={() => navigator.clipboard.writeText(
              body
                   )}
    >
          Copy email body</Button></center>
</Grid>
        </Grid>
     
      
        
        </p>  
        : !sent ?
          <p>
            You're almost there. Press the button below to open your{" "}
            {channel == "Email" ? "email" : "Twitter"} client, and the message
            will be pre-filled in there for you. Then just hit send in there to
            fire it off.
            <br />{" "}
            <center>
              <Button
                onClick={() => handleSend()}
                style={{ ...BtnStyle, marginTop: "5px" }}
              >
                Send {channel == "Email" ? "email" : "tweet"}
              </Button>
            </center>
            {!Mobile && channel == "Email" && (
              <>
                <br />
                If you use Gmail or Yahoo Mail, you can use these button to send
                the message from your browser:
                <br />
                <div
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  <Button
                    onClick={() => handleSend("gmail")}
                    style={{ ...BtnStyle, marginTop: "5px" }}
                  >
                    Send via Gmail
                  </Button>
                  <Button
                    onClick={() => handleSend("yahoo")}
                    style={{ ...BtnStyle, marginTop: "5px" }}
                  >
                    Send via Yahoo
                  </Button>
                </div>{" "}
              </>
            )}
<br/>
<span style={{fontSize: '12px'}}><em>Not working? <span onClick={() => setNoClient(true)}><u>Copy & paste instead.</u></span></em></span>
<br/>
<br/>
If you'd prefer, you can send a message to your MSPs on Twitter/X instead:<br/>
<center>
<Button
                    style={{ ...BtnStyle, marginTop: "5px" }}
                    onClick={() =>  tweetMSPs()}
                >
                    Tweet your message

                </Button></center>
          </p> : <p>

            Nice one. But what now?<br/><br />

            If you haven't already, you can send your MSPs a message on Twitter/X, using this button:
<center>
                <Button
                    style={{ ...BtnStyle, marginTop: "5px" }}
                    onClick={() =>  tweetMSPs()}
                >
                    Tweet your MSPs 
                </Button></center>

<br/>
And if you are not already a member of Living Rent, then now is the time to join. You can do that here:                <center>
                <Button
                    style={{ ...BtnStyle, marginTop: "5px" }}
                    href="http://www.livingrent.org/join"
                    target="_blank"
                >
                    Join LIVING RENT
                </Button></center>


          </p>
        }
      />



        </div>





      )
}