import React from "react";
import Select, { components } from "react-select";
const Option = (props) => {
  const tickImage = (
    <span role="img" aria-label="Tick" style={{ marginRight: '8px' }}>
      ✔️
    </span>
  );

  return (
    <div>
      <components.Option {...props}>
        {props.isSelected ? tickImage : null}
        <label>{props.label}</label>
      </components.Option>
    </div>
  );
};

const SingleSelect = ({ truckVal, customStyles2, onChange, name, options }) => {
  const ValueContainer = ({ children, getValue, ...props }) => {
    const values = getValue();
    let valueLabel = "";

    if (values.length > 0)
      valueLabel += props.selectProps.getOptionLabel(values[0]);
    if (values.length > 1) {
      valueLabel += ` & ${values.length - 1} more`;
    }

    const childsToRender = React.Children.toArray(children).filter(
      (child) =>
        ["Input", "DummyInput", "Placeholder"].indexOf(child.type.name) >= 0
    );

    return (
      <components.ValueContainer {...props}>
        {!props.selectProps.inputValue &&
          valueLabel &&
          valueLabel.slice(0, truckVal)}
        {childsToRender}
      </components.ValueContainer>
    );
  };

  return (
    <Select
      className="basic-single"
      classNamePrefix="select"
      name={name}
      options={options}
      isMulti
      closeMenuOnSelect={true}
      components={{
        Option,
        ValueContainer,
      }}
      onChange={onChange}
      styles={customStyles2}
      getOptionLabel={(option) => option.label}
      hideSelectedOptions={false}
    />
  );
};

export default SingleSelect;
