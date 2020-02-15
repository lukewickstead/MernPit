import React from 'react';
import LandingPageLayout from '../Layouts/LandingPageLayout';
import { URL__HOME } from '../../constants/urlConstants';

function Confirmation() {
  return (

    <LandingPageLayout
      nextUrl={URL__HOME}
      subTitle="Why not try again?"
      title="Were all done."
    />
  );
}

export default Confirmation;
