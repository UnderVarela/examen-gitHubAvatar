import { CustomButton } from './components/CustomButton'
import { CustomInput } from './components/CustomInput'
import { useForm } from './hooks/useForm'
import { getData } from './helpers/getData'
import { useRef, useState } from 'react'

const END_POINT_URL = 'https://api.github.com/users/'

const initialValue = {
  loading: false,
  avatar: '',
  errores: null
}
export function GitHubApp2 () {
  const { user, handleChange } = useForm({ user: '' })
  const [userData, setUserData] = useState(initialValue)
  const { loading, avatar, errores } = userData
  const loginRef = useRef(null)
  const handleSubmit = async event => {
    event.preventDefault()
    if (!user.length) {
      loginRef.current.focus()
      return
    }

    setUserData({ ...initialValue, loading: true })

    const clone = structuredClone(userData)
    const url = END_POINT_URL + user
    try {
      const { avatar_url: urlAvatar, message } = await getData(url)
      // Si aparece la propiedad message no encontró el usuario
      if (message) throw new Error(message)
      clone.avatar = urlAvatar
    } catch (error) {
      clone.errores = error.message
    } finally {
      clone.loading = false
      setUserData(clone)
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <fieldset className='flex items-center gap-1'>
        <span>
          {
            END_POINT_URL
          }
        </span>
        <CustomInput
          ref={loginRef}
          name='user'
          value={user}
          placeholder='nombre de usuario'
          onChange={handleChange}
        />
      </fieldset>
      <CustomButton>cargar foto</CustomButton>
      {
        loading && 'Cargando...'
      }
      {
        errores
      }
      <img src={avatar} alt='' />
    </form>
  )
}
