// Leadership page component, using the published governance structure.
function LeadershipPage() {
  return (0, M.jsxs)(`div`, {
    className: `page-leadership`,
    children: [
      (0, M.jsx)(ii, {
        title: `Leadership`,
        path: `/about/leadership`,
        description: `Learn about PWSO's leadership structure, governance and locally led teams.`,
      }),
      (0, M.jsx)(Br, {
        crumb: `Leadership`,
        parent: {
          to: `/about`,
          label: `About`,
        },
        title: (0, M.jsxs)(M.Fragment, {
          children: [
            `Leadership rooted in `,
            (0, M.jsx)(`em`, {
              children: `community.`,
            }),
          ],
        }),
        lead: `PWSO's governance and leadership bring oversight, organizational direction and local program delivery together in service of Afghan women and vulnerable communities.`,
        img: `./assets/img/about-who.jpg`,
        imgAlt: `Women working together in their community`,
        children: (0, M.jsx)(`div`, {
          className: `btn-row`,
          children: (0, M.jsx)(j, {
            to: `/about#governance`,
            className: `btn btn-primary`,
            children: `View governance structure`,
          }),
        }),
      }),
      (0, M.jsx)(`section`, {
        className: `section leadership-section`,
        children: (0, M.jsxs)(`div`, {
          className: `container`,
          children: [
            (0, M.jsx)(Hr, {
              eyebrow: `How we lead`,
              title: (0, M.jsxs)(M.Fragment, {
                children: [
                  `Clear roles. `,
                  (0, M.jsx)(`em`, {
                    children: `Shared purpose.`,
                  }),
                ],
              }),
              text: `Our structure connects strategic oversight with day-to-day management and the teams delivering programs alongside local communities.`,
            }),
            (0, M.jsx)(`ol`, {
              className: `leadership-structure`,
              children: bi.map((e, t) =>
                (0, M.jsxs)(
                  `li`,
                  {
                    className: `leadership-card`,
                    children: [
                      (0, M.jsxs)(`div`, {
                        className: `leadership-card-head`,
                        children: [
                          (0, M.jsx)(`span`, {
                            className: `leadership-icon`,
                            children: (0, M.jsx)(N, {
                              name: e.icon,
                              size: 22,
                            }),
                          }),
                          (0, M.jsx)(`span`, {
                            className: `leadership-step`,
                            children: `0${t + 1}`,
                          }),
                        ],
                      }),
                      (0, M.jsx)(`p`, {
                        className: `leadership-level`,
                        children: e.level,
                      }),
                      (0, M.jsx)(`h3`, {
                        children: e.title,
                      }),
                      (0, M.jsx)(`p`, {
                        className: `leadership-description`,
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
        className: `section section-tint leadership-message-section`,
        children: (0, M.jsxs)(`div`, {
          className: `container leadership-message`,
          children: [
            (0, M.jsxs)(`div`, {
              className: `leadership-message-copy`,
              children: [
                (0, M.jsx)(zr, {
                  children: `A message from our director`,
                }),
                (0, M.jsx)(`h2`, {
                  children: `Working with communities, building lasting change.`,
                }),
                Zn.message.map((e) =>
                  (0, M.jsx)(`p`, {
                    children: e,
                  }, e),
                ),
                (0, M.jsx)(`p`, {
                  className: `leadership-attribution`,
                  children: Zn.role,
                }),
              ],
            }),
            (0, M.jsx)(`div`, {
              className: `leadership-message-art`,
              "aria-hidden": `true`,
              children: (0, M.jsx)(`img`, {
                src: `./assets/img/il/community.svg`,
                alt: ``,
                loading: `lazy`,
              }),
            }),
          ],
        }),
      }),
      (0, M.jsx)(Jr, {
        eyebrow: `Connect with PWSO`,
        title: `Learn more about our work and governance.`,
        text: `Read about our story, values and governance, or contact us with questions about PWSO.`,
        primary: {
          to: `/about#governance`,
          label: `About our governance`,
        },
        secondary: {
          to: `/contact`,
          label: `Contact us`,
        },
      }),
    ],
  });
}
