const jwtConfig = {
  access: {
    expiresIn: 1000 * 60 * 5,
  },
  refresh: {
    expiresIn: 1000 * 60 * 60 * 1,
  },
};

export default jwtConfig;
