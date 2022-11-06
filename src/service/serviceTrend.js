import {dataTrend } from '../Mocks/mockTrend'


export const getDataTrending = () => {
    return new Promise((resolve, reject) => {
        return resolve(dataTrend)
    })
}