import React from 'react';
import LandingPageLayout from '../Layouts/LandingPageLayout';
import { URL__EXISTING_SUPPORTER } from '../../constants/urlConstants';

function Home() {
  return (

    <LandingPageLayout
      title="Let&apos;s start your survey"
      subTitle="Welcome to our PAFC supporter survey."
      nextUrl={URL__EXISTING_SUPPORTER}
    />
  );
}

export default Home;
