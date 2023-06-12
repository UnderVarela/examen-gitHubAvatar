import React, { useState } from 'react'

export function GitHubApp () {
  const [username, setUsername] = useState('')
  const [userImage, setUserImage] = useState('')

  const handleChange = (event) => {
    setUsername(event.target.value)
  }

  const handleClick = async () => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`)
      const data = await response.json()
      setUserImage(data.avatar_url)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div>
      <p>Introduce un usuario de GitHub:</p>
      <input type='text' value={username} onChange={handleChange} />
      <button onClick={handleClick}>Load Photo</button>
      <div className='image-container'>
        {userImage && <img src={userImage} alt={username} />}
      </div>
    </div>
  )
}
