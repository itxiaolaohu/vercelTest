import getIntl from '../intl';
import ServerIntlProvider from '@/components/ServerIntlProvider';
import Login from './login';
// import '../globals.css';

async function Home({ params: { locale } }: { params: { locale: string } }) {
  const intl = await getIntl(locale);
  return (
    <ServerIntlProvider messages={intl.messages} locale={intl.locale}>
      <Login />
    </ServerIntlProvider>
  );
}

export default Home;
