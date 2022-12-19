import Cookies from "js-cookie";
import { toast } from "react-toastify";
import APIAuth from "../apis/auth.api";

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
    Cookies.remove('rs_name')
    toast.warning('Berhasil logout!')
    navigate('/login')
  },
  storeRSName(){
    APIAuth.getDetailHF()
      .then(res =>{
        Cookies.set('rs_name', res.Name)
      })
      .catch(err => {throw err})
  },
  getRSName(){
    return Cookies.get('rs_name')
  }
}

export default Auth;