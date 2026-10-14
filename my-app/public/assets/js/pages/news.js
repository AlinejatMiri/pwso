// News page component, extracted from the web2zip React bundle.
function NewsPage() {
  let [e, t] = (0, x.useState)(`All`),
    n = (t) => e === `All` || e === t,
    [r, i] = (0, x.useState)(null),
    a = (0, x.useCallback)(
      (e) => i((t) => (t + e + Ii.length) % Ii.length),
      [],
    ),
    o = (0, x.useCallback)(() => i(null), []);
  return (0, M.jsxs)(`div`, {
    className: `page-news`,
    children: [
      (0, M.jsx)(ii, {
        title: `News & stories`,
        path: `/news`,
        description: `Stories and photographs from PWSO's work with women and communities in Afghanistan.`,
      }),
      (0, M.jsx)(Br, {
        crumb: `News & stories`,
        parent: {
          to: `/news`,
          label: `News`,
        },
        title: (0, M.jsxs)(M.Fragment, {
          children: [
            `Stories from `,
            (0, M.jsx)(`em`, {
              children: `our communities.`,
            }),
          ],
        }),
        lead: `Activity updates, field stories and photography from our work with women and communities across Afghanistan.`,
        img: `./assets/img/news-hero.jpg`,
      }),
      (0, M.jsx)(`section`, {
        className: `section news-main${n(`Stories`) ? `` : ` is-bare`}`,
        children: (0, M.jsxs)(`div`, {
          className: `container`,
          children: [
            (0, M.jsxs)(`div`, {
              className: `toolbar`,
              children: [
                (0, M.jsx)(Qr, {
                  items: Li,
                  value: e,
                  onChange: t,
                  label: `Filter content`,
                }),
                (0, M.jsxs)(`a`, {
                  href: `mailto:${P.email}?subject=Media%20enquiry`,
                  className: `link-arrow`,
                  children: [
                    (0, M.jsx)(`span`, {
                      children: `Media enquiries`,
                    }),
                    (0, M.jsx)(N, {
                      name: `arrow`,
                      size: 18,
                      strokeWidth: 2,
                    }),
                  ],
                }),
              ],
            }),
            n(`Stories`) &&
              (0, M.jsxs)(M.Fragment, {
                children: [
                  (0, M.jsxs)(`article`, {
                    className: `feature-story rv`,
                    children: [
                      (0, M.jsx)(`div`, {
                        className: `media feature-story-media`,
                        children: (0, M.jsx)(`img`, {
                          src: `./assets/img/news-feature-activity.jpg`,
                          alt: `A woman embroidering colourful fabric in a training workshop`,
                        }),
                      }),
                      (0, M.jsxs)(`div`, {
                        className: `feature-story-body`,
                        children: [
                          (0, M.jsx)(`p`, {
                            className: `story-topic`,
                            children: `Community activities`,
                          }),
                          (0, M.jsxs)(`h2`, {
                            children: [
                              `Building skills, knowledge and `,
                              (0, M.jsx)(`em`, {
                                children: `opportunity, together.`,
                              }),
                            ],
                          }),
                          (0, M.jsx)(`p`, {
                            className: `section-text`,
                            children: `PWSO works with women and communities to support local initiatives that build skills, knowledge and opportunities, from vocational training to community learning and awareness sessions.`,
                          }),
                          (0, M.jsx)(Wr, {
                            to: `/programs`,
                            children: `How our programs work`,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, M.jsx)(`div`, {
                    className: `grid cols-3 stories`,
                    children: ir.map((e) =>
                      (0, M.jsxs)(
                        `article`,
                        {
                          className: `story`,
                          children: [
                            (0, M.jsx)(`div`, {
                              className: `media`,
                              children: (0, M.jsx)(`img`, {
                                src: e.img,
                                alt: ``,
                                loading: `lazy`,
                              }),
                            }),
                            (0, M.jsx)(`p`, {
                              className: `story-topic`,
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
          ],
        }),
      }),
      n(`Gallery`) &&
        (0, M.jsx)(`section`, {
          className: `section section-tint`,
          id: `gallery`,
          children: (0, M.jsxs)(`div`, {
            className: `container`,
            children: [
              (0, M.jsx)(Hr, {
                eyebrow: `Photo gallery`,
                title: (0, M.jsxs)(M.Fragment, {
                  children: [
                    `Life, learning and `,
                    (0, M.jsx)(`em`, {
                      children: `local action`,
                    }),
                  ],
                }),
                text: `Select a photo to view it larger.`,
                action: (0, M.jsx)(`img`, {
                  className: `gallery-art`,
                  src: `./assets/img/il/stories.svg`,
                  alt: ``,
                  "aria-hidden": `true`,
                  loading: `lazy`,
                  width: `240`,
                  height: `180`,
                }),
              }),
              (0, M.jsx)(`div`, {
                className: `gallery`,
                children: Ii.map((e, t) =>
                  (0, M.jsxs)(
                    `button`,
                    {
                      className: `gallery-item`,
                      onClick: () => i(t),
                      "aria-label": `View photo: ${e.alt}`,
                      children: [
                        (0, M.jsx)(`img`, {
                          src: e.src,
                          alt: ``,
                          loading: `lazy`,
                        }),
                        (0, M.jsx)(`span`, {
                          className: `gallery-zoom`,
                          "aria-hidden": `true`,
                          children: (0, M.jsx)(N, {
                            name: `expand`,
                            size: 16,
                            strokeWidth: 2,
                          }),
                        }),
                      ],
                    },
                    e.src,
                  ),
                ),
              }),
            ],
          }),
        }),
      (0, M.jsx)(Jr, {
        eyebrow: `Our programs`,
        title: (0, M.jsxs)(M.Fragment, {
          children: [
            `See how we work `,
            (0, M.jsx)(`em`, {
              children: `with communities.`,
            }),
          ],
        }),
        text: `Explore the five program areas through which we support resilient, self-reliant communities.`,
        primary: {
          to: `/programs`,
          label: `Our programs`,
        },
        secondary: {
          to: `/projects`,
          label: `Our projects`,
        },
      }),
      r !== null &&
        (0, M.jsx)(Ri, {
          index: r,
          onClose: o,
          onStep: a,
        }),
    ],
  });
}
