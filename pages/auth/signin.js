import React from 'react';
import { getProviders, signIn as SignInProvider } from 'next-auth/react';

// Browser...
const signIn = ({ providers }) => {
  return (
    <>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button onClick={() => SignInProvider(provider.id)}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </>
  )
}

// Server...
export async function getServerSideProps() {
    const providers = await getProviders();

    return {
        props: {
            providers
        }
    }
}

export default signIn;