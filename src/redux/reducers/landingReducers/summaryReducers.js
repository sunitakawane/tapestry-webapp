const initialState = {
  tests_comp : null,
  your_tests : null,
  samp_tested : null,
  your_samp : null,
  pos_samp : null,
  und_samp : null,
};

export default function summaryReducer(state=initialState, action) {
  switch(action.type){
    default: return state;
  }
}