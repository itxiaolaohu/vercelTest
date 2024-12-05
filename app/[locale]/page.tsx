import getIntl from './intl';
import ServerIntlProvider from '@/components/ServerIntlProvider';
import RedirectToLogin from '@/components/RedirectToLogin';

async function Home({ params: { locale } }: { params: { locale: string } }) {
  const intl = await getIntl(locale);
  return (
    <ServerIntlProvider messages={intl.messages} locale={intl.locale}>
      {/* <h1>{intl.formatMessage({ id: 'header' })}</h1> */}
      <RedirectToLogin />
      {/* <Link href="/about">{intl.formatMessage({ id: 'page2' })}</Link>
        <LanguageChanger /> */}
    </ServerIntlProvider>
  );
}

export default Home;
