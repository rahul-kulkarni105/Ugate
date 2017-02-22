import axios from 'axios'
import {Router} from 'react-router'
//funciton to get history api for user, not finished
export function getHistory() {
    return axios.get("/history");
}

//creates user in MonogoDB
export function createUser(userInfo) {
    return axios.post("/api/users/new", {

        password: userInfo.password,
        email: userInfo.email,
        userName: userInfo.userName,
        phoneNumber: userInfo.phoneNumber,
        ripplePublicAddress: userInfo.ripplePublicAddress,
        firstName: userInfo.firstName,
        lastName: userInfo.lastName,
        address: userInfo.address,
        city: userInfo.city,
        state: userInfo.state,
        zip: userInfo.zip

    }).then(function(response) {

        alert("Welcome to UGate. We sent you an email to verify your account.");
    }).catch(function(error) {
        console.log(error);
        alert("One of the fields is not filled in correctly");
    });
}

//login helper function
export function login(userInfo) {
    return axios.post('/api/authenticate', {
        email: userInfo.email,
        password: userInfo.password
    }).then(function(response) {

      console.log(response)

    }).catch(function(error) {
        console.log(error);

    });
}
//check to see if user is logged in
export function checkLogIn() {
    return axios.get('/api/loggedIn').then(function(response) {

        return response.data.loggedIn;


    }).catch(function(error) {

      return false

    });


}

//load data from data base
export function loadData(){
  return axios.get('/api/history').then(function(response){

    return response.data
  }).catch(function(error) {

    return false

  });

  }
