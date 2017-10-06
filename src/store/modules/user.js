import store from '@/store';
import { login, onAuthStateChanged } from '@/utils/auth';
import * as types from '../mutation-types';

// initial state
// shape: [{ id, quantity }]
const storeState = {
  user: null,
  userStatus: null,
};

onAuthStateChanged((user) => {
  if (user) {
    console.log('USER LOGGED !!!');
    store.commit(types.USER_CHANGED, { user });
  } else {
    console.log('NO USER');
    store.commit(types.LOGOUT);
  }
});

// getters
const getters = {
  getUser: state => state.user,
  getUserName: state => state.user.disaplayName,
  isLogged: state => !!state.user,
};

// actions
const actions = {
  login({ commit, state }, { email, password }) {
    commit(types.LOGIN_REQUEST, {});

    login(email, password)
      .then((user) => {
        commit(types.LOGIN_REQUEST, { user });
      })
      .catch((error) => {
        commit(types.LOGIN_FAILURE, { error });
      })
    ;
  },
};

// mutations
const mutations = {
  [types.LOGIN_REQUEST](state) {
    state.user = null;
    state.userStatus = null;
  },
  [types.LOGIN_SUCCESS](state, { user }) {
    state.user = user;
    state.userStatus = 'successful';
  },
  [types.LOGIN_FAILURE](state, { error }) {
    console.warn(types.LOGIN_FAILURE, { error });
    state.userStatus = 'failed';
  },
  [types.USER_CHANGED](state, { user }) {
    state.user = user;
    state.userStatus = 'successful';
  },
  [types.LOGOUT](state) {
    state.user = null;
    state.userStatus = 'successful';
  },
};

export default {
  state: storeState,
  getters,
  actions,
  mutations,
};
