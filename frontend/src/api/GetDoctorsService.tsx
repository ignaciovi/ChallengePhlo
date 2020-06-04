import axios from 'axios'

class GetDoctorsService {

    async getDoctors() {
      let test
      try {
        test = await axios.get(`http://localhost:8080/getDoctors?postcode=G37DW`);
        return test
      } catch (error) {
        console.log(error)
      }
    }
}

export default new GetDoctorsService()