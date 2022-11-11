import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { collection, getDocs, addDoc } from "@firebase/firestore"
import { db } from "../../../firebase"

const Tweets = createSlice({
  name: "FilterListTweet",
  initialState: { status: "idle", listTweet: [] },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchlistTweet.pending, (state, action) => {
        state.status = "loading"
      })
      .addCase(fetchlistTweet.fulfilled, (state, action) => {
        state.listTweet = action.payload
        state.status = "idle"
      })
      .addCase(addNewStatus.fulfilled, (state, action) => {
        state.listTweet.push(action.payload)
      })
  }
})

const { reducer, actions } = Tweets
export default reducer

// get api

export const fetchlistTweet = createAsyncThunk("fetchlistTweet", async () => {
  const data = await getDocs(collection(db, "tweets"))
  let dataList = []
  data.forEach(el => {
    dataList.push(el.data())
  })
  return dataList
})

// add Status

export const addNewStatus = createAsyncThunk("addNewStatus", async newStatus => {
  const collectionRef = collection(db, "tweets")
  await addDoc(collectionRef, newStatus)
  return newStatus
})
