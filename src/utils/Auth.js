import Cookies from "js-cookie";

const Auth = {
  isAuthorized(){
    if(Cookies.get('token')) return true
    return null
  },
  storeToken(token, navigate){
    Cookies.set('token', token)
    navigate('/dashboard')
  },
  logout(navigate){
    Cookies.remove('token')
    navigate('/login')
  },
}

export default Auth;