import { AuthService } from '../../../services/authService'
// import SweatAlert from '../../sweatAlert'

export const loginActions = (data, history) => async (dispatch) => {
  try {
    const response = await AuthService.login(data)
    dispatch({ type: 'LOGIN', payload: response.data })
    // SweatAlert(response.message, 'success')
    history('/')
  } catch (error) {
    // SweatAlert(String(error.response.message), 'warning')
  }
}

export const loginGoogleActions = (data, history) => async (dispatch) => {
  try {
    const response = await AuthService.loginGoogle(data)
    dispatch({ type: 'LOGIN', payload: response.data })
    // SweatAlert(response.message, 'success')
    history('/')
  } catch (error) {
    // SweatAlert('test','warning')
  }
}

export const verifyAccountActions = (data, history) => async (dispatch) => {
  try {
    await AuthService.verifyAccount(data)
    // SweatAlert('Verified Account', 'success')
    history('/login')
  } catch (error) {
    // SweatAlert(String(error.response.message), 'warning')
  }
}

export const logoutActions = (history) => async (dispatch) => {
  try {
    const response = await AuthService.logout()
    dispatch({ type: 'LOGOUT', payload: response })
    // SweatAlert('Berhasil Logout', 'success')
    history('/')
  } catch (error) {
    // SweatAlert(String(error.response.message), 'warning')
  }
}
