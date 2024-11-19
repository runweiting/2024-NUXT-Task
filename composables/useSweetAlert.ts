import Swal from 'sweetalert2'
import type { SweetAlertIcon } from 'sweetalert2'

export function useSweetAlert() {
  function showToast(icon: SweetAlertIcon, message: string) {
    return new Promise<void>((resolve) => {
      const Toast = Swal.mixin({
        toast: true,
        position: 'bottom-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: false,
        didOpen: (toast: any) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      Toast.fire({
        icon,
        title: message
      }).then(() => {
        resolve()
      })
    })
  }
  function errorToast(message: string) {
    showToast('error', message)
  }
  function warningToast(message: string) {
    showToast('warning', message)
  }
  function successToast(message: string) {
    showToast('success', message)
  }
  return {
    errorToast,
    warningToast,
    successToast
  }
}
