import api from "../api/user";
import { USER_ID, ERROR_STATE, IS_AUTH } from "./mutation_types";

let setUserId = ({ commit }, data) => {
  commit(USER_ID, data);
};

let setErrorState = ({ commit }, data) => {
  commit(ERROR_STATE, data);
};

let setIsAuth = ({ commit }, data) => {
  commit(IS_AUTH, data);
};

// 로그인 결과를 vuex에 넣기
let setResponse = (store, uid, authFlag) => {
  setUserId(store, uid);
  setErrorState(store, "");
  setIsAuth(store, authFlag);
};

export default {
  async login(store, { userId, password }) {
    setResponse(store, userId, true);
    return store.getters.getIsAuth;
    // let loginSuccessId = await api.login(userId, password);

    // if (loginSuccessId) {
    //   setResponse(store, loginSuccessId, true);
    //   return store.getters.getIsAuth;
    // }
    // return false;
  },

  logout(store, userId) {
    setResponse(store, userId, false);
  }
};
