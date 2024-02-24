import React from 'react'
import Grid from '@mui/material/Grid';
import GeneralInfoForm from './GeneralInfoForm';
import ProfileCardWidget from './ProfileCardWidget';
import RecentBooking from './RecentBooking';
const Profile = ()=> {
    return (
        <div style={{display: 'flex', marginTop: '5%'}}>
            {/* <h1>Profile</h1> */}
            <Grid container spacing={1} >
                <Grid item xs={8}  style={{minWidth: '500px'}}>
                    {/* <Item>xs=8</Item> */}
                    <GeneralInfoForm/>
                </Grid>
                <Grid item xs={4}  style={{minWidth: '400px'}}>
                    {/* <Item>xs=4</Item> */}
                    <Grid container direction="column" justifyContent="center" alignItems="center">
                        <Grid item xs={8} >
                            {/* <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: '15%'}}> */}

                            <ProfileCardWidget/>
                            {/* </div> */}
                        </Grid>
                        <Grid item xs={8} style={{marginTop: '40px'}}>
                            <RecentBooking/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default Profile