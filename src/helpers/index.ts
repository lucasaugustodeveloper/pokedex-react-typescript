export const capitalize = (value: string) => {
  if (typeof value !== 'string')
    return value
  if (!value)
    return value

  const arr = value.split('-')

  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
  }

  const result = arr.join(' ')

  return result
}
