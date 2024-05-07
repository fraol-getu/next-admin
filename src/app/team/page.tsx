import React from 'react'
import { tokens } from '../theme'
import { mockDataTeam } from'../Data/MockData'
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined'
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined'
import SecuirityOutlinedIcon from '@mui/icons-material/SecurityOutlined'
import {Box, useTheme, Typography} from '@mui/material'
import Header from '../components/Header'
import { DataGrid } from '@mui/x-data-grid'
const Manageteam = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const columns = [
   {field : "id", headerName:"Id"},
   {field : "name", headerName: "Name", flex: 1, cellClassName: "name-column--cell"},
   {field : "age", headerName: "Age",  type: "number" , headerAlign: "left", align: "left"},
   {field : "phone", headerName: "Phone Number",  flex: 1},
   {field : "email", headerName: "Email",  flex: 1},
   {field : "access", headerName: "Access",  flex: 1,
    renderCell: ({ row :  { access}}) => {
      return (<Box
      width='60%'
      m="0 auto"
      p='5px'
      display='flex'
      justifyContent="center"
      backgroundColor={
        access === "admin " ? colors.greenAccent[600]
        :colors.greenAccent[700]
      }
      borderRadius="4px"
      >
        {access === "admin"&& <AdminPanelSettingsOutlinedIcon/>}
        {access === "manager"&& <SecuirityOutlinedIcon/>}
        {access === "user"&& <LockOpenOutlinedIcon/>}
        <Typography color={colors.gray[100]} sx={{ml: "5px"}}>
        {access}
        </Typography>
      </Box>
      )
    }


   },


  ]
  return (
    <Box>
      <Box>
        <Header title='Team' subtitle="Managing the Team members " />
      </Box>
      <DataGrid rows={mockDataTeam} columns={columns}/>
    </Box>
  )
}

export default Manageteam