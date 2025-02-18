"use strict";
/**
 * product controller
 */
Object.defineProperty(exports, "__esModule", { value: true });
const strapi_1 = require("@strapi/strapi");
exports.default = strapi_1.factories.createCoreController('api::product.product', ({ strapi }) => ({
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
