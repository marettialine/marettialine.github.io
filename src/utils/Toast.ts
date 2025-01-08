import { toast } from 'react-toastify'

export const throwToast = {
  error: function (txt: string) {
    toast.error(txt, { className: 'toast-error' })
  },
  success: function (txt: string) {
    toast.success(txt, { className: 'toast-success' })
  },
  info: function (txt: string) {
    toast.info(txt, { className: 'toast-info' })
  },
  warning: function (txt: string) {
    toast.warn(txt, { className: 'toast-warn' })
  },
}
