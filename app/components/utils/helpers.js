import axios from 'axios'

export const helpers = {

  getHistory(){
    return axios.get("/history");
  }


}
