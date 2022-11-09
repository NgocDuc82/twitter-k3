import { createSelector } from '@reduxjs/toolkit';

export const listTweetelector = (state)  =>  state.Tweet.listTweet;

export const todoRemaningSelector = createSelector(listTweetelector,(listTweet) => {
    return listTweet
})