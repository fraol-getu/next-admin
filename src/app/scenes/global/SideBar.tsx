"use client"
import React, { useState } from 'react'
import {ProSidebar, Menu, MenuItem} from "react-pro-sidebar"
import  'react-pro-sidebar/dist/css/styles.css'
import {Box, IconButton, Typography, useTheme} from "@mui/material"
import Link from 'next/link'
import { tokens } from '@/app/theme'
import HomeOutLinedIcon from "@mui/icons-material/HomeOutlined"
import ContactsOutLinedIcon from "@mui/icons-material/ContactsOutlined"
import PeopleOutLinedIcon from "@mui/icons-material/PeopleOutlined"
import ReceiptOutLinedIcon from "@mui/icons-material/ReceiptOutlined"
import PersonOutLinedIcon from "@mui/icons-material/PersonOutlined"
import CalendarTodayOutLinedIcon from "@mui/icons-material/CalendarTodayOutlined"
import HelpOutLinedIcon from "@mui/icons-material/HelpOutlined"
import BarchartOutLinedIcon from "@mui/icons-material/BarchartOutlined"
import piechartOutLinedIcon from "@mui/icons-material/PieChartOutlined"
import TimeLineOutLinedIcon from "@mui/icons-material/TimelineOutlined"
import MenuOutLinedIcon from "@mui/icons-material/MenuOutlined"
import MapOutLinedIcon from "@mui/icons-material/MapOutlined"
import Image from 'next/image'
import User from '../../../../public/asset/user.jpg'
import PieChartOutlined from '@mui/icons-material/PieChartOutlined'
interface Tenuitem {
  title: string;
  href: string; // Assuming links are strings, but can be undefined
  icon: any; // Type for the icon component
  selected: string;
  setSelected: any; // Function to set selected item
}

const SideBar = () => {

  const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const [iscollapsed, setIsCollapsed] = useState(false)
    const [selected, setSelected] =  useState("Dashboard")
    
    
    const Item : React.FC<Tenuitem> =({title, href, icon, selected, setSelected}) => {
     const theme = useTheme()
     const colors = tokens(theme.palette.mode)
     return (
      <MenuItem 
      active={selected === title}
       style={{color: colors.gray[100]}}
       onClick={() => setSelected(title)}
       icon={icon}
      
      >
        <Typography>{title}</Typography>
        <Link href={href} />
      </MenuItem>
     )
    }
    return (
    <Box
    sx={{
      "& .pro-sidebar-inner": {
        background: `${colors.primary[400]} !important`
      },
      "& .pro-icon-wrapper" : {
        backgroundColor: "transparent !important"
      },
      "& .pro-inner-item" : {
        padding: "5px 35px 5px 20px !important"
      },
      "& .pro-inner-item:hover": {
        color : "#868dfb !important"
      },
     
      "& .pro-menu-item.active": {
        color: "#6870fa !important",
      },
    }}
    >
      <ProSidebar collapsed={iscollapsed}>
       <Menu  iconShape={"square"}>
     <MenuItem
     onClick={() => setIsCollapsed(!iscollapsed)}
     icon={iscollapsed ? <MenuOutLinedIcon /> : undefined}
     style={{
      margin: "10px 0 20px 0",
      color: colors.gray[500]
     }}
     >
      {!iscollapsed && (
     <Box
     display="flex"
     justifyContent="space-between"
     alignItems="center"
     ml= "15px"
   >
     <Typography variant='h5' color={colors.greenAccent[500]} > Admin</Typography>
     <IconButton onClick={() => setIsCollapsed(!iscollapsed)}>
      <MenuOutLinedIcon/>
     </IconButton>
     </Box>

      )}
    </MenuItem>
    {!iscollapsed && (
      <Box mb="25px">
      <Box display="flex" justifyContent="center" alignItems="center">
       <Image alt='profile-image' width={100} height={100} src={User}  style={{ cursor: "pointer", borderRadius: "50%" }} />
      </Box>
      <Box textAlign="center">
        <Typography
        variant='h2' color={colors.gray[100]}
        fontWeight='bold'
        sx={{m: "10px 0 0 0"}}>
          Fraol
        </Typography>
        <Typography variant='h5' color={colors.greenAccent[500]}>vp fancy admin</Typography>
      </Box>
      </Box>
    )}
    {/* menu items */}
    <Box paddingLeft={iscollapsed ? undefined : "10%"}>
    <Item
   title='Dahboard'
   href='/'
   icon={<HomeOutLinedIcon />}
   selected={selected}
   setSelected={setSelected}
   />
   <Typography
   variant="h6"
   color={colors.gray[300]}
   sx={{m: "15px 0px 5px 20px"}}
   >
    Data
   </Typography>
    <Item
   title='Manage Team'
   href={'/team'}
   icon={<PeopleOutLinedIcon />}
   selected={selected}
   setSelected={setSelected}
   />

<Item
   title='Contacts Information'
   href='/contacts'
   icon={<ContactsOutLinedIcon/>}
   selected={selected}
   setSelected={setSelected}
   />

<Item
   title='Invoices balances'
   href='/invoices'
   icon={<ReceiptOutLinedIcon />}
   selected={selected}
   setSelected={setSelected}
   />
   <Typography
   variant="h6"
   color={colors.gray[300]}
   sx={{m: "15px 0px 5px 20px"}}
   >
    Pages
   </Typography>

<Item
   title='Profie Form'
   href='/profile'
   icon={<PersonOutLinedIcon/>}
   selected={selected}
   setSelected={setSelected}
   />
    <Item
   title='Calendar'
   href='/calendar'
   icon={<CalendarTodayOutLinedIcon/>}
   selected={selected}
   setSelected={setSelected}
   />

<Item
   title='FAQ Page'
   href='/faq'
   icon={<HelpOutLinedIcon/>}
   selected={selected}
   setSelected={setSelected}
   />
   <Typography
   variant="h6"
   color={colors.gray[300]}
   sx={{m: "15px 0px 5px 20px"}}
   >
    Charts
   </Typography>

<Item
   title='Bar Chart'
   href='/bar'
   icon={<BarchartOutLinedIcon/>}
   selected={selected}
   setSelected={setSelected}
   />

<Item
   title='Pie  Chart'
   href='/pie'
   icon={<PieChartOutlined/>}
   selected={selected}
   setSelected={setSelected}
   />

<Item
   title='Line  Chart'
   href='/line'
   icon={<TimeLineOutLinedIcon/>}
   selected={selected}
   setSelected={setSelected}
   />

<Item
   title='Geography Chart'
   href='/geography'
   icon={<MapOutLinedIcon/>}
   selected={selected}
   setSelected={setSelected}
   />
    </Box>
       </Menu>
      </ProSidebar>
    

    </Box>
  )
}

export default SideBar