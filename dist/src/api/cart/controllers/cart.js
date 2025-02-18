"use strict";
/**
 * cart controller
 */
Object.defineProperty(exports, "__esModule", { value: true });
const strapi_1 = require("@strapi/strapi");
exports.default = strapi_1.factories.createCoreController("api::cart.cart", ({ strapi }) => ({
    // حذف عنصر واحد باستخدام الـ ID
    async delete(ctx) {
        try {
            const { id } = ctx.params; // أخذ الـ ID من الـ params
            // التحقق مما إذا كان العنصر موجودًا
            const item = await strapi.entityService.findOne("api::cart.cart", id);
            if (!item) {
                return ctx.notFound("Cart item not found");
            }
            // تنفيذ الحذف
            await strapi.entityService.delete("api::cart.cart", id);
            return ctx.send({ message: "Item deleted successfully" });
        }
        catch (err) {
            console.error("Error deleting cart item:", err);
            return ctx.internalServerError("Failed to delete cart item");
        }
    },
    // حذف جميع العناصر في السلة
    async deleteAll(ctx) {
        try {
            const { email } = ctx.query; // استخدام query للحصول على الـ email
            // تحقق من وجود email
            const cartItems = await strapi.db.query("api::cart.cart").findMany({
                where: {
                    email: email, // فلترة العناصر باستخدام email
                },
            });
            if (!cartItems.length) {
                return ctx.notFound("No cart items found for this email");
            }
            // حذف العناصر
            await strapi.db.query("api::cart.cart").deleteMany({
                where: {
                    email: email, // الحذف بناءً على email
                },
            });
            return ctx.send({ message: "All cart items deleted successfully for this email" });
        }
        catch (err) {
            console.error("Error deleting cart items by email:", err);
            return ctx.internalServerError("Failed to delete cart items by email");
        }
    },
}));
