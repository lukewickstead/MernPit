import React from 'react';
import LandingPage from '../LandingPage';
import { URL__HOME } from '../../constants/urlConstants';

function Confirmation() {
  return (

    <LandingPage
      nextUrl={URL__HOME}
      subTitle="Why not try again?"
      title="Were all done."
    />
  );
}

export default Confirmation;
