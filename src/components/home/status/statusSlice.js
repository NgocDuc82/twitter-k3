import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs } from "@firebase/firestore";
import { db } from "../../../firebase";

const Status = createSlice({
  name: "upStatus",
  initialState: {status: 'idle', listTweet : []},
  reducers: {
    upStatus: (state, action) => {
      state.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchlistTweet.pending, (state, action) => {
        state.status =  "loading" ;
    }).addCase(fetchlistTweet.fulfilled, (state, action) => {
      // console.log({action});
        state.listTweet = action.payload  ;
        state.status = "idle";
    })
  },
});

const { reducer, actions } = Status;
export const { upStatus } = actions;
export default reducer;

export const fetchlistTweet = createAsyncThunk("fetchlistTweet", async () => {
  // const a =  await onSnapshot(collection(db, "tweets"), (snapshot) => {
  //   return snapshot.docs.map((doc) => doc.data())
  // }); 
  // console.log(a());
 
  const data = await getDocs(collection(db,"tweets")) 
  let dataList = []
  data.forEach(el => {
    // console.log(el.data());
     dataList.push(el.data())
    
  })
  console.log(dataList);
  return dataList
});


// action bình thường là 1 object
// thuk action : là 1 funtion và thuk action creator () => { return thukaction}

export function UpTweet(tweet) {
  return function UpTweetThuk(dispatch, getState) {
    console.log("addTodos", getState());
    console.log({ tweet });
    // custom action
    dispatch(upStatus(tweet));
    console.log("addtodo after ", getState());
  };
}
