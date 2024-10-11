
import axios from 'axios';

const baseURL =  `https://korede456.pythonanywhere.com`

const useRegister = async () => {
  try {
    const response  =  axios.post (`${baseURL}/account/register/`, { 
      headers
    });
    if (response.status === 200) {

    }
  } catch {
    throw new Error(" Error Registering User")
  }
}