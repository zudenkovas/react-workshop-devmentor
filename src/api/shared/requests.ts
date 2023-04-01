import axios, { AxiosResponse } from 'axios'
const API_URL = 'https://disease.sh/v3/covid-19'

export const get = async <T>(query: string): Promise<AxiosResponse<T>> =>
    axios.get(`${API_URL}${query}`)
