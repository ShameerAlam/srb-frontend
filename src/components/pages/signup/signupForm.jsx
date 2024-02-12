import React, { useContext } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  LineText,
  MutedLink,
  SubmitButton,
} from "../../resuseable_components/accountBox/common";
import { Marginer } from "../../resuseable_components/marginer";
import { AccountContext } from '../../resuseable_components/accountBox/accountContext';

export function SignupForm(props) {

  const { switchToSignin } = useContext(AccountContext);
  return (
    <BoxContainer>
      <FormContainer>
        <Input type="text" placeholder="Full name" />
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Input type="password" placeholder="Confirm password" />
        <select name="acc-type" id="acc-type">
          <option value="Srb Staff">SRB Staff</option>
          <option value="Management">Management</option>
          <option value="IT">IT</option>
        </select>
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="submit">Signup</SubmitButton>
      <Marginer direction="vertical" margin="5px" />
      <LineText>
        Already have an account?{" "}
        <BoldLink onClick={switchToSignin} href="#">
          Signin
        </BoldLink>
      </LineText>
    </BoxContainer>
  );
}