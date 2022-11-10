// import {dataSug } from '../Mocks/mockSuggest'
import { dataSug } from "../mocks/mockSuggest"

export const getDataSuggest = () => {
  return new Promise((resolve, reject) => {
    return resolve(dataSug)
  })
}
