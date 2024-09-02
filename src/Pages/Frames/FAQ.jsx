import { Grid, Button, Input } from '@mui/material'
import React, {useState} from 'react'
import InputAdornment from '@mui/material/InputAdornment';
import { BtnStyle, BtnStyleSmall } from '../../Shared';

const FAQ = () => {

  const [firstStage, setFirstStage] = useState(true)

  const [currentRent, setCurrentRent] = useState('')
  const [newRent, setNewRent] = useState('')


  if (firstStage) {
  return (
    <div>
      <h1>CONTEST YOUR RENT HIKE</h1>


<p>You can contest rent increases through the government’s ‘rent adjudication’ system. This page will walk you through making a successful application.
<br/><br/>
<b>Note:</b> there is an absolute cap of <b>12%</b> on increases. This doesn’t mean that increases of more than that are illegal, but it does mean that you are guaranteed at least a partial success if you contest an increase of more than that through rent adjudication.
<br/><br/>
To get started, answer these two quick questions:</p>


<Grid container>

<Grid item xs={12}>

<Grid container alignItems={'center'}>
<Grid item xs={6}>  <b>What is your current rent?</b>
</Grid>
<Grid item  xs={6}><Input fullWidth size="small" id='currentRent'
value={currentRent}
onChange={e => setCurrentRent(e.target.value)}
type="number"
startAdornment={
  <InputAdornment position="start">£</InputAdornment>
}
endAdornment={
  <InputAdornment position="end">
    /month
  </InputAdornment>
}
/></Grid>
</Grid>


<Grid item xs={12} sx={{marginTop: '20px'}}>

<Grid container alignItems={'center'}>
<Grid item xs={6}>  <b>What is the proposed new rent?</b>
</Grid>
<Grid item  xs={6}><Input fullWidth size="small" id='newRent'
value={newRent}
onChange={e => setNewRent(e.target.value)}

type="number"

startAdornment={
  <InputAdornment position="start">£</InputAdornment>
}
endAdornment={
  <InputAdornment position="end">
    /month
  </InputAdornment>
}
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
onClick={() => setFirstStage(!firstStage)}
disabled={!currentRent || !newRent}
>Next</Button>

  </Grid>
</Grid>
    </div>
  )
}


  const Percentage = ((newRent - currentRent) / currentRent * 100).toFixed(0)

  if (!firstStage) {
    return (
      <div>
        
        <h1>CONTEST YOUR RENT HIKE</h1>

        <div
        style={{width: '90%', textAlign: 'center', margin: '20px auto 0 auto', border: '1px solid black', padding: '5px 6px'}}
        ><p style={{margin: 0, fontSize: 'large'}}>Your rent hike is <u>{Percentage}%</u><br/>
        That would mean paying £{(newRent - currentRent)*12} more every year.</p></div>

        {
          Percentage > 12 && <p>
            This is more than 12%, and so you are <b>guaranteed to be successful if you challenge it</b>. However, you must challenge it within 21 days of being served notice: it is not unlawful to serve an increase of more than 12%, and the onus is on the tenants to contest it. 
          </p>


        }

        <p>
        You can contest this increase through the rent adjudication process.
        </p>
        
        <p>
        The process is <em>not</em> a silver bullet, and in many ways is deeply flawed and insufficient, but there will be cases where it is a useful tool for tenants to resist a rent increase.
</p>


<hr />

        <h2>How does it work?</h2>
  <p>The rough process for rent adjudication is this:</p>
  <ul>
    <li>Appeal increase: tenants have 21 days from receipt of an increase to appeal an increase. This is done on a government webpage <a href="https://www.mygov.scot/apply-about-rent" target="_blank">here.</a> The form is fairly long but it doesn’t require any knowledge that you won’t have easy access to. The Rent Officer deciding the case may want to visit the property. You may reschedule the visit exactly once.</li>
    <li>Judgement: the rent adjudication service aims to make a decision within 40 days of the application. They will first issue a provisional order stating their decision. Both the tenant and landlord may ask the Rent Officer to reconsider the amount within 14 days of the provisional order. After that the final order will be issued.</li>
    <li>Appeal decision: decisions can be further appealed at the First-tier Tribunal but if the circumstances are the same then it’s unlikely this will be successful. This is only worth doing if you can demonstrate the Rent Officer made an error in calculating the judgement amount. You must apply for an appeal within 14 days of the final order.</li>
  </ul>


  <h2>How will the rent be decided?</h2>
  <p>The rent will be set at the lowest of the following three options:</p>
  <ul>
    <li>The rent proposed by the landlord.</li>
    <li>The “open market rent” i.e. the average rent of similar properties in the same postcode.</li>
    <li>The “permitted rent" which is determined by <a href="https://www.gov.scot/publications/cost-of-living-rent-and-eviction/pages/rent-adjudiction/" target="_blank">a formula</a> based on the difference between the current rent and the open market rent.</li>
  </ul>
  <p>The Scottish Government have <a href="https://rentcalculator.service.gov.scot/" target="_blank">an illustrative calculator</a> you can use to see what the rent may be set to in different scenarios.</p>

  <h2>Is there a threshold on the increase needed to apply?</h2>
  <p>No, any rent increase to an existing private residential tenancy can be challenged. That being said, the smaller the increase, the more likely it will be upheld unless the tenant is already paying market rate or above.</p>

  <h2>What are the risks of applying? Could my rent be increased above what my landlord has proposed?</h2>
  <p>Under the new rules, there is very little risk to using this process. Previously, it was the case that the Rent Officer might increase the rent above what even the landlord wanted, but under the new rules (and thanks to Living Rent’s campaigning) this cannot happen. The new worst-case scenario is an increase of 12% and this will happen only if the market rate is found to be at least 24% higher than the current rent.</p>

  <h2>Who can apply for rent adjudication?</h2>
  <p>Anyone in a Private Residential Tenancy who receives a rent increase notice may use this process, provided that the increase applies to an existing tenancy.</p>
  <p>Unfortunately, this excludes people in the following situations:</p>
  <ul>
    <li>Social housing tenants.</li>
    <li>Council tenants.</li>
    <li>People in private tenancies that are not Private Residential Tenancies. If you are in one of these tenancies, you may be able to apply for a <a href="https://housingandpropertychamber.scot/apply-tribunal/rent-terms-prescribed-property-costs" target="_blank">Rent Assessment</a>.</li>
    <li>People in Private Residential Tenancies that are joint tenancies where one flatmate has moved out and been replaced by another since this is considered a new tenancy rather than an existing one.</li>
  </ul>

  <h2>What if the rent adjudication decision is delayed beyond the proposed date of the rent increase? Will I have to pay the increased rent and then get a refund if the rent ends up being lowered?</h2>
  <p>This is a bit complicated. In this situation, you will not have to pay any increased amount until a decision is reached by either Rent Service Scotland or—in cases that were appealed—the First-tier Tribunal. However, your landlord will be owed the difference between the amount that you would have paid if you had started paying the new rent from the day that their proposed rent increase began and what you actually paid in that time. Here’s an illustrative example:</p>
  <p>You pay £500 per month in rent. On 1 April, your landlord sends a notice to increase it to £600 starting from 1 July. As this is a 20% increase, you apply to Rent Service Scotland. Unfortunately, they do not meet their 40-day service standard, and you do not get a decision until 15 August. They decide that the market rate for your flat is £530, so they set the new rent to that.</p>
  <p>Meanwhile, you paid the old rent of £500 in both July and August while awaiting the RSS decision. So in the end, you will not only owe your landlord £530 for September (and every month after) but you will also owe them a one-off payment of £60 since the rent adjudication decision applies retrospectively to your rent from July and August as well.</p>
  <p>Conversely, if the Rent Officer decided that the market rate for your home was actually £450 per month (so £50 less than your old rent), then your landlord would owe you a one-off payment of £100 for July and August.</p>




        <Grid container justifyContent={'space-around'} sx={{marginTop: '20px'}}>
<Grid item xs={6}>

<Button
sx={{...BtnStyleSmall, float:  'left'}}
onClick={() => setFirstStage(!firstStage)}
disabled={!currentRent || !newRent}
>BACK</Button>

</Grid>
  <Grid item xs={6}>

<Button
sx={{...BtnStyleSmall, float:  'right'}}
href="https://www.mygov.scot/apply-about-rent" target="_blank"

>BEGIN</Button>

  </Grid>
</Grid>

      </div>
    )
  }
}

export default FAQ