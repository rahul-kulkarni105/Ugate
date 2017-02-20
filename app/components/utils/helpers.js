import axios from 'axios'

export function getHistory() {
    return axios.get("/history");
}

export function createUser(userInfo) {
  console.log(userInfo);
    return axios.post("/api/users/new", {
        userName: userInfo.userName,
        password: userInfo.password,
        email: userInfo.email,
        phoneNumber: userInfo.phoneNumber,
        ripplePublicAddress: userInfo.ripplePublicAddress
    }).then(function(response) {
        console.log(response);
    }).catch(function(error) {
        console.log(error);
    });
}
