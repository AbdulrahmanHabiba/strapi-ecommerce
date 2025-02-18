"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    routes: [
        {
            method: "DELETE",
            path: "/carts/item/:id", // مسار لحذف عنصر معين باستخدام ID
            handler: "cart.delete",
            config: {
                auth: false, // يمكن تعديلها لتكون `true` إذا كنت بحاجة للتحقق من المستخدم
            },
        },
        {
            method: "DELETE",
            path: "/delete-carts", // مسار لحذف جميع العناصر في السلة
            handler: "cart.deleteAll",
            config: {
                auth: false, // يمكن تعديلها لتكون `true` إذا كنت بحاجة للتحقق من المستخدم
            },
        },
    ],
};
