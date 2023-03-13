const freelancesData = require('../models/freelances')

function getFreelance(id) {
	return freelancesData.find((freelancer => freelancer.id === id))
	// Comments
}

module.exports = getFreelance
