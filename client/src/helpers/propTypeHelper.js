import PropTypes from 'prop-types';

import {
  FIELD_TYPE__NUMBER,
  FIELD_TYPE__OPTION,
  FIELD_TYPE__TEXT,
  TOOL_TIP__NEWLINE,
  TOOL_TIP__NEWLINE_SINGLE,
  TOOL_TIP__TEXT,
  TOOL_TIP__URL,
} from '../constants/common';

import {
  MATCHES_WATCHED__OPTION__FOUR_TO_FIVE,
  MATCHES_WATCHED__OPTION__ONE_TO_THREE,
  MATCHES_WATCHED__OPTION__SIX_PLUS,
  MATCHES_WATCHED__OPTION__ZERO,
  SHIRTS_OWNED__OPTION__FOUR_TO_FIVE,
  SHIRTS_OWNED__OPTION__ONE_TO_THREE,
  SHIRTS_OWNED__OPTION__SIX_PLUS,
  SHIRTS_OWNED__OPTION__ZERO,
  YEARS_SUPPORTING__OPTION__FOUR_TO_FIVE,
  YEARS_SUPPORTING__OPTION__ONE_TO_THREE,
  YEARS_SUPPORTING__OPTION__SIX_PLUS,
  YEARS_SUPPORTING__OPTION__ZERO,
} from '../constants/surveyConstants';

export const NUMBER_OR_STRING_PROP_TYPE = PropTypes.oneOfType(
  [PropTypes.string.isRequired, PropTypes.number.isRequired],
);

export const TOOLTIP_CONFIG_PROP_TYPE = PropTypes.arrayOf(
  PropTypes.shape({
    key: PropTypes.number.isRequired,
    type: PropTypes.oneOf([TOOL_TIP__TEXT, TOOL_TIP__URL, TOOL_TIP__NEWLINE, TOOL_TIP__NEWLINE_SINGLE]).isRequired,
    value: PropTypes.string.isRequired,
  }),
);

export const FIELD_TYPE_PROP_TYPE = PropTypes.oneOf([FIELD_TYPE__NUMBER, FIELD_TYPE__OPTION, FIELD_TYPE__TEXT]);

export const QUESTIONS_CONFIG_PROP_TYPE = PropTypes.shape({
  name: PropTypes.string,
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      subTitle: PropTypes.string,
      value: PropTypes.string.isRequired,
    }),
  ),
});

export const STORE_PROP_TYPE = PropTypes.shape({
  dispatch: PropTypes.func.isRequired,
});

export const HISTORY_PROP_TYPE = PropTypes.shape({
  action: PropTypes.string.isRequired,
});

export const LOCATION_PROP_TYPE = PropTypes.shape({
  pathname: PropTypes.string.isRequired,
});

export const YEARS_SUPPORTING_PROP_TYPE = PropTypes.oneOf([
  YEARS_SUPPORTING__OPTION__ZERO,
  YEARS_SUPPORTING__OPTION__ONE_TO_THREE,
  YEARS_SUPPORTING__OPTION__FOUR_TO_FIVE,
  YEARS_SUPPORTING__OPTION__SIX_PLUS,
]);

export const MATCHES_WATCHED_PROP_TYPE = PropTypes.oneOf([
  MATCHES_WATCHED__OPTION__ZERO,
  MATCHES_WATCHED__OPTION__ONE_TO_THREE,
  MATCHES_WATCHED__OPTION__FOUR_TO_FIVE,
  MATCHES_WATCHED__OPTION__SIX_PLUS,
]);

export const SHIRTS_OWNED_PROP_TYPE = PropTypes.oneOf([
  SHIRTS_OWNED__OPTION__ZERO,
  SHIRTS_OWNED__OPTION__ONE_TO_THREE,
  SHIRTS_OWNED__OPTION__FOUR_TO_FIVE,
  SHIRTS_OWNED__OPTION__SIX_PLUS,
]);

