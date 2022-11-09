import { configureStore } from '@reduxjs/toolkit'
import statusReducer from '../../components/home/status/statusSlice'
const rootReducer = {
    Tweet : statusReducer,
}

const store = configureStore({
    reducer: rootReducer,
})

export default store