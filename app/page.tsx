const testRequest = async () => {
  //You can perform any request here. Fetching nextjs's own documentation seemed a safe enough choice.
  const r = await fetch('https://www.nextjs.org');
  try {
      r.clone();
      return 'Cloned the response with no exception. You might not be running Node 16. You need to be on Node 16 to reproduce this bug.';
  } catch (e) {
      return `Cloning the response produced the following error: ${e.message}`;
  }
}

export default async function Home() {
  const text = await testRequest();
  return <p>{text}</p>;
}
