export const ROUTES = {
  HOME: "/",
  PAYMENT_DELIVERY: "/payment-delivery",
  REFUND: "/refund",
  CONTACTS: "/contacts",
  NEWS: "/news",
  PROFILE: "/wish-list",
  WISHLIST: "/profile",
};

export const headerRoutes = [
  { name: "Оплата и доставка", path: ROUTES.PAYMENT_DELIVERY , isShow: true},
  { name: "Возврат", path: ROUTES.REFUND, isShow: true },
  { name: "Контакты", path: ROUTES.CONTACTS , isShow: true},
  { name: "Новости и события", path: ROUTES.NEWS, isShow: true },
];
