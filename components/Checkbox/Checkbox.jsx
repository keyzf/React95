import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import check from '../../assets/pattern/check.svg';
import checkDisabled from '../../assets/pattern/check-disabled.svg';
import bgpattern from '../../assets/pattern/dropdown.png';

const checked = ({ checked, disabled }) =>
  checked &&
  `
  &:before {
    ${
      disabled
        ? `
      background-image:  url('${checkDisabled}'), url('${bgpattern}');
      background-repeat: no-repeat, repeat;
      background-position: center center;
      background-size: 7px 7px, 1.9px 1.9px;
      `
        : `background-image: url('${check}');
      background-repeat: no-repeat;
      background-position: center center;
      background-size: 7px 7px;`
    }
  }`;

const disabled = ({ disabled }) =>
  disabled &&
  `
  color: #868686;
  text-shadow: 0.5px 0.5px #d2d2d2;
`;

const Field = styled.input`
  display: none;
`;

const Label = styled.label`
  position: relative;
  padding-left: 22px;
  height: 15px;
  display: inline-block;

  &:before {
    content: '';
    position: absolute;
    top: 3px;
    left: 0;
    display: inline-block;
    height: 12px;
    width: 12px;

    border-left: 1px solid #868a8e;
    border-top: 1px solid #868a8e;

    box-shadow: inset -1px -1px 0 0 #c3c7cb, inset 1px 1px 0 0 #000000,
      0.5px 0.5px 0 0.5px #ffffff;
    background-color: white;
  }

  ${checked} ${disabled};
`;

class Checkbox extends React.Component {
  render() {
    const { value, style, label, checked, disabled, onChange } = this.props;

    return (
      <Label {...style} checked={checked} disabled={disabled}>
        <Field type="checkbox" value={value} onChange={onChange} />
        {label}
      </Label>
    );
  }
}

Checkbox.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
};

Checkbox.defaultProps = {
  value: 'checked',
  label: 'Checkbox',
  checked: false,
  disabled: false,
  onChange: () => {},
};

export default Checkbox;