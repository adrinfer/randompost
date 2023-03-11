import * as React from 'react'
import { styled } from '@mui/material/styles'
import Toolbar from '@mui/material/Toolbar'
import { AppBar, Box, TextField } from '@mui/material'
import Fab from '@mui/material/Fab'
import AddIcon from '@mui/icons-material/Add'
import Button from '@mui/material/Button'
import Fade from '@mui/material/Fade'
import Paper from '@mui/material/Paper'
import Popper from '@mui/material/Popper'
import Typography from '@mui/material/Typography'
import ClickAwayListener from '@mui/base/ClickAwayListener';

const StyledFab = styled(Fab)({
  position: 'absolute',
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: '0 auto'
})

function FooterBar (props) {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [open, setOpen] = React.useState(false)

  const handleAddClick = () => e => {
    setOpen(true)
    setAnchorEl(e.currentTarget)
  }

  return (
    <React.Fragment>
      <Popper open={open} anchorEl={anchorEl} placement='top' transition >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper style={{ marginBotton: '200px' }}>
              <TextField
                id="outlined-multiline-flexible"
                label="Multiline"
                multiline
                maxRows={4}
                style={{ minWidth: '300px', maxWidth: '400px' }}
              />

            </Paper>

          </Fade>
        )}
      </Popper>
      <AppBar sx={{ top: 'auto', bottom: 0, height: 40 }}>
        <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <StyledFab onClick={handleAddClick()} color="secondary" aria-label="add">
            <AddIcon />
          </StyledFab>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  )
}

export default FooterBar
