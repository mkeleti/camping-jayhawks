import { supabase } from '../utils/supabaseClient';
import { Paper, Card, PasswordInput, Input, Button, Center, Text } from '@mantine/core';
import sha256 from 'crypto-js/sha256';
import Base64 from 'crypto-js/enc-base64';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import { Formik, FormikHelpers, FormikProps, Form, Field, FieldProps } from 'formik';
import { useRef, useState } from 'react';

const Login = (props) => {
  //   let { user, error } = await supabase.auth.signUp({
  //     email: 'someone@email.com',
  //     password: 'peytDIQovymMykOxJsmw'
  //   })
  const salt =
    '2qh389r2hwe9dafnhpaouh38r2hdfhas79983hrpuwhficJBveaw78peHWFRIJQJSKDFBSAAWFJIAHEIUHI3rsedtytvubiyfuftdryxcfgvlkjhgfdsaqwertyuiopzxcvbnm';
  const [captchaToken, setCaptchaToken] = useState('');
  const captcha = useRef();

  async function userSignUp(email, password, captcha, userData) {
    let hashDigest = sha256(salt + password);
    let hash = Base64.stringify(hashDigest);
    let { data, error } = await supabase.auth.signUp({
      email: email,
      password: hash,
      options: { captchaToken: captcha, data: userData },
    });
  }

  interface Values {
    firstName: string;
    lastName: string;
    password: string;
    email: string;
  }

  return (
    <div>
      <Card shadow="lg" m="lg">
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            password: '',
          }}
          onSubmit={(values: Values, { setSubmitting }: FormikHelpers<Values>) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
              let userData = {firstName: values.firstName, lastName: values.lastName}
              userSignUp(values.email, values.password, captcha, userData);
              if (typeof captcha != undefined) {
                captcha.current.resetCaptcha();
              }
            }, 500);
          }}
        >
          <Form>
            <label htmlFor="firstName">First Name:</label>
            <Field mb="xl" component={Input} id="firstName" name="firstName" placeholder="John" />

            <label htmlFor="lastName">Last Name:</label>
            <Field
              mb="xl"
              component={Input}
              id="lastName"
              name="lastName"
              placeholder="Doe"
              type="email"
            />

            <label htmlFor="email">Email</label>
            <Field
              mb="xl"
              component={Input}
              id="email"
              name="email"
              placeholder="john@acme.com"
              type="email"
            />

            <label htmlFor="password">Password</label>
            <Field
              mb="xl"
              component={PasswordInput}
              id="password"
              name="password"
              type="password"
            />

            <HCaptcha
              sitekey="32c36aec-2869-41cf-95ac-31134c1628f0"
              onVerify={(token) => setCaptchaToken(token)}
              ref={captcha}
            />
            {captchaToken != '' ? (
              <Button mt="xl" type="submit">
                Submit
              </Button>
            ) : (
              <Button mt="xl" disabled type="submit">
                Submit
              </Button>
            )}
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
