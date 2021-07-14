import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

const Navigation = (props) => {
  const { asPath, locales, locale } = useRouter();
  const { t } = useTranslation('common');
  const menus = [
    {
      href: '/',
      label: t('menus.home'),
    },
    {
      href: '/posts',
      label: t('menus.posts'),
    },
  ];

  return (
    <header>
      <nav>
        <ul>
          {menus.map((menu, index) => {
            return (
              <li key={index}>
                <Link href={menu.href}>{menu.label}</Link>
              </li>
            );
          })}
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
