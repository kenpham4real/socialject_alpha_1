export const selectInputStyles = {
    control: (styles, state) => ({ 
      ...styles, 
      backgroundColor: 'white', 
      borderRadius: '3px', 
      border: !state.isFocused ? '2px solid #DEE1E6' : '2px solid rgba(47,173,88,1)',}),
    input: styles => ({
      ...styles,
      width: 330,
      height: 35,
      border: '2px',
    }),
};
