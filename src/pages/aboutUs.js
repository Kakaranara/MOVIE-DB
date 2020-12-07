import React from 'react';
import {
    Grid, Box
} from '@material-ui/core';
import ProfileCards from '../components/profileCards'

class About extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            wahyu:{
                nama: 'Wahyu Koco Permadi',
                nim : '00000040112',
            },
            veren: {
                nama : 'Veren Valensia',
                nim : '00000040923',
            },
            vincent : {
                nama : 'Vincent Christopher',
                nim : '00000040754'
            },
            feiza: {
                nama: 'Feiza Joane',
                nim: '00000040118',
            }
        };
    }
    
    render(){
        const user = this.state;
        return(
            <Box textAlign="center">
                <Grid container direction="column" justify="center" alignItems="center">
                    <Grid container item md spacing={1}>
                        <Grid item md={6}>
                            <ProfileCards nama={user.wahyu.nama} nim={user.wahyu.nim}/>
                        </Grid>
                        <Grid item md={6}>
                            <ProfileCards  nama={user.veren.nama} nim={user.veren.nim}/>
                        </Grid>
                    </Grid>
                    <Grid container item md spacing={1}>
                        <Grid item md={6}>
                            <ProfileCards nama={user.vincent.nama} nim={user.vincent.nim}/>
                        </Grid>
                        <Grid item md={6}>
                            <ProfileCards nama={user.feiza.nama} nim={user.feiza.nim}/>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        );
    }
}

export default About;