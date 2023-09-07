import Axios from 'axios'
import { BASE_URL } from '@/constants'
import Swal from 'sweetalert2'

const axios = Axios.create({ baseURL: BASE_URL })
axios.interceptors.response.use(
  (response) => {
    return response
  },
  (e) => {
    handleError(e)
    throw new Error(e)
  }
)
function handleError(e) {
  const message = e.response?.data?.error?.message || 'Something went wrong'
  Swal.fire({
    title: 'Error!',
    text: message,
    icon: 'error',
    position: 'top-end',
    showConfirmButton: false,
    toast: true,
    timer: 6000
  })
  //
}
export default axios
