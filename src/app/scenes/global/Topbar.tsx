import React from 'react'
import { useContext } from 'react'
import {Box,  IconButton, useTheme} from "@mui/material"
import InputBase from "@mui/material/InputBase"
import { ColorModeContext, tokens } from '@/app/theme'
import LightModeOutLinedIcon from "@mui/icons-material/LightModeOutlined"
import DarkModeOutLinedIcon from "@mui/icons-material/DarkModeOutlined"
import Notifications from "@mui/icons-material/NotificationsOutlined"
import SettingsOutLinedIcon from "@mui/icons-material/SettingsOutlined"
import PersonOutLinedIcon from "@mui/icons-material/PersonOutlined"
import Searchcon from "@mui/icons-material/Search"
import Search from '@mui/icons-material/Search'

const Topbar = () => {
  const theme = useTheme()
   const colors = tokens(theme.palette.mode)
   const colorMode = useContext(ColorModeContext)
  return (
    <Box display='flex' justifyContent="space-between" p={2}>
    {/* search bar */}
    <Box display="flex" backgroundColor= {colors.primary[400]}
    borderRadius="3px">
      <InputBase sx={{ml: 2, flex: 1}} placeholder='Search' />
     <IconButton type="button" sx={{p:1}}>
      <Search />
     </IconButton>
    </Box>
     {/* icons */}
    <Box display="flex">
    <IconButton onClick={colorMode.toggleColorMode}>
      {theme.palette.mode === "dark" ? (
      <LightModeOutLinedIcon />
      ) : (<DarkModeOutLinedIcon/>)}
      
    </IconButton>
    <IconButton>
      <Notifications />
    </IconButton>
    <IconButton>
      <SettingsOutLinedIcon/>
    </IconButton>
    <IconButton>
      <PersonOutLinedIcon/>
    </IconButton>

    </Box>
    </Box>
  )
}

export default Topbar