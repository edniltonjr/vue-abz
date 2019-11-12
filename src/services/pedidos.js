import { http } from './config'

export default {
  listar: (numped) => {
    return http.get('/atv/' + numped)
  }
}
