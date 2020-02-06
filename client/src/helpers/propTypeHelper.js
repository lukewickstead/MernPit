import PropTypes from 'prop-types';

import {
  FIELD_TYPE__MONEY,
  FIELD_TYPE__NUMBER,
  FIELD_TYPE__OPTION,
  FIELD_TYPE__TEXT,
  TOOL_TIP__NEWLINE,
  TOOL_TIP__NEWLINE_SINGLE,
  TOOL_TIP__TEXT,
  TOOL_TIP__URL,
} from '../constants/common';

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

export const FIELD_TYPE_PROP_TYPE = PropTypes.oneOf([FIELD_TYPE__MONEY, FIELD_TYPE__NUMBER, FIELD_TYPE__OPTION, FIELD_TYPE__TEXT]);

export const QUESTIONS_CONFIG_PROP_TYPE = PropTypes.shape({
  name: PropTypes.string,
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
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
