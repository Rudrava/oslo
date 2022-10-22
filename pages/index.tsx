import { useSession, signIn, signOut } from 'next-auth/react';
export default function Component() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Signed in as {session!.user!.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      {console.log(process.env.HELO)}
      Not signed in <br />
      <button onClick={() => signIn('google')}>Sign in</button>
    </>
  );
}
