import axios from 'axios'

class GetDoctorsService {

    async getDoctors(postcode:string) {
      try {
        return await axios.get(`http://localhost:8080/getDoctors?postcode=${postcode}`);
      } catch (error) {
        console.log(error)
      }
    }
}

export default new GetDoctorsService()
