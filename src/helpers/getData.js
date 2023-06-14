// Función pura: una función que entrando unos valores solo puede devolver los mismos resultados
export const getData = async (url) => {
  const response = await fetch(url)
  const data = await response.json()
  // console.log(data)
  return data
}
