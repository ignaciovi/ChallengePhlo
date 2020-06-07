import axios from 'axios'

class SendEmailService {

    async sendEmail(email:string, name:string, appointmentTime:string) {
      let test
      try {
        test = await axios.get(`http://localhost:8080/sendEmail?email=${email}&name=${name}&appointmentTime=${appointmentTime}`);
        return test
      } catch (error) {
        console.log(error)
      }
    }
}

export default new SendEmailService()