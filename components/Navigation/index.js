import Link from 'next/link';
import { useRouter } from 'next/router';

const Navigation = (props) => {
  const { asPath, locales, locale } = useRouter();
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
      <div className="switch-language">
        {locales.map((value) => {
          const isActive = locale === value;
          return (
            <Link key={value} href={asPath} locale={value}>
              <button className={isActive ? 'active' : ''}>{value}</button>
            </Link>
          );
        })}
      </div>
    </header>
  );
};

export default Navigation;
