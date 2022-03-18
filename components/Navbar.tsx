import ActiveLink from './ActiveLink';
import styles from './Navbar.module.css';

const menuItems = [
  {
    text: 'Home',
    url: '/',
  },
  {
    text: 'About',
    url: '/about',
  },
  {
    text: 'Contact',
    url: '/contact',
  },
  {
    text: 'Pricing',
    url: '/pricing',
  },
];

const Navbar = () => {
  return (
    <nav className={styles['menu-container']}>
      {menuItems.map(({ text, url }) => (
        <ActiveLink key={url} text={text} url={url} />
      ))}
    </nav>
  );
};

export default Navbar;
