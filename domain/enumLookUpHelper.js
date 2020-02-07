
import {
  MATCHES_WATCHED__OPTION__FOUR_TO_FIVE,
  MATCHES_WATCHED__OPTION__FOUR_TO_FIVE__LABEL,
  MATCHES_WATCHED__OPTION__ONE_TO_THREE,
  MATCHES_WATCHED__OPTION__ONE_TO_THREE__LABEL,
  MATCHES_WATCHED__OPTION__SIX_PLUS,
  MATCHES_WATCHED__OPTION__SIX_PLUS__LABEL,
  MATCHES_WATCHED__OPTION__ZERO,
  MATCHES_WATCHED__OPTION__ZERO__LABEL,
  SHIRTS_OWNED__OPTION__FOUR_TO_FIVE,
  SHIRTS_OWNED__OPTION__FOUR_TO_FIVE__LABEL,
  SHIRTS_OWNED__OPTION__ONE_TO_THREE,
  SHIRTS_OWNED__OPTION__ONE_TO_THREE__LABEL,
  SHIRTS_OWNED__OPTION__SIX_PLUS,
  SHIRTS_OWNED__OPTION__SIX_PLUS__LABEL,
  SHIRTS_OWNED__OPTION__ZERO,
  SHIRTS_OWNED__OPTION__ZERO__LABEL,
  YEARS_SUPPORTING__OPTION__FOUR_TO_FIVE,
  YEARS_SUPPORTING__OPTION__FOUR_TO_FIVE__LABEL,
  YEARS_SUPPORTING__OPTION__ONE_TO_THREE,
  YEARS_SUPPORTING__OPTION__ONE_TO_THREE__LABEL,
  YEARS_SUPPORTING__OPTION__SIX_PLUS,
  YEARS_SUPPORTING__OPTION__SIX_PLUS__LABEL,
  YEARS_SUPPORTING__OPTION__ZERO,
  YEARS_SUPPORTING__OPTION__ZERO__LABEL,
} from '../client/src/constants/surveyConstants';

function enumLookUpHelper(config, keyValue) {
  const result = config[keyValue];
  return result === undefined ? keyValue : result;
}

export function createGetEnumLookUpHelper() {
  const data = {
    [MATCHES_WATCHED__OPTION__FOUR_TO_FIVE]: MATCHES_WATCHED__OPTION__FOUR_TO_FIVE__LABEL,
    [MATCHES_WATCHED__OPTION__ONE_TO_THREE]: MATCHES_WATCHED__OPTION__ONE_TO_THREE__LABEL,
    [MATCHES_WATCHED__OPTION__SIX_PLUS]: MATCHES_WATCHED__OPTION__SIX_PLUS__LABEL,
    [MATCHES_WATCHED__OPTION__ZERO]: MATCHES_WATCHED__OPTION__ZERO__LABEL,
    [SHIRTS_OWNED__OPTION__FOUR_TO_FIVE]: SHIRTS_OWNED__OPTION__FOUR_TO_FIVE__LABEL,
    [SHIRTS_OWNED__OPTION__ONE_TO_THREE]: SHIRTS_OWNED__OPTION__ONE_TO_THREE__LABEL,
    [SHIRTS_OWNED__OPTION__SIX_PLUS]: SHIRTS_OWNED__OPTION__SIX_PLUS__LABEL,
    [SHIRTS_OWNED__OPTION__ZERO]: SHIRTS_OWNED__OPTION__ZERO__LABEL,
    [YEARS_SUPPORTING__OPTION__FOUR_TO_FIVE]: YEARS_SUPPORTING__OPTION__FOUR_TO_FIVE__LABEL,
    [YEARS_SUPPORTING__OPTION__ONE_TO_THREE]: YEARS_SUPPORTING__OPTION__ONE_TO_THREE__LABEL,
    [YEARS_SUPPORTING__OPTION__SIX_PLUS]: YEARS_SUPPORTING__OPTION__SIX_PLUS__LABEL,
    [YEARS_SUPPORTING__OPTION__ZERO]: YEARS_SUPPORTING__OPTION__ZERO__LABEL,
  };

  return (keyValue) => enumLookUpHelper(data, keyValue);
}