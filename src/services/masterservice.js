import axios from 'axios';
import Cookies from 'js-cookie';
import { get, post } from '../helpers/api';

const getAllAgama = async () => {
  const response = await get(`master/agama`);
  //if response is not 401, then return response.data
  console.log(response);

  return response;
};

export { getAllAgama};
