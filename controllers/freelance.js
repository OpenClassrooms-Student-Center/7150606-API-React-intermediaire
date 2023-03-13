const freelancesData = require('../models/freelances')

function getFreelance(id) {
	return freelancesData.find((freelancer => freelancer.id === id))
	// Comments
	// 1. The find() method returns the value of the first element in the provided array that satisfies the provided testing function.
}

module.exports = getFreelance
