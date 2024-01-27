export const customStyles = {
    control: (provided, state) => ({
        ...provided,
        background: '#fff',
        border:'none',
        // borderColor: '#9e9e9e',
        minHeight: '30px',
        height: '30px',
        margin: '2px!important',
        //   boxShadow: state.isFocused ? null : null,
        boxShadow: '0 1px 2px #dde2e5 !important',
        fontSize: 12
    }),

    valueContainer: (provided, state) => ({
        ...provided,
        height: '30px',
        padding: '0 6px',
        //   border:'2px solid red',
    }),

    input: (provided, state) => ({
        ...provided,
        margin: '0px',
        //   border:'2px solid blue',
    }),
    indicatorSeparator: state => ({
        display: 'none',
    }),
    indicatorsContainer: (provided, state) => ({
        ...provided,
        height: '30px',
        //   border:'2px solid yellow',
    }),
    placeholder: (provided, state) => ({
        ...provided,
        color: '#000',
        marginLeft: 30,
        marginBottom: 3,
    }),
    singleValue: (provided) => ({
        ...provided,
        color: '#000', 
        marginLeft: 30,
        marginBottom: 3,
    }),
    multiValue: (provided) => ({
        ...provided,
        padding: '0!important',
        color: '#fff', 
    }),
};
export const customStyles2 = {
    control: (provided, state) => ({
      ...provided,
      boxShadow: "none",
      borderRadius: "4px",
      border: "1px solid rgb(220 227 231 / 35%)",
      background: "#f7f8f9",
      cursor: "pointer",
    }),
    indicatorSeparator: state => ({
      display: 'none',
  }),
  };