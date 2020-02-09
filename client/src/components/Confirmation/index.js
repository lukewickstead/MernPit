import React from 'react';
import LandingPage from '../LandingPage';
import { URL__HOME } from '../../constants/urlConstants';

function Confirmation() {
  return (

    <LandingPage
      nextUrl={URL__HOME}
      subTitle="Were all done."
      title="Why not try again?"
    />
  );
}

export default Confirmation;
