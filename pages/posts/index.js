import Link from 'next/link';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const FirstPost = (props) => {
  return (
    <div className="container">
      <h1>All Post</h1>
      <Link href="/posts/1">POSTS 1</Link>
      <p>
        <br />
      </p>
      <Link href="/posts/2">POSTS 2</Link>
      <p>
        <br />
      </p>
      <Link href="/posts/3">POSTS 3</Link>
    </div>
  );
};

export const getStaticProps = async (props) => {
  const { locale } = props;
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
};

export default FirstPost;
