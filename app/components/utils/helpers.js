import axios from 'axios'

export const helpers = {

  getHistory(){
    return axios.get("/history");
  },
  createUser(userInfo){
      return axios.get("/api/users/new", {username: userInfo.username, password: userInfo.password, email: userInfo.email, phoneNumber: userInfo.phoneNumber, ripplePublicAddress: userInfo.ripplePublicAddress});
  }

}
