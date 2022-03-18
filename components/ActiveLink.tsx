import { CSSProperties } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const style: CSSProperties = {
  color: '#0070f3',
  textDecoration: 'underline',
};

interface Props {
  text: string;
  url: string;
}

const ActiveLink: React.FC<Props> = ({ text, url }) => {
  const router = useRouter();

  return (
    <Link href={url}>
      <a style={router.asPath === url ? style : undefined}>{text}</a>
    </Link>
  );
};

export default ActiveLink;
