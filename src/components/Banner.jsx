import React from 'react';
import { Grid, Container } from '@material-ui/core';
import '../styles/banner.css';
import Jatin from '../assets/images/jatin.png';


import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export const Banner = () => (
    <div className="banner-home">
    <AppBar position="static">
        <Toolbar variant="dense"
            style={{ justifyContent: "center" }} >
            <Typography
                variant="h6"
                color="inherit">
                Portfolio App
                </Typography>
        </Toolbar>
    </AppBar>
    <Grid
        container
        direction="row"
        className="banner-main"
    >
        <Grid
            xs={6}
            sm={4}
        >
            <Grid
                container
                className="intro-wave"
            >

                <div
                >
                    <div className="wave--text">

                        Hello 👋, This is Jatin
                    </div>

                </div>

                    <div className="wave--text designation text--0">
                        Electronics Engineering student, <br />
            Pursuing B. E. Electronics from K. J. Somaiya <br />Institute of Engineering and Information Technology<br />
                    </div>


            </Grid>
        </Grid>
        <Grid
            xs={6}
            sm={4}
            className="jatin-image"
        >
            <img src={Jatin} alt="Jatin" />
        </Grid>
        <Grid
            xs={12}
            sm={4}
            className="about-me"
        >
        <div className="wave--text designation">
            <h1>About Me</h1>
            Tech enthusiast with <br />
            expertise in RF systems, Antennas and Embedded systems <br />
            licensed HAM Radio Operator <br /> with callsign VU3FPK;<br />
            Head of HAM Team, KJSIEIT
                    </div>
        </Grid>
    </Grid>
    </div>
);