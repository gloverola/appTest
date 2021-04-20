import {DEV_URL, PROD_URL} from '@env';

const devEnvVariables = {
  DEV_URL,
};

const prodEnvVariables = {
  PROD_URL,
};

export default __DEV__ ? devEnvVariables : prodEnvVariables;
