import Link from 'next/link';
import MainLayout from '../components/layouts/MainLayout';

export default function Home() {
  return (
    <MainLayout title="Home" description="Home Page">
      <h1>Home Page</h1>
      <h1 className="title">
        Go to <Link href='/about'>About</Link>
      </h1>
    </MainLayout>
  );
}
