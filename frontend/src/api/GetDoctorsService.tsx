import axios from 'axios'

class GetDoctorsService {

    async getDoctors(postcode:string) {
      let test
      try {
        test = await axios.get(`http://localhost:8080/getDoctors?postcode=${postcode}`);
        return test
      } catch (error) {
        console.log(error)
      }
    }
}

export default new GetDoctorsService()