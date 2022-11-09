import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs } from "@firebase/firestore";
import { db } from "../../../firebase";

const Tweets = createSlice({
  name: "FilterListTweet",
  initialState: {status: 'idle', listTweet : []},
  reducers: {
  
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

const { reducer, actions } = Tweets;
export const { FilterListTweet } = actions;
export default reducer;

export const fetchlistTweet = createAsyncThunk("fetchlistTweet", async () => {
  const data = await getDocs(collection(db,"tweets")) 
  let dataList = []
  data.forEach(el => {
     dataList.push(el.data())
  })
  console.log(dataList);
  return dataList
});


// export function UpTweet(tweet) {
//     return function UpTweetThuk(dispatch, getState) {
//       dispatch(FilterListTweet(tweet));
//     };
//   }