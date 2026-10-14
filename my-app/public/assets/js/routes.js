// Client-side page routes; page component scripts are loaded before this file.
function AppRoutes() {
  return (0, M.jsx)(Xt, {
    children: (0, M.jsxs)(Jt, {
      element: (0, M.jsx)(Tr, {}),
      children: [
        (0, M.jsx)(Jt, {
          index: !0,
          element: (0, M.jsx)(HomePage, {}),
        }),
        (0, M.jsx)(Jt, {
          path: `about`,
          element: (0, M.jsx)(AboutPage, {}),
        }),
        (0, M.jsx)(Jt, {
          path: `about/leadership`,
          element: (0, M.jsx)(LeadershipPage, {}),
        }),
        (0, M.jsx)(Jt, {
          path: `programs`,
          element: (0, M.jsx)(ProgramsPage, {}),
        }),
        (0, M.jsx)(Jt, {
          path: `priorities`,
          element: (0, M.jsx)(PrioritiesPage, {}),
        }),
        (0, M.jsx)(Jt, {
          path: `projects`,
          element: (0, M.jsx)(ProjectsPage, {}),
        }),
        (0, M.jsx)(Jt, {
          path: `resources`,
          element: (0, M.jsx)(ResourcesPage, {}),
        }),
        (0, M.jsx)(Jt, {
          path: `news`,
          element: (0, M.jsx)(NewsPage, {}),
        }),
        (0, M.jsx)(Jt, {
          path: `careers`,
          element: (0, M.jsx)(CareersPage, {}),
        }),
        (0, M.jsx)(Jt, {
          path: `partnerships`,
          element: (0, M.jsx)(PartnershipsPage, {}),
        }),
        (0, M.jsx)(Jt, {
          path: `contact`,
          element: (0, M.jsx)(ContactPage, {}),
        }),
        (0, M.jsx)(Jt, {
          path: `*`,
          element: (0, M.jsx)(NotFoundPage, {}),
        }),
      ],
    }),
  });
}
