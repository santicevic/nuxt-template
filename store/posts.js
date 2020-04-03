export const state = () => ({
  list: []
});

export const mutations = {
  add(state, title) {
    state.list.push(title);
  }
};

export const getters = {
  get(state) {
    return state.list;
  }
};
