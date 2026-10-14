// Partnerships page component, extracted from the web2zip React bundle.
function PartnershipsPage() {
  let [e, t] = (0, x.useState)(Gi),
    [n, r] = (0, x.useState)(!1),
    i = (n) => (r) =>
      t({
        ...e,
        [n]: r.target.value,
      });
  return (0, M.jsxs)(`div`, {
    className: `page-partnerships`,
    children: [
      (0, M.jsx)(ii, {
        title: `Partnerships`,
        path: `/partnerships`,
        description: `Partner with PWSO: ways to collaborate, areas of work and the organizations that have supported our projects.`,
      }),
      (0, M.jsx)(Br, {
        crumb: `Partnerships`,
        parent: {
          to: `/partnerships`,
          label: `Get Involved`,
        },
        title: (0, M.jsxs)(M.Fragment, {
          children: [
            `Stronger together. `,
            (0, M.jsx)(`em`, {
              children: `Rooted in communities.`,
            }),
          ],
        }),
        lead: `We collaborate with organizations, institutions and individuals to support Afghan women and vulnerable communities through local knowledge, shared expertise and practical solutions.`,
        img: `./assets/img/partners-hero.jpg`,
        children: (0, M.jsx)(`div`, {
          className: `btn-row`,
          children: (0, M.jsxs)(`a`, {
            href: `#enquiry`,
            className: `btn btn-primary`,
            children: [
              `Make an enquiry `,
              (0, M.jsx)(N, {
                name: `arrow`,
                size: 18,
                strokeWidth: 2,
              }),
            ],
          }),
        }),
      }),
      (0, M.jsx)(`section`, {
        className: `section`,
        children: (0, M.jsxs)(`div`, {
          className: `container split split-start why-split`,
          children: [
            (0, M.jsxs)(`div`, {
              children: [
                (0, M.jsxs)(`div`, {
                  className: `why-head`,
                  children: [
                    (0, M.jsxs)(`div`, {
                      children: [
                        (0, M.jsx)(zr, {
                          children: `Why partner with PWSO`,
                        }),
                        (0, M.jsxs)(`h2`, {
                          children: [
                            `Local partnerships create `,
                            (0, M.jsx)(`em`, {
                              children: `lasting change.`,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, M.jsx)(`img`, {
                      className: `why-art`,
                      src: `./assets/img/il/partnership.svg`,
                      alt: ``,
                      "aria-hidden": `true`,
                      loading: `lazy`,
                      width: `240`,
                      height: `180`,
                    }),
                  ],
                }),
                (0, M.jsx)(`p`, {
                  className: `section-text`,
                  children: `We value partnerships that are respectful, locally informed and aligned with community needs, and we bring the relationships and understanding that make programs work on the ground.`,
                }),
              ],
            }),
            (0, M.jsx)(`ol`, {
              className: `why-list`,
              children: Ui.map((e, t) =>
                (0, M.jsxs)(
                  `li`,
                  {
                    children: [
                      (0, M.jsx)(`span`, {
                        className: `number`,
                        children: String(t + 1).padStart(2, `0`),
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
        className: `section section-tint`,
        children: (0, M.jsxs)(`div`, {
          className: `container`,
          children: [
            (0, M.jsx)(Hr, {
              eyebrow: `Areas for collaboration`,
              title: (0, M.jsxs)(M.Fragment, {
                children: [
                  `Working together for `,
                  (0, M.jsx)(`em`, {
                    children: `greater impact`,
                  }),
                ],
              }),
            }),
            (0, M.jsx)(`div`, {
              className: `grid cols-4 collab-grid`,
              children: Wi.map((e) =>
                (0, M.jsxs)(
                  `div`,
                  {
                    className: `card`,
                    children: [
                      (0, M.jsx)(Gr, {
                        name: e.icon,
                        size: `sm`,
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
        className: `section`,
        children: (0, M.jsxs)(`div`, {
          className: `container supporters-band`,
          children: [
            (0, M.jsx)(Hr, {
              eyebrow: `Supporters`,
              title: (0, M.jsxs)(M.Fragment, {
                children: [
                  `Who has `,
                  (0, M.jsx)(`em`, {
                    children: `supported our work`,
                  }),
                ],
              }),
              text: `As recorded in our organization profile.`,
            }),
            (0, M.jsx)(`ul`, {
              className: `supporters`,
              children: rr.map((e) =>
                (0, M.jsxs)(
                  `li`,
                  {
                    children: [
                      (0, M.jsx)(`strong`, {
                        children: e.name,
                      }),
                      (0, M.jsx)(`span`, {
                        children: e.text,
                      }),
                    ],
                  },
                  e.name,
                ),
              ),
            }),
          ],
        }),
      }),
      (0, M.jsx)(`section`, {
        className: `section section-tint`,
        id: `enquiry`,
        children: (0, M.jsxs)(`div`, {
          className: `container enquiry`,
          children: [
            (0, M.jsxs)(`div`, {
              className: `form-card`,
              children: [
                (0, M.jsx)(zr, {
                  children: `Partnership enquiry`,
                }),
                (0, M.jsxs)(`h2`, {
                  children: [
                    `Get in touch with `,
                    (0, M.jsx)(`em`, {
                      children: `our team.`,
                    }),
                  ],
                }),
                (0, M.jsx)(`p`, {
                  className: `section-text`,
                  children: `Tell us about your organization and how you would like to work together.`,
                }),
                (0, M.jsxs)(`form`, {
                  className: `form`,
                  onSubmit: (t) => {
                    (t.preventDefault(),
                      lr(`Partnership enquiry: ${e.organization}`, {
                        Organization: e.organization,
                        "Contact name": e.name,
                        Email: e.email,
                        "Area of interest": e.area,
                        Message: e.message,
                      }),
                      r(!0));
                  },
                  children: [
                    (0, M.jsxs)(`div`, {
                      className: `form-row`,
                      children: [
                        (0, M.jsxs)(`label`, {
                          className: `field`,
                          children: [
                            (0, M.jsxs)(`span`, {
                              className: `field-label`,
                              children: [
                                `Organization `,
                                (0, M.jsx)(`span`, {
                                  className: `req`,
                                  children: `*`,
                                }),
                              ],
                            }),
                            (0, M.jsx)(`input`, {
                              className: `input`,
                              required: !0,
                              autoComplete: `organization`,
                              value: e.organization,
                              onChange: i(`organization`),
                            }),
                          ],
                        }),
                        (0, M.jsxs)(`label`, {
                          className: `field`,
                          children: [
                            (0, M.jsxs)(`span`, {
                              className: `field-label`,
                              children: [
                                `Contact name `,
                                (0, M.jsx)(`span`, {
                                  className: `req`,
                                  children: `*`,
                                }),
                              ],
                            }),
                            (0, M.jsx)(`input`, {
                              className: `input`,
                              required: !0,
                              autoComplete: `name`,
                              value: e.name,
                              onChange: i(`name`),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, M.jsxs)(`div`, {
                      className: `form-row`,
                      children: [
                        (0, M.jsxs)(`label`, {
                          className: `field`,
                          children: [
                            (0, M.jsxs)(`span`, {
                              className: `field-label`,
                              children: [
                                `Email `,
                                (0, M.jsx)(`span`, {
                                  className: `req`,
                                  children: `*`,
                                }),
                              ],
                            }),
                            (0, M.jsx)(`input`, {
                              className: `input`,
                              required: !0,
                              type: `email`,
                              autoComplete: `email`,
                              value: e.email,
                              onChange: i(`email`),
                            }),
                          ],
                        }),
                        (0, M.jsxs)(`label`, {
                          className: `field`,
                          children: [
                            (0, M.jsxs)(`span`, {
                              className: `field-label`,
                              children: [
                                `Area of interest `,
                                (0, M.jsx)(`span`, {
                                  className: `req`,
                                  children: `*`,
                                }),
                              ],
                            }),
                            (0, M.jsxs)(`select`, {
                              className: `input`,
                              required: !0,
                              value: e.area,
                              onChange: i(`area`),
                              children: [
                                (0, M.jsx)(`option`, {
                                  value: ``,
                                  disabled: !0,
                                  children: `Select an area`,
                                }),
                                Wi.map((e) =>
                                  (0, M.jsx)(
                                    `option`,
                                    {
                                      children: e.title,
                                    },
                                    e.title,
                                  ),
                                ),
                                (0, M.jsx)(`option`, {
                                  children: `Other`,
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, M.jsxs)(`label`, {
                      className: `field`,
                      children: [
                        (0, M.jsxs)(`span`, {
                          className: `field-label`,
                          children: [
                            `Message `,
                            (0, M.jsx)(`span`, {
                              className: `req`,
                              children: `*`,
                            }),
                          ],
                        }),
                        (0, M.jsx)(`textarea`, {
                          className: `input`,
                          required: !0,
                          rows: `4`,
                          value: e.message,
                          onChange: i(`message`),
                        }),
                      ],
                    }),
                    n &&
                      (0, M.jsxs)(`p`, {
                        className: `form-status`,
                        role: `status`,
                        children: [
                          (0, M.jsx)(N, {
                            name: `checkCircle`,
                            size: 20,
                          }),
                          (0, M.jsxs)(`span`, {
                            children: [
                              `Your email app should now open with your enquiry. If it doesn't, write to us at `,
                              (0, M.jsx)(`a`, {
                                href: `mailto:${P.email}`,
                                children: P.email,
                              }),
                              `.`,
                            ],
                          }),
                        ],
                      }),
                    (0, M.jsxs)(`div`, {
                      className: `form-foot`,
                      children: [
                        (0, M.jsx)(`p`, {
                          className: `form-note`,
                          children: `Submitting opens your email app with the details filled in.`,
                        }),
                        (0, M.jsxs)(`button`, {
                          className: `btn btn-primary`,
                          children: [
                            `Send enquiry `,
                            (0, M.jsx)(N, {
                              name: `arrow`,
                              size: 18,
                              strokeWidth: 2,
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, M.jsxs)(`aside`, {
              className: `enquiry-aside`,
              children: [
                (0, M.jsx)(`h3`, {
                  children: `Prefer to talk directly?`,
                }),
                (0, M.jsx)(`p`, {
                  children: `We are open to discussing how we can work together to support Afghan women and vulnerable communities.`,
                }),
                (0, M.jsxs)(`ul`, {
                  className: `contact-lines`,
                  children: [
                    (0, M.jsxs)(`li`, {
                      children: [
                        (0, M.jsx)(N, {
                          name: `mail`,
                          size: 20,
                        }),
                        (0, M.jsxs)(`div`, {
                          children: [
                            (0, M.jsx)(`span`, {
                              children: `Email`,
                            }),
                            (0, M.jsx)(`a`, {
                              href: `mailto:${P.email}`,
                              children: P.email,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, M.jsxs)(`li`, {
                      children: [
                        (0, M.jsx)(N, {
                          name: `phone`,
                          size: 20,
                        }),
                        (0, M.jsxs)(`div`, {
                          children: [
                            (0, M.jsx)(`span`, {
                              children: `Phone`,
                            }),
                            (0, M.jsx)(`a`, {
                              href: `tel:${P.phone.replace(/\s/g, ``)}`,
                              children: P.phone,
                            }),
                          ],
                        }),
                      ],
                    }),
                    Qn.map((e) =>
                      (0, M.jsxs)(
                        `li`,
                        {
                          children: [
                            (0, M.jsx)(N, {
                              name: `pin`,
                              size: 20,
                            }),
                            (0, M.jsxs)(`div`, {
                              children: [
                                (0, M.jsx)(`span`, {
                                  children: e.role,
                                }),
                                e.city,
                              ],
                            }),
                          ],
                        },
                        e.city,
                      ),
                    ),
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
            text: `Learn more about our mission, vision, structure and areas of work before we talk.`,
          }),
        }),
      }),
    ],
  });
}
