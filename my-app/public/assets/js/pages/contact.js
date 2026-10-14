// Contact page component, extracted from the web2zip React bundle.
function ContactPage() {
  let [e] = Hn(),
    t = qi.some((t) => t.key === e.get(`category`))
      ? e.get(`category`)
      : `General`,
    [n, r] = (0, x.useState)({
      name: ``,
      email: ``,
      subject: ``,
      message: ``,
      category: t,
    }),
    [i, a] = (0, x.useState)(!1),
    o = (e) => (t) =>
      r({
        ...n,
        [e]: t.target.value,
      });
  return (0, M.jsxs)(`div`, {
    className: `page-contact`,
    children: [
      (0, M.jsx)(ii, {
        title: `Contact`,
        path: `/contact`,
        description: `Contact PWSO in Kabul and Badakhshan: email, phone, office locations and a message form.`,
      }),
      (0, M.jsx)(Br, {
        crumb: `Contact`,
        title: (0, M.jsxs)(M.Fragment, {
          children: [
            `Let's start `,
            (0, M.jsx)(`em`, {
              children: `a conversation.`,
            }),
          ],
        }),
        lead: `We welcome your questions, ideas and partnership opportunities. Together, we can build stronger, more resilient communities across Afghanistan.`,
        img: `./assets/img/projects-inquiry.jpg`,
      }),
      (0, M.jsx)(`section`, {
        className: `section`,
        children: (0, M.jsxs)(`div`, {
          className: `container contact-grid`,
          children: [
            (0, M.jsxs)(`div`, {
              className: `form-card`,
              children: [
                (0, M.jsxs)(`h2`, {
                  children: [
                    `Send us `,
                    (0, M.jsx)(`em`, {
                      children: `a message`,
                    }),
                  ],
                }),
                (0, M.jsx)(`p`, {
                  className: `section-text`,
                  children: `Fill in the form and our team will get back to you.`,
                }),
                (0, M.jsxs)(`form`, {
                  className: `form`,
                  onSubmit: (e) => {
                    (e.preventDefault(),
                      lr(`[${n.category}] ${n.subject}`, {
                        Name: n.name,
                        Email: n.email,
                        Topic: n.category,
                        Message: n.message,
                      }),
                      a(!0));
                  },
                  children: [
                    (0, M.jsxs)(`fieldset`, {
                      className: `topics`,
                      children: [
                        (0, M.jsx)(`legend`, {
                          className: `field-label`,
                          children: `What is your message about?`,
                        }),
                        (0, M.jsx)(`div`, {
                          className: `topic-grid`,
                          children: qi.map((e) =>
                            (0, M.jsxs)(
                              `label`,
                              {
                                className: `topic ${n.category === e.key ? `is-selected` : ``}`,
                                children: [
                                  (0, M.jsx)(`input`, {
                                    type: `radio`,
                                    name: `category`,
                                    value: e.key,
                                    checked: n.category === e.key,
                                    onChange: o(`category`),
                                  }),
                                  (0, M.jsx)(N, {
                                    name: e.icon,
                                    size: 18,
                                  }),
                                  e.key,
                                ],
                              },
                              e.key,
                            ),
                          ),
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
                                `Full name `,
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
                              value: n.name,
                              onChange: o(`name`),
                            }),
                          ],
                        }),
                        (0, M.jsxs)(`label`, {
                          className: `field`,
                          children: [
                            (0, M.jsxs)(`span`, {
                              className: `field-label`,
                              children: [
                                `Email address `,
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
                              value: n.email,
                              onChange: o(`email`),
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
                            `Subject `,
                            (0, M.jsx)(`span`, {
                              className: `req`,
                              children: `*`,
                            }),
                          ],
                        }),
                        (0, M.jsx)(`input`, {
                          className: `input`,
                          required: !0,
                          value: n.subject,
                          onChange: o(`subject`),
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
                          value: n.message,
                          onChange: o(`message`),
                        }),
                      ],
                    }),
                    i &&
                      (0, M.jsxs)(`p`, {
                        className: `form-status contact-sent`,
                        role: `status`,
                        children: [
                          (0, M.jsx)(`img`, {
                            src: `./assets/img/il/contact.svg`,
                            alt: ``,
                            "aria-hidden": `true`,
                            width: `240`,
                            height: `180`,
                          }),
                          (0, M.jsxs)(`span`, {
                            children: [
                              `Your email app should now open with your message. If it doesn't, write to us at `,
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
                            `Send message `,
                            (0, M.jsx)(N, {
                              name: `send`,
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
              className: `contact-aside`,
              children: [
                (0, M.jsxs)(`div`, {
                  className: `contact-card`,
                  children: [
                    (0, M.jsx)(zr, {
                      light: !0,
                      children: `Get in touch`,
                    }),
                    (0, M.jsx)(`h2`, {
                      className: `h3`,
                      children: `We are here to connect.`,
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
                        (0, M.jsxs)(`li`, {
                          children: [
                            (0, M.jsx)(N, {
                              name: `globe`,
                              size: 20,
                            }),
                            (0, M.jsxs)(`div`, {
                              children: [
                                (0, M.jsx)(`span`, {
                                  children: `Website`,
                                }),
                                P.website,
                              ],
                            }),
                          ],
                        }),
                        (0, M.jsxs)(`li`, {
                          children: [
                            (0, M.jsx)(N, {
                              name: `building`,
                              size: 20,
                            }),
                            (0, M.jsxs)(`div`, {
                              children: [
                                (0, M.jsx)(`span`, {
                                  children: `Offices`,
                                }),
                                `Kabul (main) · Badakhshan`,
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, M.jsx)(Yr, {
                  compact: !0,
                  title: `Organization Profile`,
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
              eyebrow: `Our offices`,
              title: (0, M.jsxs)(M.Fragment, {
                children: [
                  `Where to `,
                  (0, M.jsx)(`em`, {
                    children: `find us`,
                  }),
                ],
              }),
              text: `Our main office in Kabul and sub-office in Badakhshan.`,
              action: (0, M.jsx)(`img`, {
                className: `offices-art`,
                src: `./assets/img/il/contact.svg`,
                alt: ``,
                "aria-hidden": `true`,
                loading: `lazy`,
                width: `240`,
                height: `180`,
              }),
            }),
            (0, M.jsx)(Zr, {}),
          ],
        }),
      }),
      (0, M.jsx)(`section`, {
        className: `section`,
        children: (0, M.jsxs)(`div`, {
          className: `container split split-start faq-split`,
          children: [
            (0, M.jsxs)(`div`, {
              className: `faq-intro`,
              children: [
                (0, M.jsx)(zr, {
                  children: `FAQ`,
                }),
                (0, M.jsxs)(`h2`, {
                  children: [
                    `Frequently asked `,
                    (0, M.jsx)(`em`, {
                      children: `questions`,
                    }),
                  ],
                }),
                (0, M.jsx)(`p`, {
                  className: `section-text`,
                  children: `Quick answers to common questions about contacting and working with PWSO.`,
                }),
                (0, M.jsx)(`img`, {
                  className: `faq-art`,
                  src: `./assets/img/il/feedback.svg`,
                  alt: ``,
                  "aria-hidden": `true`,
                  loading: `lazy`,
                  width: `240`,
                  height: `180`,
                }),
              ],
            }),
            (0, M.jsx)(ni, {
              items: Ji,
            }),
          ],
        }),
      }),
    ],
  });
}
