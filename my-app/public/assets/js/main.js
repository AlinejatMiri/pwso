// Mount the shared React application after loading its page components and routes.
var Qi = In;
(0, Jn.createRoot)(document.getElementById(`root`)).render(
  (0, M.jsx)(x.StrictMode, {
    children: (0, M.jsx)(Qi, {
      children: (0, M.jsx)(AppRoutes, {}),
    }),
  }),
);
