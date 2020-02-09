import React from 'react';
import LandingPage from '../LandingPage';
import { URL__EXISTING_SUPPORTER } from '../../constants/urlConstants';

function Home() {
  return (

    <LandingPage
      title="Let&apos;s start your survey"
      subTitle="Welcome to our PAFC supporter survey."
      nextUrl={URL__EXISTING_SUPPORTER}
    />
  );
}

export default Home;
