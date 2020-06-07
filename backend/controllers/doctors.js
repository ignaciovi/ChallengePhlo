const {getInputCoordinates, calculateOutputDoctors} = require('../utils/index')

const getDoctors = async (req) => {
  const postcode = req.query.postcode
  const inputCoordinates = await getInputCoordinates(postcode);
  const outputDoctors = calculateOutputDoctors(inputCoordinates.latitude, inputCoordinates.longitude)

  return outputDoctors
};

module.exports = {
  getDoctors
}
