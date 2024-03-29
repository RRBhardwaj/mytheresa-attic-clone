import React from "react";
import { loginUser } from "./loginUser";
import { useNavigate } from "react-router-dom";
import { FormControl, Input,Box} from '@chakra-ui/react'

const Login = () => {
    let navigate = useNavigate();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [token, setToken] = React.useState("");
  const [isAuth, setIsAuth] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(false);
  console.log(token,isAuth,isLoading)

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setIsError(false);
    loginUser({ email, password })
      .then((res) => {
        setIsAuth(true);
        setToken(res.data.token);
        navigate("/");
        alert("Successfully login");
      })
      .catch((err) => {
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };


  return (
    <Box width="40%" margin="auto" textAlign='left'>
        <form onSubmit={handleSubmit}>
        {isError && "Wrong Email & Password"}
        <Box marginTop="8px">
            <FormControl>
            Email:{" "}
            <Input
                bg="#361b24" 
                color="#e30e58"
                type="email"
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)}
            />
            </FormControl>
        </Box>
        <Box marginTop="8px">
            <FormControl>
            Password:{" "}
            <Input
                bg="#361b24" 
                color="#e30e58"
                type="password"
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
            />
            </FormControl>
        </Box>
        <Box marginTop="8px">
            <Input bg="#4f192b" color="#e30e58" type="submit" />
        </Box>
        </form>
    </Box>
  );
};

export { Login };
