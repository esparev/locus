const Joi = require('joi');

const id = Joi.number().integer().min(1);
const name = Joi.string().min(1).max(255);

const getCategorySchema = Joi.object({
	id: id.required(),
});

const createCategorySchema = Joi.object({
	name: name.required(),
});

const updateCategorySchema = Joi.object({
	name: name,
});

module.exports = {
	getCategorySchema,
	createCategorySchema,
	updateCategorySchema,
};
