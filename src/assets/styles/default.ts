import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
:root {
  font-size: 60%;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body, #root {
  height: 100%;
}

body {
  font-family: 'Roboto', sans-serif;
  line-height: 1.2;
  -webkit-font-smoothing: antialiased !important;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Ubuntu', sans-serif;
  margin: 0;
}

a {
  color: ${(props) => props.theme.colors.tertiary};
  text-decoration: none;
  font-size: 1.8rem;
  cursor: pointer;
}

li {
  list-style: none;
}

fieldset {
  border: none;
  padding: 0;
}

button {
  font-family: 'Roboto', sans-serif;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

button:focus {
  outline: none;
}

input::-webkit-calendar-picker-indicator {
  display: none;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type=number] {
  -moz-appearance: textfield;
}

#root {
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media (min-width: 1440px) {
  :root {
    font-size: 100%;
  }

  body {
    line-height: 1.32;
  }
}

@media (min-width: 2540px) {
  :root {
    font-size: 125%;
  }

  body {
    line-height: 1.64;
  }
}

.react-toast-notifications__toast {
  flex-direction: row;
  height: 100%;

  div {
    height: 100%;
  }
}
`;
