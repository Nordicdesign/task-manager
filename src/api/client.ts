import axios from 'axios'
import { env } from '../config/configuration'

const config = env()

const client = axios.create({
  baseURL: `${config.api.apiHost}/v${config.api.apiVersion}`,
})

export default client
