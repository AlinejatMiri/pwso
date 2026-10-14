// Programs page component, extracted from the web2zip React bundle.
function ProgramsPage() {
  let e = Si(Ci);
  return (0, M.jsxs)(`div`, {
    className: `page-programs`,
    children: [
      (0, M.jsx)(ii, {
        title: `Our programs`,
        path: `/programs`,
        description: `PWSO's five program areas: Health, Economic Empowerment, Education, Research & MEAL, and Agriculture & Climate.`,
      }),
      (0, M.jsx)(Br, {
        crumb: `Our programs`,
        parent: {
          to: `/programs`,
          label: `Our Work`,
        },
        title: (0, M.jsxs)(M.Fragment, {
          children: [
            `Opportunity grows through `,
            (0, M.jsx)(`em`, {
              children: `local action.`,
            }),
          ],
        }),
        lead: `Our programs connect health, education and livelihoods to support stronger, more resilient communities across Afghanistan.`,
        img: `./assets/img/gal-food.jpg`,
        imgAlt: `Women in gloves preparing tomatoes together around a table`,
      }),
      (0, M.jsxs)(`div`, {
        children: [
          (0, M.jsx)(`nav`, {
            className: `subnav`,
            "aria-label": `Programs`,
            children: (0, M.jsx)(`div`, {
              className: `container subnav-inner`,
              children: $n.map((t) =>
                (0, M.jsxs)(
                  `a`,
                  {
                    href: `#${t.id}`,
                    style: {
                      "--c": t.color,
                    },
                    className: e === t.id ? `is-active` : ``,
                    "aria-current": e === t.id ? `true` : void 0,
                    children: [
                      (0, M.jsx)(`span`, {
                        className: `subnav-icon`,
                        children: (0, M.jsx)(N, {
                          name: t.icon,
                          size: 13,
                          strokeWidth: 2,
                        }),
                      }),
                      t.title,
                    ],
                  },
                  t.id,
                ),
              ),
            }),
          }),
          (0, M.jsx)(`section`, {
            className: `section programs-list`,
            children: (0, M.jsx)(`div`, {
              className: `container`,
              children: $n.map((e, t) =>
                (0, M.jsxs)(
                  `article`,
                  {
                    id: e.id,
                    className: `program-panel rv ${t % 2 ? `is-reverse` : ``}`,
                    style: {
                      "--c": e.color,
                    },
                    children: [
                      (0, M.jsxs)(`div`, {
                        className: `program-panel-media`,
                        children: [
                          (0, M.jsx)(`img`, {
                            src: e.img,
                            alt: ``,
                            loading: t ? `lazy` : void 0,
                          }),
                          (0, M.jsx)(`span`, {
                            className: `program-num`,
                            children: String(t + 1).padStart(2, `0`),
                          }),
                        ],
                      }),
                      (0, M.jsxs)(`div`, {
                        className: `program-panel-body`,
                        children: [
                          (0, M.jsxs)(`div`, {
                            className: `program-panel-head`,
                            children: [
                              (0, M.jsx)(`span`, {
                                className: `prog-icon`,
                                children: (0, M.jsx)(N, {
                                  name: e.icon,
                                  size: 19,
                                  strokeWidth: 2,
                                }),
                              }),
                              (0, M.jsxs)(`div`, {
                                children: [
                                  (0, M.jsx)(`h2`, {
                                    children: e.title,
                                  }),
                                  (0, M.jsx)(`p`, {
                                    children: e.tagline,
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, M.jsx)(`p`, {
                            className: `program-text`,
                            children: e.text,
                          }),
                          (0, M.jsx)(`p`, {
                            className: `program-list-title`,
                            children: `What we do`,
                          }),
                          (0, M.jsx)(Kr, {
                            items: e.points,
                          }),
                          (0, M.jsx)(Wr, {
                            to: `/contact?category=Programs`,
                            children: `Ask about this program`,
                          }),
                          (0, M.jsx)(`img`, {
                            className: `program-art`,
                            src: `./assets/img/il/${e.id}.svg`,
                            alt: ``,
                            "aria-hidden": `true`,
                            loading: `lazy`,
                          }),
                        ],
                      }),
                    ],
                  },
                  e.id,
                ),
              ),
            }),
          }),
        ],
      }),
      (0, M.jsx)(Jr, {
        eyebrow: `Work with us`,
        title: (0, M.jsxs)(M.Fragment, {
          children: [
            `Collaborate on `,
            (0, M.jsx)(`em`, {
              children: `community‑led programs.`,
            }),
          ],
        }),
        text: `Partner with PWSO to support women and communities across Afghanistan.`,
        primary: {
          to: `/partnerships`,
          label: `Partner with us`,
        },
        secondary: {
          to: `/projects`,
          label: `See our projects`,
        },
      }),
    ],
  });
}
