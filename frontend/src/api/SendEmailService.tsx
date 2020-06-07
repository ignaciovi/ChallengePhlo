import axios from 'axios'

class SendEmailService {

  async sendEmail(email:string, name:string, appointmentTime:string) {
      return axios.get(`http://localhost:8080/sendEmail?email=${email}&name=${name}&appointmentTime=${appointmentTime}`)
      .then((res) => {
        console.log(res)
        return res.data})
      .catch((error) => console.log(error));
  }
}

export default new SendEmailService()
