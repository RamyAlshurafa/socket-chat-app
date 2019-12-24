import React from "react";

import { Wrapper } from "./style";
import Form from "../../components/Form";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Typography from "../../components/Typography";

const { Paragraph, Anchor } = Typography;

function Login() {
  return (
    <Wrapper>
      <div className="login-page">
        <Form className="login-form">
          <Input type="text" placeholder="username" />
          <Input type="password" placeholder="password" />
          <Button type="button">login</Button>
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
