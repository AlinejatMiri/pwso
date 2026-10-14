// Not-found page component, extracted from the web2zip React bundle.
function NotFoundPage() {
  return (0, M.jsx)(`section`, {
    className: `not-found`,
    children: (0, M.jsxs)(`div`, {
      className: `container`,
      children: [
        (0, M.jsx)(`span`, {
          className: `wheel nf-wheel`,
          "aria-hidden": `true`,
        }),
        (0, M.jsx)(`span`, {
          className: `number`,
          children: `404`,
        }),
        (0, M.jsx)(`h1`, {
          children: `Page not found`,
        }),
        (0, M.jsx)(`p`, {
          className: `lead`,
          children: `The page you are looking for has moved or does not exist.`,
        }),
        (0, M.jsxs)(`div`, {
          className: `btn-row`,
          style: {
            justifyContent: `center`,
          },
          children: [
            (0, M.jsx)(j, {
              to: `/`,
              className: `btn btn-primary`,
              children: `Back to home`,
            }),
            (0, M.jsx)(j, {
              to: `/contact`,
              className: `btn btn-secondary`,
              children: `Contact us`,
            }),
          ],
        }),
      ],
    }),
  });
}
