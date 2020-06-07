import axios from 'axios'

class SendEmailService {

  async sendEmail(email:string, name:string, appointmentTime:string) {
      return axios.post(`http://localhost:8080/sendEmail`, {email, name, appointmentTime})
      .then((res) => {
        console.log(res)
        return res.data})
      .catch((error) => console.log(error));
  }
}

export default new SendEmailService()
