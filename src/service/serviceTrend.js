import {dataTrend } from '../mocks/mockTrend'


export const getDataTrending = () => {
    return new Promise((resolve, reject) => {
        return resolve(dataTrend)
    })
}