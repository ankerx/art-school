import axios from "axios";

export const postData = async (data) => {
  const URL = "http://localhost:5000/form/apply";
  await axios.post(URL, data);
};
