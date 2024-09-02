import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { axiosURL } from '../axiosURL';
import { TextField, Button } from '@mui/material';
import { BtnStyleSmall } from '../Shared';

export const Data = () => {


    const [password, setPassword] = useState('')

        const [passwordCorrect, setPasswordCorrect] = useState(false)

    const [data, setData] = useState([]);

    const [tried, setTried] = useState(false)

    const fetchData = async () => {
        setTried(true)
        try {
            const response = await axios.post(`${axiosURL}/get`, {
                password: password
            });
            setData([...response.data.reverse()]);

            setPasswordCorrect(true)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    
    function convertJsonToCsv(jsonData) {
        if (jsonData.length === 0) return '';
      
        const headers = Object.keys(jsonData[0]).join(',');
        const rows = jsonData.map(row => Object.values(row).join(','));
        const csvData = [headers, ...rows].join('\n');
      
        return csvData;
      }
      
    function downloadCsv(data, filename = 'data.csv') {
        const csvData = convertJsonToCsv(data);
        const blob = new Blob([csvData], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
      
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
      
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      }
      


    if (!passwordCorrect) {
        return (
            <div style={{margin: '20px auto 0 auto', padding: '10px', borderRadius: '5px', backgroundColor: 'white', width: '90%', maxWidth: '600px'}}>
                <center>
                <h2>This page is password protected</h2>
                <br/>
                <TextField 
                onChange={e => setPassword(e.target.value)}
                type="password"
                value={password}
                size="small"
                />

<br/>                {tried && <>Incorrect password</>}
<br/>
                <Button style={BtnStyleSmall}
                onClick={fetchData}
                >ENTER</Button>
                </center>
            </div>
        )
    }



    return (
        <div style={{margin: '20px auto 0 auto', padding: '10px', borderRadius: '5px', backgroundColor: 'white', width: '95%'}}>
<center>
<Button sx={BtnStyleSmall} onClick={() => downloadCsv(data)}>Download as CSV</Button>
</center>

        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Postcode</th>
                    <th>Tenant?</th>
                    <th>Letting Agent</th>
                    <th>Personal Story</th>
                    <th>Phone Number</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {data.filter(item => !item.newRent).map((item, index) => (
                    <tr key={index}>
                        <td>{item.name}</td>
                        <td>{item.postcode}</td>
                        <td>{item.currentRent}</td>
                        <td>{item.lettingAgent}</td>
                        <td>{item.personalStory}</td>
                        <td>{item.phoneNumber}</td>
                        <td>{item.email}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
    );
    };
