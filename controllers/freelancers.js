const freelancersData = require('../models/freelancers')

function getFreelancers() {
	return freelancersData.map(({ id, name, job, picture }) => ({
		id,
		name, 
		job, 
		picture
	}))
}

module.exports = getFreelancers
