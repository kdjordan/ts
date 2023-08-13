export const dateStringToDate = (dateString: string): Date => {
  const splitDate = dateString.
  split('/')
  .map((value: string): number => {
    return parseInt(value)
  })

  return new Date(splitDate[2], splitDate[1] - 1, splitDate[0]) 
  
}