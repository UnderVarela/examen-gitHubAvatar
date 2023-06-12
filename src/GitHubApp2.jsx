import { CustomInput } from './components/CustomInput'

const END_POINT_URL = 'https//api.github.com/users/'
export function GitHubApp2 () {
  return (
    <fieldset>
      {
        END_POINT_URL
      }
      <CustomInput placeholder='nombre de usuario' />
    </fieldset>
  )
}
