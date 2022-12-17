import axios from "axios";

function loginUser({ email, password }) {
  if (!email || !password) {
    return Promise.reject("email or password is missing");
  }
  const config = {
    method: "post",
    data: {
      email,
      password
    },
    url: "https://reqres.in/api/login"
  };
  return axios(config);

  // axios.post( "https://reqres.in/api/login", {
  //   email,
  //   password
  // } )
}

export { loginUser };
