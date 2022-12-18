import React from "react";
import signUp from "../Components/signUp";
import { useNavigate } from "react-router-dom";
import { FormControl, Input,Box} from '@chakra-ui/react';

const SignUp = () => {
    let navigate = useNavigate();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [token, setToken] = React.useState("");
  const [isAuth, setIsAuth] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(false);
  console.log(token,isAuth,isLoading);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setIsError(false);
    signUp({ email, password })
      .then((res) => {
        setIsAuth(true);
        setToken(res.data.token);
        navigate("/");
        alert("Successfully Registered");
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
                bg="black" 
                color="white"
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
                bg="black" 
                color="white"
                type="password"
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
            />
            </FormControl>
        </Box>
        <Box marginTop="8px">
            <Input bg="black" color="white" type="submit" />
        </Box>
        </form>
    </Box>
  );
};

export { SignUp };
