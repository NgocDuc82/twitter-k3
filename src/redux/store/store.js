import { configureStore } from '@reduxjs/toolkit'
import statusReducer from '../../components/home/status/statusSlice'
import tweetsSlice from '../../components/home/tweets/tweetsSlice'
const rootReducer = {
    // Tweets : statusReducer,
    Tweets : tweetsSlice,
}

const store = configureStore({
    reducer: rootReducer,
})

export default store