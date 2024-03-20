import React from 'react';
import Head from 'next/head';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { hideNotification } from '../../redux/notificationSlice';
import NotificationsContainer from '../NotificationsContainer';
import SiteHeader from '../SiteHeader';
import SiteFooter from '../SiteFooter';
import AuthChecker from '../AuthChecker';

interface MainLayoutProps {
  children: JSX.Element;
  notificationData?: any;
  hideNotification: () => void;
}

const MainLayout: React.FC<MainLayoutProps> = (props) => {
  const { children, notificationData, hideNotification } = props;

  React.useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      hideNotification();
    }, 5000);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [hideNotification, notificationData]);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
        <link rel="shortcut icon" href="/assets/favicon.ico" />
      </Head>
      <AuthChecker>
        <main className="antialiased bg-gray-100 leading-relaxed tracking-wide">
          <SiteHeader />
          <div className="container mx-auto pt-16 pb-12 px-4">{children}</div>
          <SiteFooter />
        </main>
      </AuthChecker>
      {notificationData && <NotificationsContainer data={notificationData} />}
    </>
  );
};

const mapStateToProps = (state: any) => ({
  notificationData: state.notifications.data,
});

const mapDispatchToProps = (dispatch: any) => bindActionCreators({ hideNotification }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);