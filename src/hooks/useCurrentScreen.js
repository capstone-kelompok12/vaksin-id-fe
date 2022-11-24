import { useMediaQuery, useTheme } from "@mui/material";

const useCurrentScreen = () =>{
  const theme = useTheme()

  const mobile = useMediaQuery(theme.breakpoints.down('md'))
  const desktop = useMediaQuery(theme.breakpoints.up('lg'))

  return {mobile, desktop}
}
export default useCurrentScreen;