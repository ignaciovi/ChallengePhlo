const {doctors} = require('../data/index')

const getDoctors = (data, response) => {
  return doctors
};

module.exports = {
  getDoctors
}