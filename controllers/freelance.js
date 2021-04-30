const freelancersData = require('../models/freelancers')

function getFreelance(id) {
	return freelancersData.find((freelancer => freelancer.id === id))
}

module.exports = getFreelance
