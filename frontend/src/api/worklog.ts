import axios from "axios";

export const getWorkLogs = async () => {
  const res = await axios.get("http://localhost:3000/work-log");
  return res.data;
};