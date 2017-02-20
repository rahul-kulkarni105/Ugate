import axios from 'axios'



export function getHistory() {
    return axios.get("/history");
}

export function createUser(userInfo) {
    return axios.post("/api/users/new", {

        password: userInfo.password,
        email: userInfo.email,
        phoneNumber: userInfo.phoneNumber,
        ripplePublicAddress: userInfo.ripplePublicAddress,
        firstName: userInfo.firstName,
        lastName: userInfo.lastName,
        address: userInfo.address,
        city: userInfo.city,
        state: userInfo.state,
        zip: userInfo.zip

    }).then(function(response) {
        console.log(response);
    }).catch(function(error) {
        console.log(error);
    });
}
