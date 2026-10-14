// Priorities page component, extracted from the web2zip React bundle.
function PrioritiesPage() {
  return (0, M.jsxs)(`div`, {
    className: `page-priorities`,
    children: [
      (0, M.jsx)(ii, {
        title: `Our priorities`,
        path: `/priorities`,
        description: `The four priorities and guiding principles behind every PWSO program: women's empowerment, learning and wellbeing, sustainable livelihoods and accountability.`,
      }),
      (0, M.jsx)(Br, {
        crumb: `Our priorities`,
        parent: {
          to: `/about`,
          label: `About`,
        },
        title: (0, M.jsxs)(M.Fragment, {
          children: [
            `Dignity, opportunity and `,
            (0, M.jsx)(`em`, {
              children: `resilience.`,
            }),
          ],
        }),
        lead: `Our work prioritizes Afghan women and vulnerable communities, with practical, community-based solutions that expand opportunity and strengthen self-reliance.`,
        img: `./assets/img/priorities-hero.jpg`,
        imgAlt: `Women working together in a community session`,
      }),
      (0, M.jsx)(`section`, {
        className: `section`,
        children: (0, M.jsxs)(`div`, {
          className: `container`,
          children: [
            (0, M.jsx)(Hr, {
              eyebrow: `Four priorities`,
              title: (0, M.jsxs)(M.Fragment, {
                children: [
                  `Four priorities for `,
                  (0, M.jsx)(`em`, {
                    children: `stronger communities`,
                  }),
                ],
              }),
              text: `These interconnected priorities guide how we design and deliver every program.`,
            }),
            (0, M.jsx)(`div`, {
              className: `grid cols-4`,
              children: Ti.map((e, t) =>
                (0, M.jsxs)(
                  `article`,
                  {
                    className: `priority-card`,
                    style: {
                      "--c": e.color,
                    },
                    children: [
                      (0, M.jsx)(`div`, {
                        className: `priority-media`,
                        children: (0, M.jsx)(`img`, {
                          src: e.img,
                          alt: ``,
                          loading: `lazy`,
                        }),
                      }),
                      (0, M.jsxs)(`div`, {
                        className: `priority-body`,
                        children: [
                          (0, M.jsxs)(`div`, {
                            className: `priority-tag`,
                            children: [
                              (0, M.jsx)(`span`, {
                                className: `priority-icon`,
                                children: (0, M.jsx)(N, {
                                  name: e.icon,
                                  size: 20,
                                  strokeWidth: 2,
                                }),
                              }),
                              (0, M.jsxs)(`span`, {
                                className: `number`,
                                children: [
                                  `Priority `,
                                  String(t + 1).padStart(2, `0`),
                                ],
                              }),
                            ],
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
          ],
        }),
      }),
      (0, M.jsx)(`section`, {
        className: `section section-dark principles-section`,
        children: (0, M.jsxs)(`div`, {
          className: `container`,
          children: [
            (0, M.jsx)(Hr, {
              light: !0,
              eyebrow: `Our approach`,
              title: (0, M.jsxs)(M.Fragment, {
                children: [
                  `Guiding principles in `,
                  (0, M.jsx)(`em`, {
                    children: `everything we do`,
                  }),
                ],
              }),
              text: `These principles keep our programs effective, respectful and grounded in community needs.`,
            }),
            (0, M.jsx)(`div`, {
              className: `grid cols-4`,
              children: Ei.map((e) =>
                (0, M.jsxs)(
                  `div`,
                  {
                    className: `principle`,
                    children: [
                      (0, M.jsx)(Gr, {
                        name: e.icon,
                        size: `sm`,
                        tone: `dark`,
                      }),
                      (0, M.jsxs)(`div`, {
                        children: [
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
          ],
        }),
      }),
      (0, M.jsx)(`section`, {
        className: `section`,
        children: (0, M.jsxs)(`div`, {
          className: `container`,
          children: [
            (0, M.jsx)(Hr, {
              eyebrow: `From priorities to programs`,
              title: (0, M.jsxs)(M.Fragment, {
                children: [
                  `Five programs, `,
                  (0, M.jsx)(`em`, {
                    children: `one purpose`,
                  }),
                ],
              }),
              text: `Each of our five programs turns these priorities into practical, community-based action.`,
              action: (0, M.jsxs)(j, {
                to: `/programs`,
                className: `link-arrow`,
                children: [
                  (0, M.jsx)(`span`, {
                    children: `All programs`,
                  }),
                  (0, M.jsx)(N, {
                    name: `arrow`,
                    size: 18,
                    strokeWidth: 2,
                  }),
                ],
              }),
            }),
            (0, M.jsx)(`div`, {
              className: `prog-links`,
              children: $n.map((e) =>
                (0, M.jsxs)(
                  j,
                  {
                    to: `/programs#${e.id}`,
                    className: `prog-link`,
                    style: {
                      "--c": e.color,
                    },
                    children: [
                      (0, M.jsx)(`span`, {
                        className: `prog-link-icon`,
                        children: (0, M.jsx)(N, {
                          name: e.icon,
                          size: 20,
                          strokeWidth: 2,
                        }),
                      }),
                      (0, M.jsx)(`img`, {
                        className: `prog-link-art`,
                        src: `./assets/img/il/${e.id}.svg`,
                        alt: ``,
                        "aria-hidden": `true`,
                        loading: `lazy`,
                      }),
                      (0, M.jsx)(`strong`, {
                        children: e.title,
                      }),
                      (0, M.jsx)(`span`, {
                        children: e.short,
                      }),
                      (0, M.jsx)(N, {
                        name: `arrow`,
                        size: 18,
                        strokeWidth: 2,
                        className: `prog-link-arrow`,
                      }),
                    ],
                  },
                  e.id,
                ),
              ),
            }),
          ],
        }),
      }),
      (0, M.jsx)(Jr, {
        tint: !0,
        eyebrow: `Partner with us`,
        title: (0, M.jsxs)(M.Fragment, {
          children: [
            `Build a stronger future `,
            (0, M.jsx)(`em`, {
              children: `together.`,
            }),
          ],
        }),
        text: `Connect with PWSO to explore collaboration and community-focused initiatives.`,
        primary: {
          to: `/contact`,
          label: `Start a conversation`,
        },
        secondary: {
          to: `/partnerships`,
          label: `Ways to partner`,
        },
      }),
    ],
  });
}
