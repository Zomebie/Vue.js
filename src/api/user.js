import axios from "axios";

const getUserInfo = (user_name, password) => {
  return axios.get("/api/users", {
    params: {
      user_name,
      password
    }
  });
};

const registerUser = (user_name, password) => {
  return axios.post("/api/users", {
    user_name,
    password
  });
};

export default {
  async login(uid, password) {
    try {
      let res = await getUserInfo(uid, password);
      const { user_name } = res.data;

      if (user_name) {
        return user_name;
      }
    } catch (err) {
      console.log(err);
    }
  },

  async register(uid, password) {
    try {
      let res = await registerUser(uid, password);

      const { data } = res;

      return JSON.parse(data);
    } catch (err) {
      console.log(err);
    }
  }
};
