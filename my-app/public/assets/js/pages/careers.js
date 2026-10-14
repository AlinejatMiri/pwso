// Careers page component, extracted from the web2zip React bundle.
function CareersPage() {
  let [e, t] = Hn(),
    n = Bi.some((t) => t.key === e.get(`tab`)) ? e.get(`tab`) : `careers`,
    r = (e) =>
      t(
        e === `careers`
          ? {}
          : {
              tab: e,
            },
        {
          replace: !0,
        },
      ),
    i = Vi[n];
  return (0, M.jsxs)(`div`, {
    className: `page-careers`,
    children: [
      (0, M.jsx)(ii, {
        title: `Jobs & procurement`,
        path: `/careers`,
        description: `Jobs and procurement at PWSO: current vacancies, tender notices and how to apply.`,
      }),
      (0, M.jsx)(Br, {
        crumb: `Jobs & procurement`,
        parent: {
          to: `/careers`,
          label: `Get Involved`,
        },
        title: (0, M.jsxs)(M.Fragment, {
          children: [
            `Work with purpose. `,
            (0, M.jsx)(`em`, {
              children: `Partner with integrity.`,
            }),
          ],
        }),
        lead: `Join us in building stronger, more resilient communities across Afghanistan, as a member of our team or as a supplier.`,
        img: `./assets/img/resources-hero.jpg`,
      }),
      (0, M.jsx)(`section`, {
        className: `section`,
        children: (0, M.jsxs)(`div`, {
          className: `container`,
          children: [
            (0, M.jsx)(`div`, {
              className: `toolbar`,
              children: (0, M.jsx)(Qr, {
                items: Bi,
                value: n,
                onChange: r,
                label: `Opportunity type`,
              }),
            }),
            (0, M.jsxs)(`div`, {
              role: `tabpanel`,
              "aria-label": n === `careers` ? `Careers` : `Procurement`,
              children: [
                (0, M.jsx)(ei, {
                  icon: i.empty.icon,
                  art: i.empty.art,
                  title: i.empty.title,
                  text: i.empty.text,
                  children: (0, M.jsxs)(`a`, {
                    href: `mailto:${P.email}?subject=${encodeURIComponent(i.empty.subject)}`,
                    className: `btn btn-secondary btn-sm`,
                    children: [
                      (0, M.jsx)(N, {
                        name: `mail`,
                        size: 16,
                        strokeWidth: 2,
                      }),
                      ` Ask about opportunities`,
                    ],
                  }),
                }),
                (0, M.jsxs)(`div`, {
                  className: `careers-steps`,
                  children: [
                    (0, M.jsx)(Hr, {
                      eyebrow: i.head.eyebrow,
                      title: i.head.title,
                      text: i.head.text,
                    }),
                    (0, M.jsx)(ti, {
                      items: i.steps,
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
          className: `container contact-strip`,
          children: [
            (0, M.jsxs)(`div`, {
              children: [
                (0, M.jsx)(zr, {
                  children: `Enquiries`,
                }),
                (0, M.jsxs)(`h2`, {
                  children: [
                    `Questions about `,
                    (0, M.jsx)(`em`, {
                      children: `careers or procurement?`,
                    }),
                  ],
                }),
                (0, M.jsx)(`p`, {
                  className: `section-text`,
                  children: `Our team can tell you about current and upcoming opportunities.`,
                }),
              ],
            }),
            (0, M.jsxs)(`div`, {
              className: `contact-strip-actions`,
              children: [
                (0, M.jsxs)(`a`, {
                  href: `mailto:${P.email}`,
                  className: `btn btn-primary`,
                  children: [
                    (0, M.jsx)(N, {
                      name: `mail`,
                      size: 18,
                      strokeWidth: 2,
                    }),
                    ` `,
                    P.email,
                  ],
                }),
                (0, M.jsxs)(`a`, {
                  href: `tel:${P.phone.replace(/\s/g, ``)}`,
                  className: `btn btn-secondary`,
                  children: [
                    (0, M.jsx)(N, {
                      name: `phone`,
                      size: 18,
                      strokeWidth: 2,
                    }),
                    ` `,
                    P.phone,
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
