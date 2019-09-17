const variables = {
  development: {
    HEREID: "OXcK9OBqocw4MCzTUwIo",
    HERECODE: "j2py9TI4EsA_Bn3fhA9LMA"
  },
  production: {
    HEREID: "OXcK9OBqocw4MCzTUwIo",
    HERECODE: "j2py9TI4EsA_Bn3fhA9LMA"
  }
};

const getEnvVariables = () => {
  if (__DEV__) {
    return variables.development; // return this if in development mode
  }
  return variables.production; // otherwise, return this
};

export default getEnvVariables; // export a reference to the function
