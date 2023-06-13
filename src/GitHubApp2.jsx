import { CustomButton } from './components/CustomButton'
import { CustomInput } from './components/CustomInput'
import { useForm } from './hooks/useForm'
import { getData } from './helpers/getData'

const END_POINT_URL = 'https://api.github.com/users/'

export function GitHubApp2 () {
  const { user, handleChange } = useForm({ user: '' })
  const [data, setData] = useState({
    error: false,
    isLoading: false,
    data: null
  })

  const handleSubmit = async event => {
    event.preventDefault()
    const url = END_POINT_URL + user
    try {
      const data = await getData(url)
    } catch (error) {

    }

    await getData(url)
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
          name='user'
          value={user}
          placeholder='nombre de usuario'
          onChange={handleChange}
          required
        />
      </fieldset>
      <CustomButton>cargar foto</CustomButton>
    </form>
  )
}
