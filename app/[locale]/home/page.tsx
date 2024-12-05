import getIntl from '../intl';
import ServerIntlProvider from '@/components/ServerIntlProvider';
// import '../globals.css';

async function Home({ params: { locale } }: { params: { locale: string } }) {
  const intl = await getIntl(locale);
  return (
    <ServerIntlProvider messages={intl.messages} locale={intl.locale}>
      <h1 className="text-2xl font-bold text-center mt-10 text-slate-900">
        Welcome To Bitbox X
      </h1>
    </ServerIntlProvider>
  );
}

export default Home;
