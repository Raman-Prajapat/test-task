export const isUserLoggedIn = () => {
  if (localStorage.hasOwnProperty('user'))
    return true
  return false
}

export const cutString = (string, length) => {
  var cut = string.indexOf(' ', length);
  if (cut === -1) return string;
  return string.substring(0, cut) + ('...')
}

export const isEmptyObject = (_object)=>{
  return Object.keys(_object).length === 0 && _object.constructor === Object;
}
