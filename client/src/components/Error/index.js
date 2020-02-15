import React from 'react';
import LandingPageLayout from '../Layouts/LandingPageLayout';
import { URL__HOME } from '../../constants/urlConstants';

function Error() {
  return (

    <LandingPageLayout
      nextUrl={URL__HOME}
      subTitle="Something went wrong, please try again:"
      title="Ohh no....."
    />
  );
}

export default Error;
