import axios from "axios";

function signUp({ email, password }) {
  if (!email || !password) {
    return Promise.reject("email or password is missing");
  }
  const config = {
    method: "post",
    data: {
      email,
      password
    },
    url: "https://reqres.in/api/register"
  };
  return axios(config);
}
export default signUp;
