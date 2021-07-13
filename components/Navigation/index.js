import Link from 'next/link';

const Navigation = (props) => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/posts"> all posts</Link>
            <Link href="/posts/2"> posts 2</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
