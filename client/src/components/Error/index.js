import React from 'react';
import LandingPage from '../LandingPage';
import { URL__HOME } from '../../constants/urlConstants';

function Error() {
  return (

    <LandingPage
      nextUrl={URL__HOME}
      subTitle="Something went wrong, please try again:"
      title="Ohh no....."
    />
  );
}

export default Error;
