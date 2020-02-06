import React from 'react';
import PropTypes from 'prop-types';

import {
  TOOL_TIP__NEWLINE,
  TOOL_TIP__NEWLINE_SINGLE,
  TOOL_TIP__TEXT,
} from '../../constants/common';

import { TOOLTIP_CONFIG_PROP_TYPE } from '../../helpers/propTypeHelper';

class TooltipQuestionHeading extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
    };
  }

  handleClick = (event) => {
    this.setState((prevState) => ({
      visible: !prevState.visible,
    }));

    event.preventDefault();
  }

  render() {
    const { title, tooltipId, tooltipConfig } = this.props;
    const { visible } = this.state;
    const cssClass = visible ? 'tooltip-button tooltip-button-close' : 'tooltip-button tooltip-button-open';

    if (title.length === 0) {
      return null;
    }

    if (tooltipConfig.length === 0) {
      return <h2>{title}</h2>;
    }

    const tooltip = tooltipConfig.map((tooltipConfigEntry) => {
      if (tooltipConfigEntry.type === TOOL_TIP__TEXT) {
        return (tooltipConfigEntry.value);
      }

      if (tooltipConfigEntry.type === TOOL_TIP__NEWLINE) {
        return ('\n\n');
      }

      if (tooltipConfigEntry.type === TOOL_TIP__NEWLINE_SINGLE) {
        return ('\n');
      }

      return (
        <a key={tooltipConfigEntry.key} href={tooltipConfigEntry.value} target="_">{tooltipConfigEntry.value}</a>
      );
    });

    return (
      <div className="tooltip-question-heading-container">
        <div className="tooltip-question-heading-title">
          <h2>{title}</h2>
        </div>

        <div className="tooltip">
          <button id={tooltipId} type="button" className={cssClass} onClick={this.handleClick} />
          { visible && <span className="tooltip-text">{tooltip}</span>}
        </div>

        <div className="clear-tooltip" />
      </div>
    );
  }
}

TooltipQuestionHeading.defaultProps = {
  title: '',
  tooltipId: '',
  tooltipConfig: [],
};

TooltipQuestionHeading.propTypes = {
  title: PropTypes.string,
  tooltipId: PropTypes.string,
  tooltipConfig: TOOLTIP_CONFIG_PROP_TYPE,
};

export default TooltipQuestionHeading;
