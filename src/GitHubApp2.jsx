import { CustomButton } from './components/CustomButton'
import { CustomInput } from './components/CustomInput'
import { ImageSkeleton } from './components/ImageSkeleton'
import { END_POINT_URL } from './constants'
import { useGitHubAvatar } from './hooks/useGitHubAvatar'

function GitHubApp2 () {
  const {
    handleChange,
    handleSubmit,
    user,
    loginRef,
    login,
    loading,
    errores,
    avatar
  } = useGitHubAvatar()
  return (
    <form className='flex flex-col items-center gap-4' onSubmit={handleSubmit}>
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

      <div>
        {loading && <ImageSkeleton />}
        {avatar && <img className='object-cover w-64 h-64' src={avatar} alt={login} />}
        {errores && <div className='p-4 text-white bg-red-500 rounded-md'>{errores}</div>}
      </div>
    </form>
  )
}

export default GitHubApp2
