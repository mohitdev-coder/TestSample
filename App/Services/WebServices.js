import axios from './AxiosApi'

const apiServices = {
  getSites () {
    return new Promise((resolve) => {
      axios.get('decom_uploads/external/sites.json')
        .then(response => { resolve(response) })
        .catch(err => { resolve(err) })
    })
  },
}
export default apiServices
