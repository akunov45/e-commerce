export const ROUTES = {
  HOME: "/",
  CONTACTS: "/contacts",
  NEWS: "/news",
  PROFILE: "/wish-list",
  WISHLIST: "/profile",
  ABOUTUS: "/about-us",
  NOTFOUND: "/*",
};

export const headerRoutes = [
  { name: "О нас", path: ROUTES.ABOUTUS, disabled: false },
  { name: "Новости и события", path: ROUTES.NEWS, disabled: false },
];
