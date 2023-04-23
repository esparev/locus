const Joi = require('joi');

const id = Joi.number().integer().min(1);
const slug = Joi.string().min(1).max(255);
const name = Joi.string().min(1).max(255);
const placeId = Joi.number().integer().min(1);

const getCategorySchema = Joi.object({
	id: id.required(),
});

const createCategorySchema = Joi.object({
	name: name.required(),
	slug: slug.required(),
	placeId: placeId.required(),
});

const updateCategorySchema = Joi.object({
	name,
	slug,
	placeId,
});

module.exports = {
	getCategorySchema,
	createCategorySchema,
	updateCategorySchema,
};
