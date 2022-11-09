import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import { useState, useEffect } from "react";
import { collection, onSnapshot } from "@firebase/firestore";
import {db} from '../../../firebase';
// useEffect(() => {
  //   onSnapshot(collection(db, "tweets"), (snapshot) => {
  //     console.log(snapshot.docs.map((doc) => doc.data()));
  //   });
  // });
  // useEffect(() => {
  //   onSnapshot(collection(db, "comment"), (snapshot) => {
  //     console.log(snapshot.docs.map((doc) => doc.data()));
  //   });
const Status = createSlice({
    name: 'upStatus',
    initialState: [],
    reducers: {
        upStatus: (state, action) => {
            state.push(action.payload);
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchListTweets)
    }
});

const { reducer, actions } = Status;
export const { upStatus } = actions;
export default reducer


export const fetchListTweets = createAsyncThunk('fetchListTweets', async () => {
    const getAPi = onSnapshot(collection(db, "tweets"), (snapshot) => {
            snapshot.docs.map((doc) => doc.data())
          });
    const res = await getAPi();
    console.log(res);
})

// action bình thường là 1 object
// thuk action : là 1 funtion và thuk action creator () => { return thukaction}

// export function UpTweet(tweet) {
//     return function UpTweetThuk(dispatch , getState){
//         console.log('addTodos',getState());
//         console.log({tweet});

//         // custom action
//         dispatch(upStatus(tweet));

//         console.log("addtodo after ", getState());
//     }
    
// }

