import Link from 'next/link';
import DarkLayoutCard from '../components/layouts/DarkLayoutCard';
import MainLayout from '../components/layouts/MainLayout';

const About = () => {
  return (
    <>
      <h1>About Page</h1>
      <h1 className='title'>
        Go to <Link href='/'>Home</Link>
      </h1>
    </>
  );
};

About.getLayout = function getLayout(page: JSX.Element) {
  return (
    <MainLayout title='About' description='About Page'>
      <DarkLayoutCard>{page}</DarkLayoutCard>
    </MainLayout>
  );
};

export default About;
