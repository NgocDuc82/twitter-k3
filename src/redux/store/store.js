import { configureStore } from '@reduxjs/toolkit'
import tweetsSlice from '../../components/home/tweets/tweetsSlice'
const rootReducer = {
    Tweets : tweetsSlice,
}

const store = configureStore({
    reducer: rootReducer,
})

export default store