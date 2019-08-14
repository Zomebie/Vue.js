import axios from "axios";

const CHAINCODE_ID = "cc-utxo";

const invoke = (user_name, chaincode_id, function_name, args) => {
  return axios.post("/api/invoke", {
    user_name,
    chaincode_id,
    function_name,
    args
  });
};

const query = (user_name, chaincode_id, function_name, args) => {
  return axios.get("/api/query", {
    user_name,
    chaincode_id,
    function_name,
    args
  });
};
export default {
  async invoke(uid, fn, args) {
    try {
      const { data, statusCode } = await invoke(uid, CHAINCODE_ID, fn, args);

      if (statusCode === 200) {
        return JSON.parse(data);
      }
    } catch (err) {
      console.log(err);
    }
  },

  async query(uid, fn, args) {
    try {
      let res = await query(uid, CHAINCODE_ID, fn, args);
    } catch (err) {
      console.log(err);
    }
  }
};
