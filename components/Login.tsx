import { supabase } from '../utils/supabaseClient';
import { Paper, Card, PasswordInput, Input, Button, Center, Text } from '@mantine/core';
import sha256 from 'crypto-js/sha256';
import Base64 from 'crypto-js/enc-base64'
import HCaptcha from '@hcaptcha/react-hcaptcha';
import { Formik, FormikHelpers, FormikProps, Form, Field, FieldProps } from 'formik';


const Login = (props) => {
  //   let { user, error } = await supabase.auth.signUp({
  //     email: 'someone@email.com',
  //     password: 'peytDIQovymMykOxJsmw'
  //   })
  const salt = '2qh389r2hwe9dafnhpaouh38r2h';

  async function userSignUp(email, password) {
    let hashDigest = sha256(salt + password);
    let hash = Base64.stringify(hashDigest);
    let { data, error } = await supabase.auth.signUp({
        email: email,
        password: hash
    });
  }

  interface Values {
    password: string;
    email: string;
  }

  return (
    <div>
      <Card shadow="lg" m="lg">
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          onSubmit={(values: Values, { setSubmitting }: FormikHelpers<Values>) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
              userSignUp(values.email, values.password);
            }, 500);
          }}
        >
          <Form>
            <label htmlFor="email">Email</label>
            <Field mb="xl" component={Input} id="email" name="email" placeholder="john@acme.com" type="email" />

            <label htmlFor="password">Password</label>
            <Field mb="xl" component={PasswordInput} id="password" name="password" type="password"/>

            <HCaptcha sitekey="32c36aec-2869-41cf-95ac-31134c1628f0" />

            <Button mt="xl" type="submit">Submit</Button>
          </Form>
        </Formik>
      </Card>
      <Text m="xl">
        This site is protected by <a href="https://www.hCaptcha.com">hCaptcha</a> and its
        <a href="https://www.hcaptcha.com/privacy"> Privacy Policy</a> and
        <a href="https://www.hcaptcha.com/terms"> Terms of Service</a> apply.
      </Text>
    </div>
  );
};
/*
1. User signs up for the camping app
2. Add a salt to the users password (hwaiefuhawiduf + password) 
2. Users password is hashed (crypto-js)
3.
 
    let { user, error } = await supabase.auth.signUp({
        email: email,
        password: hash
    })
*/
export default Login;
