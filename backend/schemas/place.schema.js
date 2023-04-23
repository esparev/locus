const Joi = require('joi');

const id = Joi.number().integer().min(1);
const slug = Joi.string().min(1).max(255);
const name = Joi.string().min(1).max(255);
const description = Joi.string().min(1).max(1000);
const country = Joi.string().min(1).max(255);
const city = Joi.string().min(1).max(255);
const image = Joi.string().uri();
const createdAt = Joi.string().isoDate();
const rating = Joi.number().integer().min(1).max(1);
const dangerLevel = Joi.number().integer().min(1).max(1);

const getPlaceSchema = Joi.object({
	id: id.required(),
});

const createPlaceSchema = Joi.object({
	name: name.required(),
	slug: slug.required(),
	description: description.required(),
	country: country.required(),
	city: city.required(),
	image,
	createdAt,
	rating,
	dangerLevel,
});

const updatePlaceSchema = Joi.object({
	name,
	slug,
	description,
	country,
	city,
	image,
	createdAt,
	rating,
	dangerLevel,
});

module.exports = { getPlaceSchema, createPlaceSchema, updatePlaceSchema };
