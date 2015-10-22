const initial = {
  num: 5,
};
const handlers = {
  INC(sum) {
    sum.num += 1;
    return sum;
  }
};
function reducer(state = initial, action) {
  if (handlers[action.type]) {
    return handlers[action.type](state);
  }
  return state;
}

module.exports = reducer;
