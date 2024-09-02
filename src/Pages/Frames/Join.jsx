import { Button } from '@mui/material'
import React from 'react'
import { BtnStyle, BtnStyleSmall } from '../../Shared'

const Join = () => {
  return (
    <div>
      <h1 >JOIN LIVING RENT</h1>

<p>
      You've contested your rent increase, but the rent is still far too high, and too many tenants still face mould, disrepair, and the constant threat of eviction. It’s clear that working on your own won’t solve these problems.
      <br/><br/>
<b>But you’re not alone.</b>
<br/><br/>
Across Scotland, tenants are working together as members of Living Rent to create the housing system Scotland needs. We organise collectively to secure material improvements to our daily lives and put power back where it belongs: in the hands of ordinary people. There’s still so much to do, but in the last few years we have won:
<ul>
  <li>
A new housing bill which includes <b>rent controls</b>, the right to redecorate, and the right to own pets</li>
<li>A nationwide 18-month <b>ban on evictions</b></li>
<li><b>A freeze on rents</b> during the cost of living crisis</li>
<li><b>Banning no-fault evictions</b> and abolishing insecure 'short-assured tenancies'</li>
<li><b>Emergency protections</b> for tenants during Covid</li>
<li>New laws to <b>regulate short-term lets</b></li>
<li><b>Millions of pounds in repairs and compensation</b> for tenants</li>

</ul>

You’ve taken the first step, now take the next one. Join Living Rent now:
</p>


<center>
<Button style={BtnStyleSmall} href="http://livingrent.org/join" target="_blank" >JOIN NOW</Button></center>
    </div>
  )
}

export default Join