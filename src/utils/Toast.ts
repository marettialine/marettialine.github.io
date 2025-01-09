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
  promise: function <T>(
    promise: Promise<T>,
    txtPending: string,
    txtSuccess: string,
    txtError: string,
  ) {
    return toast.promise(promise, {
      pending: {
        render: txtPending,
        className: 'toast-pending',
      },
      success: {
        render: txtSuccess,
        className: 'toast-success',
      },
      error: {
        render: txtError,
        className: 'toast-error',
      },
    })
  },
}
