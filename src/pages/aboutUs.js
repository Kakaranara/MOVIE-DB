import React from 'react';
import {
    Grid
} from '@material-ui/core';
import ProfileCards from '../components/profileCards'

class About extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            wahyu:{
                nama: 'Wahyu Koco Permadi',
                nim : '00000040112',
                img: {
                    src: '',
                    alt: 'img profile wahyu'
                },
                quote:'Saya suka masak piano dan coding'
            },
            veren: {
                nama : 'Veren Valensia',
                nim : '00000040923',
                img: {
                    src: '',
                    alt: 'img profile veren'
                },
                quote:'saya suka game fps dan juga koding saya jago'
            },
            vincent : {
                nama : 'Vincent Christopher',
                nim : '00000040754',
                img: {
                    src: '',
                    alt: 'img profile vincent'
                },
                quote:'Semua Hal Tidak Akan Berjalan Dengan Lancar'
            },
            feiza: {
                nama: 'Feiza Joane',
                nim: '00000040118',
                img: {
                    src: '',
                    alt: 'img profile feiza'
                },
                quote:'saya suka bermusik dan juga suka masak'
            }
        };
    }
    
    render(){
        const user = this.state;
        const cardStyle = {
            marginBottom:'150px'
        }
        return(
            <div align="center" >
                <Grid container direction="column" justify="center" alignItems="center">
                    <Grid container item spacing={1} >
                        <Grid item md={6} style={cardStyle}>
                            <ProfileCards 
                            nama={user.wahyu.nama} 
                            nim={user.wahyu.nim} 
                            quote={user.wahyu.quote}
                            />
                        </Grid>
                        <Grid item md={6} style={cardStyle}>
                            <ProfileCards  
                            nama={user.veren.nama} 
                            nim={user.veren.nim} 
                            quote={user.veren.quote}
                            />
                        </Grid>
                    </Grid>
                    <Grid container item md spacing={1}>
                        <Grid item md={6} style={cardStyle}>
                            <ProfileCards 
                            nama={user.vincent.nama} 
                            nim={user.vincent.nim} 
                            quote={user.vincent.quote}
                            />
                        </Grid>
                        <Grid item md={6} style={cardStyle}>
                            <ProfileCards 
                            nama={user.feiza.nama} 
                            nim={user.feiza.nim} 
                            quote={user.feiza.quote}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default About;