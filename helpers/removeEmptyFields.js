function removeEmptyFields(obj) {
  const newObje = {};
  Object.entries(obj).forEach((keyValue) => {
    const [key, value] = keyValue;
    if (value) newObje[key] = value;
  });

  return newObje;
}

module.exports = removeEmptyFields;
