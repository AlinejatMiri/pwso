// Home page component, extracted from the web2zip React bundle.
function HomePage() {
  return (0, M.jsxs)(`div`, {
    className: `page-home`,
    children: [
      (0, M.jsx)(ii, {
        path: `/`,
        description: `Poor Women Support Organization (PWSO) is an Afghan-led non-profit founded in 2017, supporting women and vulnerable communities through health, education, economic empowerment, research and agriculture, from offices in Kabul and Badakhshan.`,
      }),
      (0, M.jsx)(di, {}),
      (0, M.jsx)(`section`, {
        className: `pwso-band`,
        "aria-label": `PWSO at a glance`,
        children: (0, M.jsx)(`div`, {
          className: `container`,
          children: (0, M.jsx)(`div`, {
            className: `band-tiles`,
            children: fi.map((e) =>
              (0, M.jsxs)(
                `div`,
                {
                  className: `band-tile`,
                  children: [
                    (0, M.jsx)(`span`, {
                      className: `band-letter`,
                      "aria-hidden": `true`,
                      children: e.letter,
                    }),
                    (0, M.jsxs)(`div`, {
                      children: [
                        (0, M.jsx)(`strong`, {
                          children: e.value,
                        }),
                        (0, M.jsx)(`span`, {
                          children: e.text,
                        }),
                      ],
                    }),
                  ],
                },
                e.letter,
              ),
            ),
          }),
        }),
      }),
      (0, M.jsx)(`section`, {
        className: `section home-who`,
        children: (0, M.jsxs)(`div`, {
          className: `container split`,
          children: [
            (0, M.jsxs)(`div`, {
              className: `rv`,
              children: [
                (0, M.jsx)(zr, {
                  children: `Who we are`,
                }),
                (0, M.jsxs)(`h2`, {
                  children: [
                    `A local organization, `,
                    (0, M.jsx)(`em`, {
                      children: `accountable to communities.`,
                    }),
                  ],
                }),
                (0, M.jsxs)(`p`, {
                  className: `section-text`,
                  children: [
                    `The `,
                    P.name,
                    ` is an Afghan non-profit established in `,
                    P.established,
                    ` and registered with the`,
                    ` `,
                    P.registrar,
                    `. Our team works from Kabul and Badakhshan, close to the women and families we serve.`,
                  ],
                }),
                (0, M.jsxs)(`dl`, {
                  className: `mv-list`,
                  children: [
                    (0, M.jsxs)(`div`, {
                      children: [
                        (0, M.jsx)(`dt`, {
                          children: `Our mission`,
                        }),
                        (0, M.jsx)(`dd`, {
                          children: `To support Afghan women and vulnerable communities through education, health, social welfare, empowerment and research for sustainable livelihoods.`,
                        }),
                      ],
                    }),
                    (0, M.jsxs)(`div`, {
                      children: [
                        (0, M.jsx)(`dt`, {
                          children: `Our vision`,
                        }),
                        (0, M.jsx)(`dd`, {
                          children: `Resilient and self-reliant communities.`,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, M.jsx)(Wr, {
                  to: `/about`,
                  children: `Read our story`,
                }),
              ],
            }),
            (0, M.jsxs)(`div`, {
              className: `map-panel rv`,
              children: [
                (0, M.jsxs)(`div`, {
                  className: `map-panel-head`,
                  children: [
                    (0, M.jsx)(`span`, {
                      className: `tile-mark`,
                      "aria-hidden": `true`,
                    }),
                    `Where we work`,
                  ],
                }),
                (0, M.jsx)(Rr, {
                  caption: `Boundaries: geoBoundaries (CC BY 4.0)`,
                }),
              ],
            }),
          ],
        }),
      }),
      (0, M.jsx)(`section`, {
        className: `section section-flush-top home-director`,
        children: (0, M.jsx)(`div`, {
          className: `container`,
          children: (0, M.jsxs)(`figure`, {
            className: `director rv`,
            children: [
              (0, M.jsx)(`div`, {
                className: `director-portrait`,
                children: Zn.photo
                  ? (0, M.jsx)(`img`, {
                      src: Zn.photo,
                      alt: Zn.name ? `${Zn.name}, ${Zn.role}` : Zn.role,
                      loading: `lazy`,
                    })
                  : (0, M.jsx)(`img`, {
                      className: `director-emblem`,
                      src: `/favicon.svg`,
                      alt: ``,
                      "aria-hidden": `true`,
                    }),
              }),
              (0, M.jsxs)(`div`, {
                className: `director-body`,
                children: [
                  (0, M.jsx)(zr, {
                    children: `A message from our director`,
                  }),
                  (0, M.jsx)(N, {
                    name: `quote`,
                    size: 30,
                    strokeWidth: 1.5,
                    className: `director-mark`,
                  }),
                  (0, M.jsx)(`blockquote`, {
                    children: Zn.message.map((e) =>
                      (0, M.jsx)(
                        `p`,
                        {
                          children: e,
                        },
                        e,
                      ),
                    ),
                  }),
                  (0, M.jsxs)(`figcaption`, {
                    children: [
                      Zn.name &&
                        (0, M.jsx)(`strong`, {
                          children: Zn.name,
                        }),
                      (0, M.jsx)(`span`, {
                        children: Zn.role,
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
      (0, M.jsx)(`section`, {
        className: `section home-explorer`,
        children: (0, M.jsxs)(`div`, {
          className: `container`,
          children: [
            (0, M.jsx)(Hr, {
              eyebrow: `What we do`,
              title: (0, M.jsxs)(M.Fragment, {
                children: [
                  `Five programs, `,
                  (0, M.jsx)(`em`, {
                    children: `one commitment.`,
                  }),
                ],
              }),
              text: `Each program responds to what women and communities tell us they need.`,
              action: (0, M.jsx)(Wr, {
                to: `/programs`,
                children: `All programs`,
              }),
            }),
            (0, M.jsx)(pi, {}),
          ],
        }),
      }),
      (0, M.jsx)(`section`, {
        className: `section journey-section`,
        children: (0, M.jsx)(`div`, {
          className: `container`,
          children: (0, M.jsx)(mi, {}),
        }),
      }),
      (0, M.jsx)(`section`, {
        className: `section`,
        children: (0, M.jsxs)(`div`, {
          className: `container`,
          children: [
            (0, M.jsx)(Hr, {
              eyebrow: `Our priorities`,
              title: (0, M.jsxs)(M.Fragment, {
                children: [
                  `Four priorities, `,
                  (0, M.jsx)(`em`, {
                    children: `one purpose.`,
                  }),
                ],
              }),
              text: `Every program is community-led, inclusive, culturally informed and evidence-informed.`,
              action: (0, M.jsx)(Wr, {
                to: `/priorities`,
                children: `Our priorities`,
              }),
            }),
            (0, M.jsx)(`div`, {
              className: `prio-cols`,
              children: hi.map((e, t) =>
                (0, M.jsxs)(
                  `div`,
                  {
                    className: `prio-col rv`,
                    style: {
                      "--c": e.color,
                    },
                    children: [
                      (0, M.jsxs)(`div`, {
                        className: `prio-col-top`,
                        children: [
                          (0, M.jsx)(`span`, {
                            className: `number`,
                            children: ui(t + 1),
                          }),
                          (0, M.jsx)(N, {
                            name: e.icon,
                            size: 22,
                            strokeWidth: 1.75,
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
                  },
                  e.title,
                ),
              ),
            }),
          ],
        }),
      }),
      (0, M.jsx)(`section`, {
        className: `section section-tint`,
        children: (0, M.jsxs)(`div`, {
          className: `container`,
          children: [
            (0, M.jsx)(Hr, {
              eyebrow: `Projects`,
              title: (0, M.jsxs)(M.Fragment, {
                children: [
                  `Our work `,
                  (0, M.jsx)(`em`, {
                    children: `in action.`,
                  }),
                ],
              }),
              text: `Initiatives documented in our organization profile, reaching ${gi} participants.`,
              action: (0, M.jsx)(Wr, {
                to: `/projects`,
                children: `All projects`,
              }),
            }),
            (0, M.jsx)(`div`, {
              className: `grid cols-3 work-row`,
              children: nr.map((e) =>
                (0, M.jsxs)(
                  `article`,
                  {
                    className: `work-card`,
                    children: [
                      (0, M.jsx)(`div`, {
                        className: `work-card-media`,
                        children: (0, M.jsx)(`img`, {
                          src: e.img,
                          alt: ``,
                          loading: `lazy`,
                        }),
                      }),
                      (0, M.jsxs)(`div`, {
                        className: `work-card-body`,
                        children: [
                          (0, M.jsx)(`p`, {
                            className: `work-card-kicker`,
                            children: e.category,
                          }),
                          (0, M.jsx)(`h3`, {
                            children: e.title,
                          }),
                          (0, M.jsxs)(`ul`, {
                            className: `meta`,
                            children: [
                              (0, M.jsxs)(`li`, {
                                children: [
                                  (0, M.jsx)(N, {
                                    name: `pin`,
                                    size: 15,
                                  }),
                                  ` `,
                                  e.location,
                                ],
                              }),
                              e.year &&
                                (0, M.jsxs)(`li`, {
                                  children: [
                                    (0, M.jsx)(N, {
                                      name: `calendar`,
                                      size: 15,
                                    }),
                                    ` `,
                                    e.year,
                                  ],
                                }),
                            ],
                          }),
                          (0, M.jsxs)(`dl`, {
                            children: [
                              (0, M.jsxs)(`div`, {
                                children: [
                                  (0, M.jsx)(`dt`, {
                                    children: e.reach ? `Reach` : `Scope`,
                                  }),
                                  (0, M.jsx)(`dd`, {
                                    children: e.reach || `Policy & systems`,
                                  }),
                                ],
                              }),
                              (0, M.jsxs)(`div`, {
                                children: [
                                  (0, M.jsx)(`dt`, {
                                    children: `Supported by`,
                                  }),
                                  (0, M.jsx)(`dd`, {
                                    children: e.funder,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
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
      (0, M.jsx)(`section`, {
        className: `section`,
        children: (0, M.jsxs)(`div`, {
          className: `container`,
          children: [
            (0, M.jsx)(Hr, {
              eyebrow: `From the field`,
              title: (0, M.jsxs)(M.Fragment, {
                children: [
                  `Stories of `,
                  (0, M.jsx)(`em`, {
                    children: `change.`,
                  }),
                ],
              }),
              action: (0, M.jsx)(Wr, {
                to: `/news`,
                children: `News & stories`,
              }),
            }),
            (0, M.jsx)(`div`, {
              className: `story-row`,
              children: ir.map((e) =>
                (0, M.jsxs)(
                  j,
                  {
                    to: `/news`,
                    className: `story-card rv`,
                    children: [
                      (0, M.jsx)(`div`, {
                        className: `story-card-media`,
                        children: (0, M.jsx)(`img`, {
                          src: e.img,
                          alt: ``,
                          loading: `lazy`,
                        }),
                      }),
                      (0, M.jsx)(`span`, {
                        className: `news-topic`,
                        children: e.topic,
                      }),
                      (0, M.jsx)(`h3`, {
                        children: e.title,
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
          ],
        }),
      }),
      (0, M.jsx)(`section`, {
        className: `section section-flush-top`,
        children: (0, M.jsx)(`div`, {
          className: `container`,
          children: (0, M.jsx)(Xr, {}),
        }),
      }),
      (0, M.jsx)(Jr, {
        eyebrow: `Partner with us`,
        title: (0, M.jsxs)(M.Fragment, {
          children: [
            `Build a stronger future `,
            (0, M.jsx)(`em`, {
              children: `with us.`,
            }),
          ],
        }),
        text: `Connect with PWSO to explore collaboration and community-focused initiatives across Afghanistan.`,
        primary: {
          to: `/partnerships`,
          label: `Ways to partner`,
        },
        secondary: {
          to: `/contact`,
          label: `Contact our team`,
        },
      }),
    ],
  });
}
