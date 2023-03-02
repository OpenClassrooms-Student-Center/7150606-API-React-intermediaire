const freelancesData = require('../models/freelances')

function getFreelances() {
	return freelancesData.map(({ id, name, job, picture,tjm, jobType }) => ({
		id,
		name, 
		job, 
		picture,
		tjm,
		jobType
	}))
}

module.exports = getFreelances
