// eslint-disable-next-line import/no-extraneous-dependencies
import jwt from 'jsonwebtoken';
import jwtConfig from '../config/jwtConfig';

require('dotenv').config();

export default function generateTokens(payload) {
  return {
    accessToken: jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, jwtConfig.access),
    refreshToken: jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, jwtConfig.refresh),
  };
}
