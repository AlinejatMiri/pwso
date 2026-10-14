// Resources page component, extracted from the web2zip React bundle.
function ResourcesPage() {
  let [e, t] = (0, x.useState)(`All`),
    [n, r] = (0, x.useState)(``),
    i = n.trim().toLowerCase(),
    a = Mi.filter(
      (t) =>
        (e === `All` || t.kind === e) &&
        (!i || `${t.title} ${t.text}`.toLowerCase().includes(i)),
    );
  return (0, M.jsxs)(`div`, {
    className: `page-resources`,
    children: [
      (0, M.jsx)(ii, {
        title: `Resources & accountability`,
        path: `/resources`,
        description: `PWSO's organization profile, reports and policies, and how to share feedback or raise a concern.`,
      }),
      (0, M.jsx)(Br, {
        crumb: `Organization profile`,
        parent: {
          to: `/resources`,
          label: `Resources`,
        },
        title: (0, M.jsxs)(M.Fragment, {
          children: [
            `Transparency `,
            (0, M.jsx)(`em`, {
              children: `builds trust.`,
            }),
          ],
        }),
        lead: `We are committed to openness, accountability and learning. Explore our profile, reports and policies.`,
        img: `./assets/img/resources-hero.jpg`,
      }),
      (0, M.jsx)(`section`, {
        className: `section section-tight`,
        children: (0, M.jsx)(`div`, {
          className: `container`,
          children: (0, M.jsx)(Yr, {
            title: `PWSO Organization Profile 2026`,
            text: `Our mission, vision, structure, focus areas, ways of working and documented projects in one document.`,
          }),
        }),
      }),
      (0, M.jsx)(`section`, {
        className: `section section-tint`,
        id: `library`,
        children: (0, M.jsxs)(`div`, {
          className: `container`,
          children: [
            (0, M.jsx)(Hr, {
              eyebrow: `Document library`,
              title: (0, M.jsxs)(M.Fragment, {
                children: [
                  `Reports & `,
                  (0, M.jsx)(`em`, {
                    children: `policies`,
                  }),
                ],
              }),
              text: `Key documents are published here as they are approved. For anything you cannot find, contact us and we will help.`,
              action: (0, M.jsx)(`img`, {
                className: `lib-art`,
                src: `./assets/img/il/resources.svg`,
                alt: ``,
                "aria-hidden": `true`,
                loading: `lazy`,
                width: `240`,
                height: `180`,
              }),
            }),
            (0, M.jsxs)(`div`, {
              className: `toolbar`,
              children: [
                (0, M.jsx)(Qr, {
                  items: Ni,
                  value: e,
                  onChange: t,
                  label: `Filter documents`,
                }),
                (0, M.jsx)($r, {
                  value: n,
                  onChange: r,
                  placeholder: `Search documents`,
                  label: `Search documents`,
                }),
              ],
            }),
            a.length
              ? (0, M.jsx)(`ul`, {
                  className: `doc-list`,
                  children: a.map((e) =>
                    (0, M.jsxs)(
                      `li`,
                      {
                        className: `doc-row`,
                        children: [
                          (0, M.jsx)(Gr, {
                            name: e.icon,
                          }),
                          (0, M.jsxs)(`div`, {
                            className: `doc-row-text`,
                            children: [
                              (0, M.jsx)(`h3`, {
                                children: e.title,
                              }),
                              (0, M.jsx)(`p`, {
                                children: e.text,
                              }),
                            ],
                          }),
                          (0, M.jsx)(`span`, {
                            className: `doc-kind`,
                            children: e.kind,
                          }),
                          (0, M.jsxs)(`span`, {
                            className: `badge badge-neutral`,
                            children: [
                              (0, M.jsx)(N, {
                                name: `clock`,
                                size: 14,
                                strokeWidth: 2,
                              }),
                              ` Publishing soon`,
                            ],
                          }),
                        ],
                      },
                      e.title,
                    ),
                  ),
                })
              : (0, M.jsx)(ei, {
                  art: `resources`,
                  title: `No documents match your search`,
                  text: `Try a different keyword, or contact us to request a document.`,
                  children: (0, M.jsx)(`button`, {
                    className: `btn btn-secondary btn-sm`,
                    onClick: () => {
                      (t(`All`), r(``));
                    },
                    children: `Clear filters`,
                  }),
                }),
            (0, M.jsxs)(`p`, {
              className: `doc-help`,
              children: [
                (0, M.jsx)(N, {
                  name: `info`,
                  size: 18,
                }),
                (0, M.jsxs)(`span`, {
                  children: [
                    `Need a document that isn't listed? `,
                    (0, M.jsx)(j, {
                      to: `/contact`,
                      children: `Request it from our team`,
                    }),
                    `.`,
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
      (0, M.jsx)(`section`, {
        className: `section`,
        id: `feedback`,
        children: (0, M.jsxs)(`div`, {
          className: `container split feedback`,
          children: [
            (0, M.jsx)(`div`, {
              className: `media`,
              children: (0, M.jsx)(`img`, {
                src: `./assets/img/resources-feedback.jpg`,
                alt: `Women talking together during a community feedback session`,
                loading: `lazy`,
              }),
            }),
            (0, M.jsxs)(`div`, {
              children: [
                (0, M.jsx)(zr, {
                  children: `Community feedback`,
                }),
                (0, M.jsxs)(`h2`, {
                  children: [
                    `Your voice `,
                    (0, M.jsx)(`em`, {
                      children: `matters.`,
                    }),
                  ],
                }),
                (0, M.jsx)(`p`, {
                  className: `section-text`,
                  children: `We welcome feedback, questions and suggestions from community members, partners and other stakeholders. Your input helps us improve and stay accountable.`,
                }),
                (0, M.jsxs)(`div`, {
                  className: `btn-row`,
                  children: [
                    (0, M.jsxs)(j, {
                      to: `/contact?category=Feedback`,
                      className: `btn btn-primary`,
                      children: [
                        `Share feedback `,
                        (0, M.jsx)(N, {
                          name: `arrow`,
                          size: 18,
                          strokeWidth: 2,
                        }),
                      ],
                    }),
                    (0, M.jsx)(Wr, {
                      to: `/contact`,
                      children: `Other ways to reach us`,
                    }),
                  ],
                }),
              ],
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
              eyebrow: `Our governance approach`,
              title: (0, M.jsxs)(M.Fragment, {
                children: [
                  `Three principles `,
                  (0, M.jsx)(`em`, {
                    children: `guide our work`,
                  }),
                ],
              }),
              action: (0, M.jsx)(`img`, {
                className: `gov-art`,
                src: `./assets/img/il/research.svg`,
                alt: ``,
                "aria-hidden": `true`,
                loading: `lazy`,
                width: `240`,
                height: `180`,
              }),
            }),
            (0, M.jsx)(`div`, {
              className: `grid cols-3`,
              children: Pi.map((e) =>
                (0, M.jsxs)(
                  `div`,
                  {
                    className: `card principle-card`,
                    children: [
                      (0, M.jsx)(Gr, {
                        name: e.icon,
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
      (0, M.jsx)(Jr, {
        eyebrow: `Questions?`,
        title: (0, M.jsxs)(M.Fragment, {
          children: [
            `Talk to `,
            (0, M.jsx)(`em`, {
              children: `our team.`,
            }),
          ],
        }),
        text: `We welcome your questions about our documents, governance and partnership opportunities.`,
        primary: {
          to: `/contact`,
          label: `Contact us`,
        },
        secondary: {
          to: `/about`,
          label: `About PWSO`,
        },
      }),
    ],
  });
}
