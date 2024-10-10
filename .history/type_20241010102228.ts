interface IFormLogin {
  email : string,
  password : string,
}


// first_name: "",
//     last_name: "",
//     email: "",
//     company_name: "",
//     company_website: "",
//     job_title: "",
//     work_email: "",
//     password: "",
//     confirm_password: "",
//     is_recuiter: ""
interface Profile {
  company_name: string;
  company_website: string;
  job_title: string;
}
interface IFormRegister {
  email : string
  first_name : string
  last_name : string
  
  work_email : string
  password : string
  confirm_password : string
  is_recuiter : boolean
}