import React from 'react'
import {Typography, Box, useTheme} from '@mui/material'
import {tokens} from '../theme'
interface Headertype {
    title : string;
    subtitle: string;
}
const Header: React.FC<Headertype> = ({title, subtitle}) => {
 const theme = useTheme()
  const colors = tokens(theme.palette.mode)
    return (
    <Box mb="30px">
        <Typography
        variant='h2'
        color={colors.gray[100]}
        fontWeight='bold'
        sx={{mb : "5px"}}
        >{title}
        </Typography>
        <Typography variant='h5' color={colors.greenAccent[400]}>
         {subtitle}
        </Typography>

    </Box>
  )
}

export default Header