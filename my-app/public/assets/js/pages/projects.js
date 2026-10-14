// Projects page component, extracted from the web2zip React bundle.
function ProjectsPage() {
  let [e, t] = (0, x.useState)(Oi),
    [n, r] = (0, x.useState)(``),
    i = (0, x.useMemo)(() => {
      let t = n.trim().toLowerCase();
      return nr.filter(
        (n) =>
          (e === Oi || n.category === e) &&
          (!t ||
            [n.title, n.location, n.funder, n.category]
              .join(` `)
              .toLowerCase()
              .includes(t)),
      );
    }, [e, n]),
    a = nr[0];
  return (0, M.jsxs)(`div`, {
    className: `page-projects`,
    children: [
      (0, M.jsx)(ii, {
        title: `Projects`,
        path: `/projects`,
        description: `Documented PWSO projects: food processing and marketing training (Badakhshan, 2018), awareness of harmful traditional practices (Badakhshan, 2019) and organizational capacity strengthening (Kabul).`,
      }),
      (0, M.jsx)(Br, {
        crumb: `Projects`,
        parent: {
          to: `/programs`,
          label: `Our Work`,
        },
        title: (0, M.jsxs)(M.Fragment, {
          children: [
            `Our work, `,
            (0, M.jsx)(`em`, {
              children: `clearly documented.`,
            }),
          ],
        }),
        lead: `Explore the initiatives recorded in PWSO's organization profile, with where they took place, who took part and who supported them.`,
        img: `./assets/img/projects-hero.jpg`,
      }),
      (0, M.jsx)(`section`, {
        className: `section`,
        children: (0, M.jsxs)(`div`, {
          className: `container`,
          children: [
            (0, M.jsxs)(`div`, {
              className: `toolbar`,
              children: [
                (0, M.jsx)(Qr, {
                  items: ki,
                  value: e,
                  onChange: t,
                  label: `Filter projects by category`,
                }),
                (0, M.jsx)($r, {
                  value: n,
                  onChange: r,
                  placeholder: `Search projects`,
                  label: `Search projects`,
                }),
              ],
            }),
            (0, M.jsxs)(`p`, {
              className: `result-count`,
              "aria-live": `polite`,
              children: [
                `Showing `,
                i.length,
                ` of `,
                nr.length,
                ` documented projects`,
              ],
            }),
            i.length
              ? (0, M.jsx)(`div`, {
                  className: `grid cols-3`,
                  children: i.map((e) =>
                    (0, M.jsx)(
                      Ai,
                      {
                        p: e,
                      },
                      e.id,
                    ),
                  ),
                })
              : (0, M.jsx)(ei, {
                  icon: `search`,
                  title: `No projects match your search`,
                  text: `Try a different keyword or show all categories.`,
                  children: (0, M.jsx)(`button`, {
                    className: `btn btn-secondary btn-sm`,
                    onClick: () => {
                      (t(Oi), r(``));
                    },
                    children: `Clear filters`,
                  }),
                }),
          ],
        }),
      }),
      (0, M.jsx)(`section`, {
        className: `section section-tint`,
        children: (0, M.jsxs)(`div`, {
          className: `container split featured`,
          children: [
            (0, M.jsx)(`div`, {
              className: `media`,
              children: (0, M.jsx)(`img`, {
                src: `./assets/img/projects-featured.jpg`,
                alt: `Women preparing pickles during the food processing training`,
                loading: `lazy`,
              }),
            }),
            (0, M.jsxs)(`div`, {
              children: [
                (0, M.jsx)(zr, {
                  children: `Featured project`,
                }),
                (0, M.jsx)(`h2`, {
                  children: a.title,
                }),
                (0, M.jsxs)(`ul`, {
                  className: `meta featured-meta`,
                  children: [
                    (0, M.jsxs)(`li`, {
                      children: [
                        (0, M.jsx)(N, {
                          name: `pin`,
                          size: 14,
                        }),
                        a.location,
                      ],
                    }),
                    (0, M.jsxs)(`li`, {
                      children: [
                        (0, M.jsx)(N, {
                          name: `calendar`,
                          size: 14,
                        }),
                        a.year,
                      ],
                    }),
                    (0, M.jsxs)(`li`, {
                      children: [
                        (0, M.jsx)(N, {
                          name: `clock`,
                          size: 14,
                        }),
                        a.duration,
                      ],
                    }),
                  ],
                }),
                (0, M.jsx)(`p`, {
                  className: `section-text`,
                  children: a.summary,
                }),
                (0, M.jsxs)(`dl`, {
                  className: `featured-facts`,
                  children: [
                    (0, M.jsxs)(`div`, {
                      children: [
                        (0, M.jsx)(`dt`, {
                          children: `Participants`,
                        }),
                        (0, M.jsx)(`dd`, {
                          children: a.reach,
                        }),
                      ],
                    }),
                    (0, M.jsxs)(`div`, {
                      children: [
                        (0, M.jsx)(`dt`, {
                          children: `Investment`,
                        }),
                        (0, M.jsx)(`dd`, {
                          children: a.investment,
                        }),
                      ],
                    }),
                    (0, M.jsxs)(`div`, {
                      children: [
                        (0, M.jsx)(`dt`, {
                          children: `Training focus`,
                        }),
                        (0, M.jsx)(`dd`, {
                          children: a.focus,
                        }),
                      ],
                    }),
                    (0, M.jsxs)(`div`, {
                      children: [
                        (0, M.jsx)(`dt`, {
                          children: `Supported by`,
                        }),
                        (0, M.jsx)(`dd`, {
                          children: a.funder,
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
      (0, M.jsx)(`section`, {
        className: `section section-tight`,
        children: (0, M.jsx)(`div`, {
          className: `container`,
          children: (0, M.jsx)(Yr, {
            title: `The complete organization profile`,
            text: `Our official profile includes our mission, structure and full details of documented projects.`,
          }),
        }),
      }),
      (0, M.jsx)(Jr, {
        eyebrow: `Project inquiry`,
        title: (0, M.jsxs)(M.Fragment, {
          children: [
            `Interested in `,
            (0, M.jsx)(`em`, {
              children: `our projects?`,
            }),
          ],
        }),
        text: `Get in touch to learn more about our work and explore opportunities to collaborate.`,
        primary: {
          to: `/contact`,
          label: `Start a conversation`,
        },
        secondary: {
          to: `/programs`,
          label: `Our programs`,
        },
      }),
    ],
  });
}
