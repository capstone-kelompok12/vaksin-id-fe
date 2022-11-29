import Cookies from "js-cookie";

const Auth = {
  isAuthorized(){
    if(Cookies.get('token')) return true
    return null
  },
  login(){
    Cookies.set('token', true)
  },
  logout(navigate){
    Cookies.remove('token')
    navigate('/login')
  },
}

export default Auth;