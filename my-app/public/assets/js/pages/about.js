// About page component, extracted from the web2zip React bundle.
function AboutPage() {
  return (0, M.jsxs)(`div`, {
    className: `page-about`,
    children: [
      (0, M.jsx)(ii, {
        title: `Who we are`,
        path: `/about`,
        description: `PWSO's story since 2017, our mission and vision, values and governance, and our offices in Kabul and Badakhshan.`,
      }),
      (0, M.jsx)(Br, {
        crumb: `Who we are`,
        parent: {
          to: `/about`,
          label: `About`,
        },
        title: (0, M.jsxs)(M.Fragment, {
          children: [
            `Afghan roots. `,
            (0, M.jsx)(`em`, {
              children: `Shared commitment.`,
            }),
          ],
        }),
        lead: `The ${P.name} (${P.short}) is an Afghan non-profit working alongside women and vulnerable communities to build a resilient, self-reliant Afghanistan.`,
        img: `./assets/img/about-hero.jpg`,
        imgAlt: `Women learning together in a classroom`,
      }),
      (0, M.jsx)(`section`, {
        className: `section`,
        children: (0, M.jsxs)(`div`, {
          className: `container`,
          children: [
            (0, M.jsx)(Ur, {
              num: `01`,
              title: (0, M.jsxs)(M.Fragment, {
                children: [
                  `Our `,
                  (0, M.jsx)(`em`, {
                    children: `story`,
                  }),
                ],
              }),
              sub: `Where our journey began`,
              aside: (0, M.jsx)(`img`, {
                className: `story-art`,
                src: `./assets/img/il/community.svg`,
                alt: ``,
                "aria-hidden": `true`,
                loading: `lazy`,
              }),
              children: (0, M.jsx)(Kr, {
                items: vi,
              }),
            }),
            (0, M.jsx)(Ur, {
              id: `mission`,
              num: `02`,
              title: (0, M.jsxs)(M.Fragment, {
                children: [
                  `Mission & `,
                  (0, M.jsx)(`em`, {
                    children: `vision`,
                  }),
                ],
              }),
              sub: `What we work toward`,
              children: (0, M.jsxs)(`div`, {
                className: `mv-grid`,
                children: [
                  (0, M.jsxs)(`div`, {
                    className: `mv-card`,
                    children: [
                      (0, M.jsx)(`span`, {
                        className: `icon-circle`,
                        children: (0, M.jsx)(N, {
                          name: `target`,
                          size: 20,
                        }),
                      }),
                      (0, M.jsx)(`p`, {
                        className: `mv-label`,
                        children: `Our mission`,
                      }),
                      (0, M.jsx)(`p`, {
                        className: `mv-text`,
                        children: `To support Afghan women and vulnerable communities through education, health, social welfare, empowerment and research for sustainable livelihoods.`,
                      }),
                    ],
                  }),
                  (0, M.jsxs)(`div`, {
                    className: `mv-card mv-card-dark`,
                    children: [
                      (0, M.jsx)(`span`, {
                        className: `icon-circle`,
                        children: (0, M.jsx)(N, {
                          name: `eye`,
                          size: 20,
                        }),
                      }),
                      (0, M.jsx)(`p`, {
                        className: `mv-label`,
                        children: `Our vision`,
                      }),
                      (0, M.jsx)(`p`, {
                        className: `mv-text mv-text-xl`,
                        children: `Resilient and self‑reliant communities.`,
                      }),
                    ],
                  }),
                ],
              }),
            }),
            (0, M.jsx)(Ur, {
              num: `03`,
              title: (0, M.jsxs)(M.Fragment, {
                children: [
                  `Our `,
                  (0, M.jsx)(`em`, {
                    children: `values`,
                  }),
                ],
              }),
              sub: `What guides our work, every day`,
              children: (0, M.jsx)(`div`, {
                className: `values-grid`,
                children: yi.map((e) =>
                  (0, M.jsxs)(
                    `div`,
                    {
                      className: `value`,
                      children: [
                        (0, M.jsxs)(`h3`, {
                          children: [
                            (0, M.jsx)(N, {
                              name: e.icon,
                              size: 18,
                              strokeWidth: 1.9,
                            }),
                            e.title,
                          ],
                        }),
                        (0, M.jsx)(`p`, {
                          children: e.text,
                        }),
                      ],
                    },
                    e.title,
                  ),
                ),
              }),
            }),
            (0, M.jsx)(Ur, {
              id: `governance`,
              num: `04`,
              title: (0, M.jsxs)(M.Fragment, {
                children: [
                  `Our `,
                  (0, M.jsx)(`em`, {
                    children: `governance`,
                  }),
                ],
              }),
              sub: `How we are organized`,
              aside: (0, M.jsx)(`p`, {
                className: `panel-note`,
                children: `Clear roles and oversight help us use resources responsibly and stay accountable to communities, partners and authorities.`,
              }),
              children: (0, M.jsxs)(M.Fragment, {
                children: [
                  (0, M.jsx)(`ol`, {
                    className: `org-chart`,
                    children: bi.map((e) =>
                      (0, M.jsxs)(
                        `li`,
                        {
                          children: [
                            (0, M.jsx)(`span`, {
                              className: `org-icon`,
                              children: (0, M.jsx)(N, {
                                name: e.icon,
                                size: 20,
                              }),
                            }),
                            (0, M.jsxs)(`div`, {
                              children: [
                                (0, M.jsx)(`span`, {
                                  className: `org-level`,
                                  children: e.level,
                                }),
                                (0, M.jsx)(`h3`, {
                                  children: e.title,
                                }),
                                (0, M.jsx)(`p`, {
                                  children: e.text,
                                }),
                              ],
                            }),
                          ],
                        },
                        e.title,
                      ),
                    ),
                  }),
                  (0, M.jsx)(`div`, {
                    className: `btn-row about-leadership-link`,
                    children: (0, M.jsx)(j, {
                      to: `/about/leadership`,
                      className: `btn btn-secondary`,
                      children: `Meet our leadership`,
                    }),
                  }),
                ],
              }),
            }),
          ],
        }),
      }),
      (0, M.jsx)(`section`, {
        className: `section section-tint`,
        id: `presence`,
        children: (0, M.jsxs)(`div`, {
          className: `container`,
          children: [
            (0, M.jsx)(Hr, {
              eyebrow: `Local presence`,
              title: (0, M.jsxs)(M.Fragment, {
                children: [
                  `Where `,
                  (0, M.jsx)(`em`, {
                    children: `we work`,
                  }),
                ],
              }),
              text: `Our main office in Kabul and sub-office in Badakhshan keep us connected with communities and able to respond to local needs.`,
            }),
            (0, M.jsxs)(`div`, {
              className: `presence-grid`,
              children: [
                (0, M.jsx)(`div`, {
                  className: `presence-map rv`,
                  children: (0, M.jsx)(Rr, {
                    caption: `Boundaries: geoBoundaries (CC BY 4.0)`,
                  }),
                }),
                (0, M.jsxs)(`div`, {
                  className: `presence-side`,
                  children: [
                    (0, M.jsx)(Zr, {}),
                    (0, M.jsxs)(`p`, {
                      className: `programs-line`,
                      children: [
                        (0, M.jsx)(`strong`, {
                          children: `Program areas:`,
                        }),
                        ` `,
                        $n.map((e) => e.title).join(` · `),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
      (0, M.jsx)(Jr, {
        eyebrow: `Learn more`,
        title: (0, M.jsxs)(M.Fragment, {
          children: [
            `Read our `,
            (0, M.jsx)(`em`, {
              children: `organization profile.`,
            }),
          ],
        }),
        text: `Our profile sets out our mission, vision, focus areas, structure and the projects we have delivered.`,
        primary: {
          to: `/programs`,
          label: `Explore our programs`,
        },
        secondary: {
          download: !0,
          label: `Download profile`,
        },
      }),
    ],
  });
}
