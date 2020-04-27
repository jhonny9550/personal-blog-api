import joi from 'joi';

export const completedPostSchema = joi.object({
  date: joi.date().required(),
  content: joi.string().required(),
  title: joi.string().required(),
  description: joi.string().required(),
  thumbnail: joi.string().uri({ scheme: ['http', 'https'] }),
});

export default { completedPostSchema };
