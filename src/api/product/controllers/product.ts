/**
 * product controller
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::product.product', ({ strapi }) => ({
    async findOne(ctx) {
        const { id } = ctx.params;
        const entity = await strapi.entityService.findOne('api::product.product', id, {
            populate: '*',
        });

        if (!entity) {
            return ctx.notFound('Product not found');
        }

        return ctx.send(entity);
    },
}));
