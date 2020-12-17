import React from 'react';
import {
    Grid
} from '@material-ui/core';
import ProfileCards from '../components/profileCards'
import fotoVeren from '../assets/veren.png'
import fotoFeiza from '../assets/feiza.png'
import fotoKoco  from '../assets/koco.jpg'
import fotoVincent from '../assets/vincent.jpg'

class About extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            wahyu:{
                nama: 'Wahyu Koco Permadi',
                nim : '00000040112',
                img: {
                    src: fotoKoco,
                    alt: 'img profile wahyu'
                },
                quote:'Yang paling penting itu jadi diri sendiri, jgn dengerin kata negatif orang. sama sekali gak guna.'
            },
            veren: {
                nama : 'Veren Valensia',
                nim : '00000040923',
                img: {
                    src: fotoVeren,
                    alt: 'img profile veren'
                },
                quote:"It was nice when I acted like an adult, but I don't wanna change, even if they say I'm immature."
            },
            vincent : {
                nama : 'Vincent Christopher',
                nim : '00000040754',
                img: {
                    src: fotoVincent,
                    alt: 'img profile vincent'
                },
                quote:'Semua Hal Tidak Akan Berjalan Dengan Lancar'
            },
            feiza: {
                nama: 'Feiza Joane',
                nim: '00000040118',
                img: {
                    src: fotoFeiza,
                    alt: 'img profile feiza'
                },
                quote:"Here's a fact: Video Games Don't make us VIOLENT, LAG does :)"
            }
        };
    }
    
// err

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
                            gambar={user.wahyu.img.src}
                            lod={user.wahyu.img.alt}
                            />
                        </Grid>
                        <Grid item md={6} style={cardStyle}>
                            <ProfileCards  
                            nama={user.veren.nama} 
                            nim={user.veren.nim} 
                            quote={user.veren.quote}
                            gambar={user.veren.img.src}
                            lod={user.veren.img.alt}                        
                            />
                        </Grid>
                    </Grid>
                    <Grid container item md spacing={1}>
                        <Grid item md={6} style={cardStyle}>
                            <ProfileCards 
                            nama={user.vincent.nama} 
                            nim={user.vincent.nim} 
                            quote={user.vincent.quote}
                            gambar={user.vincent.img.src}
                            lod={user.vincent.img.alt}
                            />
                        </Grid>
                        <Grid item md={6} style={cardStyle}>
                            <ProfileCards 
                            nama={user.feiza.nama} 
                            nim={user.feiza.nim} 
                            quote={user.feiza.quote}
                            gambar={user.feiza.img.src}
                            lod={user.feiza.img.alt}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default About;