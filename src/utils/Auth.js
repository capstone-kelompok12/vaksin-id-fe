import Cookies from "js-cookie";
import { toast } from "react-toastify";

const Auth = {
  isAuthorized(){
    if(Cookies.get('token')) return true
    return null
  },
  storeToken(token, navigate){
    Cookies.set('token', token, {expires: 3})
    toast.success('Berhasil login!')
    navigate('/dashboard')
  },
  getToken(){
    return Cookies.get('token')
  },
  logout(navigate){
    Cookies.remove('token')
    toast.warning('Berhasil logout!')
    navigate('/login')
  },
}

export default Auth;