import { ToastContainer as ToastApp } from 'react-toastify'

import { ToastContainer } from './styles'

export function Toast() {
  return (
    <ToastContainer>
      <ToastApp
        position="top-right"
        autoClose={7000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        style={{ top: '7rem' }}
      />
    </ToastContainer>
  )
}
