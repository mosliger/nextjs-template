import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Home = (props) => {
  const { t } = useTranslation();

  return (
    <div className="container">
      <h1>{t('Title')}</h1>
      <p>{t('home:content')}</p>
    </div>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'home'])),
  },
});

export default Home;
