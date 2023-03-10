import * as React from 'react';
import { styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { AppBar, Box } from '@mui/material';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import logo from '../assets/pixil-frame-0.png'

const StyledFab = styled(Fab)({
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
});

function FooterBar (props) {

    return (
        <React.Fragment>
            <AppBar sx={{ top: 'auto', bottom: 0, height: 40 }}>
                <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <StyledFab color="secondary" aria-label="add">
                        <AddIcon />
                    </StyledFab>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
}



export default FooterBar;