import { useMediaQuery, useTheme } from "@mui/material";

const useCurrentScreen = () =>{
  const theme = useTheme()

  const mobile = useMediaQuery(theme.breakpoints.down('md'))
  const desktop = useMediaQuery(theme.breakpoints.up('lg'))
  const tablet = useMediaQuery('(min-width:900px) and (max-width:1200px)')

  return {mobile, tablet, desktop}
}
export default useCurrentScreen;