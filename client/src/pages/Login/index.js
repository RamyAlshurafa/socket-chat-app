import React, { useState } from "react";
import axios from "axios";

import Form from "../../components/Form";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Typography from "../../components/Typography";

import { Wrapper } from "./style";

const { Paragraph, Anchor } = Typography;

function Login({ setIsAuthenticated, setUserInfo, history }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitForm = async event => {
    event.preventDefault();
    try {
      const { data } = await axios.post("/api/users/login", {
        email,
        password,
      });
      setUserInfo(data);
      setIsAuthenticated(true);
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Wrapper>
      <div className="login-page">
        <Form className="login-form" onSubmit={onSubmitForm}>
          <Input
            type="text"
            placeholder="email"
            value={email}
            onChange={setEmail}
          />
          <Input
            type="password"
            placeholder="password"
            value={password}
            onChange={setPassword}
          />
          <Button type="submit">login</Button>
          <Paragraph className="message">
            Not registered? <Anchor href="#">Create an account</Anchor>
          </Paragraph>
        </Form>
      </div>
    </Wrapper>
  );
}

export default Login;

// SIGN UP PAGE
/**
 * 
<form className="register-form">
<input type="text" placeholder="name" />
<input type="password" placeholder="password" />
<input type="text" placeholder="email address" />
<button type="button">create</button>
<p className="message">
Already registered? <a href="#">Sign In</a>
</p>
</form>
*/
