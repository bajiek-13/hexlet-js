export default (obj, key, value) => {
  if (!(key in obj)) {
    obj[key] = value
  }
}

