import axios from "axios";
import { APPLY_URL } from "../../../urls";

export const postData = async (data) => {
  await axios.post(APPLY_URL, data);
};
