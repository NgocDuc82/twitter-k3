import {dataSug } from '../Mocks/mockSuggest'


export const getDataSuggest = () => {
    return new Promise((resolve, reject) => {
        return resolve(dataSug)
    })
}