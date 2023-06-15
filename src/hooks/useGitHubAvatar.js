import { useState, useRef } from 'react'
import { useForm } from './useForm'
import { INITIAL_VALUE_GITHUB, END_POINT_URL } from '../constants'
import { getData } from '../helpers/getData'

export function useGitHubAvatar () {
  const { user, handleChange } = useForm({ user: '' })
  const [userData, setUserData] = useState(INITIAL_VALUE_GITHUB)
  const { loading, avatar, login, errores } = userData

  const getGitHubAvatar = async (url) => {
    const clone = structuredClone(INITIAL_VALUE_GITHUB)
    setUserData({ ...clone, loading: true })

    try {
      const { avatar_url: urlAvatar, message } = await getData(url)
      // Si aparece la propiedad message: no encontró el usuario
      if (message) throw new Error(message)
      clone.avatar = urlAvatar
      clone.login = login
    } catch (error) {
      clone.errores = error.message
    } finally {
      clone.loading = false
      setUserData(clone)
    }
  }
  const loginRef = useRef(null)

  const handleSubmit = event => {
    event.preventDefault()
    if (!user.length) {
      loginRef.current.focus()
      return
    }
    getGitHubAvatar(END_POINT_URL + user)
    loginRef.current.select()
  }
  return {
    handleChange,
    handleSubmit,
    user,
    loginRef,
    login,
    loading,
    errores,
    avatar
  }
}
