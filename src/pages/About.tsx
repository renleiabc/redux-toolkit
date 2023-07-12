import { useLoaderData } from 'react-router-dom';
export const loader = async (): Promise<string> => {
  await new Promise((r) => setTimeout(r, 500));
  return 'I came from the about.tsx loader function!';
};
export function Component() {
  const data = useLoaderData() as string;
  console.log('🚀 ~ file: About.tsx:8 ~ Component ~ data:', data);
  return (
    <div>
      <h2>About</h2>
      <p>{data}</p>
    </div>
  );
}
Component.displayName = 'AboutPage';
