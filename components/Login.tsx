import { Auth, ThemeSupa } from '@supabase/auth-ui-react';
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react';
import { SupabaseClient, User, Provider } from '@supabase/supabase-js';
import { Text, Button, Center, Grid } from '@mantine/core';
import { supabase } from '../utils/supabaseClient';
import { useEffect, useState } from 'react';

interface propTypes {
  supabaseClient: SupabaseClient;
}

const Container = (props) => {
  const user = useUser();
  const supabaseClient = useSupabaseClient();
  const [session, setSession] = useState<User>(null);
  const [data, setData] = useState();

  useEffect(() => {
    async function loadData() {
      const { data: user, error } = await supabaseClient.from('test').select('*');
      setData(data);
    }
    if (user) {
      loadData();
    }
  }, [user]);

  if (user) {
    return (
      <>
        <Center>
          <Grid>
            <Grid.Col>
              <Center>
                <Text>Signed in: {user.email}</Text>
              </Center>
            </Grid.Col>
            <Grid.Col>
              <Center>
                <Button size="xl" onClick={() => props.supabaseClient.auth.signOut()}>
                  Sign out
                </Button>
              </Center>
            </Grid.Col>
          </Grid>
        </Center>
      </>
    );
  } else {
    return props.children;
  }
};

export default function AuthBasic() {
  const supabaseClient = useSupabaseClient();
  return (
    <Auth.UserContextProvider supabaseClient={supabaseClient}>
      <Container supabaseClient={supabaseClient}>
        <Auth
          providers={['github']}
          supabaseClient={supabaseClient}
          redirectTo="https://jaycamper.com"
          appearance={{ theme: ThemeSupa }}
        />
      </Container>
    </Auth.UserContextProvider>
  );
}
