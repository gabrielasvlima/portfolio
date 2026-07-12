export type CaseMeta = {
  label: string
  value: string
}

export type CaseImpact = {
  num: string
  txt: string
}

export type CaseBlock =
  | { type: 'h2'; text: string }
  | { type: 'p'; html: string }
  | { type: 'ul'; items: string[] }
  | { type: 'figure'; src: string; alt: string; caption: string }
  | { type: 'pull'; text: string }

export type CaseStudy = {
  slug: string
  title: string
  dek: string
  seoTitle: string
  seoDescription: string
  path: string
  ogImage: string
  heroImage: string
  heroAlt: string
  meta: CaseMeta[]
  impact: CaseImpact[]
  blocks: CaseBlock[]
  nav: { prev?: { label: string; href: string }; next?: { label: string; href: string } }
}

export const cases: Record<string, CaseStudy> = {
  picpay: {
    slug: 'picpay',
    title: 'Rethinking the Card Experience',
    dek: "Redesigning PicPay's card ecosystem to improve adoption, simplify financial journeys, and create a scalable foundation for future products.",
    seoTitle: 'Rethinking the Card Experience — PicPay | Gabriela Lima',
    seoDescription: "Case study: redesigning PicPay's card ecosystem — +48% virtual cards, 800k+ generated, and −25K support calls.",
    path: '/work/picpay',
    ogImage: '/images/picpay/card-phone.png',
    heroImage: '/images/picpay/card-phone.png',
    heroAlt: 'PicPay Card app interface',
    meta: [
      { label: 'Role', value: 'Senior Product Designer' },
      { label: 'Company', value: 'PicPay' },
      { label: 'Scope', value: 'Credit Card Experience · Digital Banking · Product Strategy' },
    ],
    impact: [
      { num: '+48%', txt: 'increase in virtual card creation' },
      { num: '800k+', txt: 'additional virtual cards generated' },
      { num: '+50%', txt: 'increase in access to the card home' },
      { num: '−25K', txt: 'support calls after enabling self-service' },
    ],
    nav: {
      prev: { label: '← Back to all work', href: '/#work' },
      next: { label: 'Next: Axur — Scaling Design & AI →', href: '/work/axur' },
    },
    blocks: [
      { type: 'h2', text: 'Overview' },
      {
        type: 'p',
        html: 'When I joined PicPay as a Senior Product Designer, I was challenged to redesign the card experience. PicPay had launched its credit and debit card MVP, but the experience was still evolving — users struggled to understand how their cards worked, track transactions, and manage important actions. Debit card users especially needed to contact customer support to resolve basic questions.',
      },
      {
        type: 'p',
        html: 'These usability issues created uncertainty and reduced users\' confidence in managing their financial lives through the app. To understand the challenges properly, we combined customer feedback, support insights, business goals, and usability research — including tests with over <strong>1,000 users</strong> using Maze, analyzing task completion, navigation patterns and heat maps.',
      },
      {
        type: 'figure',
        src: '/images/picpay/heatmap.png',
        alt: 'Usability testing heatmap conducted with Maze',
        caption: 'Heatmap from usability testing conducted with Maze, 1,000+ users.',
      },
      {
        type: 'p',
        html: 'The testing surfaced that <strong>35% of users deviated from the expected path</strong>, and key actions took an average of <strong>28.6 seconds</strong> to complete — clear signs of friction. We paired this with qualitative feedback from customer support, social media and app store reviews to prioritize the most critical usability gaps:',
      },
      {
        type: 'ul',
        items: [
          'Usability issues across core flows',
          'Slow-loading home screen',
          'Poor visibility for important notifications',
          'Outages caused by a third-party supplier',
          'Low sense of security',
          'Inconsistent registration flows',
        ],
      },
      { type: 'h2', text: 'From insight to direction' },
      {
        type: 'p',
        html: 'After mapping users, we ran benchmarking and desk research to understand market trends, then brought Business, Technology and Customer Support together to build a Customer-Driven Strategy (CDS) matrix — aligning expectations and kick-starting ideation across teams.',
      },
      {
        type: 'figure',
        src: '/images/picpay/benchmark.png',
        alt: 'Benchmark research',
        caption: 'Benchmark and competitive research.',
      },
      {
        type: 'p',
        html: 'We produced between <strong>10 and 15 design versions</strong>, iterating from low-fidelity concepts to high-fidelity interactive prototypes, validating each round with representative users on key journeys: card management, transactions, and critical actions.',
      },
      {
        type: 'figure',
        src: '/images/picpay/prototyping.png',
        alt: 'Prototyping and testing process',
        caption: 'Prototyping and testing across multiple iterations.',
      },
      {
        type: 'figure',
        src: '/images/picpay/navigation-prototype.png',
        alt: 'Navigation prototype',
        caption: 'Navigation prototype used for internal and external testing.',
      },
      {
        type: 'p',
        html: 'In parallel, we ran internal validations with Business, Technology and Customer Support, and shipped changes through a versioning system that let us monitor impact and adjust in phases — reducing implementation risk.',
      },
      {
        type: 'figure',
        src: '/images/picpay/validation.png',
        alt: 'Internal validation sessions with cross-functional teams',
        caption: 'Internal validation with cross-functional teams.',
      },
      {
        type: 'figure',
        src: '/images/picpay/final-flow.jpeg',
        alt: 'Final delivered card ordering flow',
        caption: 'The final version delivered to production.',
      },
      { type: 'h2', text: 'Results' },
      {
        type: 'p',
        html: 'Three months after launch, the redesigned card experience delivered measurable gains across engagement, adoption and operational cost:',
      },
      {
        type: 'ul',
        items: [
          '<strong>+50% increase</strong> in access to the new card home — better discoverability drove more frequent engagement.',
          '<strong>800,000+ virtual cards generated</strong>, a 48% growth in virtual card creation, by simplifying access to one of PicPay\'s key digital payment features.',
          '<strong>25,000 users</strong> stopped contacting customer support for address changes after we enabled the action directly in-app — real operational savings.',
        ],
      },
      {
        type: 'figure',
        src: '/images/picpay/activity-alerts.png',
        alt: 'Activity alerts in the redesigned card experience',
        caption: 'Activity alerts, one of the trust-building details in the final experience.',
      },
      {
        type: 'pull',
        text: "A great banking experience isn't about removing functionality — it's about helping people understand what matters, when it matters.",
      },
      { type: 'h2', text: 'Learnings' },
      {
        type: 'p',
        html: 'Designing financial products means balancing simplicity and complexity at the same time. This project reinforced my belief that successful product design happens when customer needs, business goals, and technology constraints are solved together — not traded off against each other.',
      },
    ],
  },

  axur: {
    slug: 'axur',
    title: 'Scaling Design Through Organizational Transformation and AI',
    dek: 'Rebuilding a design organization for the AI era, and shipping an engineering-first design system — without growing the team.',
    seoTitle: 'Scaling Design Through Organizational Transformation and AI — Axur | Gabriela Lima',
    seoDescription: "Case study: rebuilding Axur's design organization and shipping an engineering-first design system — leadership score 16→75, ~70% faster delivery.",
    path: '/work/axur',
    ogImage: '/images/axur/org-diagram.png',
    heroImage: '/images/axur/org-diagram.png',
    heroAlt: 'Axur design organization restructuring diagram',
    meta: [
      { label: 'Role', value: 'Head of Design' },
      { label: 'Company', value: 'Axur Cybersecurity' },
      { label: 'Scope', value: 'Design Organization · Design System · AI Workflows' },
    ],
    impact: [
      { num: '16 → 75', txt: 'design leadership score, in under a year' },
      { num: '~70%', txt: 'faster design-to-production implementation' },
      { num: '1 → many', txt: 'senior/staff designers, from a single senior on day one' },
      { num: '1 + 1', txt: 'designer + engineer shipped the whole design system' },
    ],
    nav: {
      prev: { label: '← Previous: PicPay', href: '/work/picpay' },
      next: { label: 'Next: Sanar — Dream Medical Specialty →', href: '/work/sanar' },
    },
    blocks: [
      { type: 'h2', text: 'The challenge' },
      {
        type: 'p',
        html: "When I joined Axur, the company was preparing for the next generation of AI-powered cybersecurity products. The product vision was evolving fast, but the way Design and Engineering collaborated hadn't kept pace: interfaces were implemented inconsistently, designers spent significant time producing specifications, and engineers frequently rebuilt UI patterns from scratch.",
      },
      {
        type: 'p',
        html: 'At the same time, the design organization lacked the seniority needed to influence product strategy across the company. Rather than growing the team, my goal was to transform how it operated.',
      },
      { type: 'h2', text: 'Raising the bar without growing the team' },
      {
        type: 'p',
        html: 'When I joined, only one designer had senior-level experience. Over the following months I restructured the team through hiring, internal development, coaching and clearer performance expectations — turning it into a team composed primarily of senior and staff-level designers with strong product ownership.',
      },
      {
        type: 'p',
        html: "This wasn't about adding more people. It was about raising the quality of decision-making, increasing autonomy, and building an organization capable of leading product strategy instead of simply executing requests. To support the shift, I also:",
      },
      {
        type: 'ul',
        items: [
          'Redesigned career progression',
          'Introduced a competency framework',
          'Established regular coaching and mentoring',
          'Removed unnecessary management layers',
          'Empowered designers to own strategic initiatives',
        ],
      },
      {
        type: 'p',
        html: "As the organization's maturity increased, Design became a trusted strategic partner across Product and Engineering.",
      },
      { type: 'h2', text: 'Building an engineering-first design system' },
      {
        type: 'p',
        html: "Our biggest delivery bottleneck wasn't creating designs — it was translating them into production. To solve this, I led the creation of a new Design System built around implementation rather than documentation: instead of treating Figma as the final deliverable, Design and Engineering shared the same source of truth.",
      },
      {
        type: 'p',
        html: 'The project was intentionally lean: <strong>1 Product Designer, 1 Front-end Engineer, 4 months.</strong> Using Figma Dev Mode together with an MCP-powered workflow, we dramatically reduced the manual effort required to translate components into production-ready code. The result became an engineering-ready platform with reusable templates, design tokens, documentation and production components teams could immediately adopt.',
      },
      {
        type: 'figure',
        src: '/images/axur/design-system.png',
        alt: 'Axur design system documentation',
        caption: "The design system's documentation, built as an engineering source of truth.",
      },
      { type: 'h2', text: 'From design files to production' },
      {
        type: 'p',
        html: 'After launch, engineering teams stopped rebuilding common interfaces — they assembled products from standardized templates and reusable components instead. Engineers could focus on solving product problems rather than interpreting design files. The outcome:',
      },
      {
        type: 'ul',
        items: [
          'Approximately <strong>70% faster implementation</strong>',
          'Greater UI consistency across products',
          'Higher implementation quality and fewer visual inconsistencies',
          'Faster product iterations',
        ],
      },
      { type: 'h2', text: 'Leadership impact' },
      {
        type: 'p',
        html: "Technology alone wouldn't have produced these results — the organizational transformation mattered just as much. By increasing the team's seniority and redefining Design's role in the company, we created an environment where designers actively influenced product strategy, collaborated earlier with Engineering, and owned outcomes rather than deliverables. This cultural shift showed up directly in our internal metrics: the Leadership Score moved from <strong>16 to 75</strong> in less than a year.",
      },
      {
        type: 'figure',
        src: '/images/axur/leadership-score.png',
        alt: 'Axur leadership score improvement chart',
        caption: 'Leadership score progression following the reorganization.',
      },
      {
        type: 'pull',
        text: "Scaling Design doesn't necessarily require scaling headcount. The highest leverage often comes from building stronger people, better systems, and tighter collaboration with Engineering.",
      },
      { type: 'h2', text: 'What I learned' },
      {
        type: 'p',
        html: 'By combining organizational transformation with AI-assisted workflows and an engineering-first Design System, we built a foundation that let the company deliver faster while improving consistency and product quality.',
      },
    ],
  },

  sanar: {
    slug: 'sanar',
    title: 'Helping Users Achieve Their Dream Medical Specialty',
    dek: 'Building an Alpha/Beta research program that turned medical students into daily collaborators — and shaped the most-used platform of its kind in Latin America.',
    seoTitle: 'Helping Users Achieve Their Dream Medical Specialty — Sanar | Gabriela Lima',
    seoDescription: "Case study: building Sanar's Alpha/Beta research program — the most-used medical education platform in Latin America.",
    path: '/work/sanar',
    ogImage: '/images/sanar/header.webp',
    heroImage: '/images/sanar/header.webp',
    heroAlt: 'Sanar medical education platform interface',
    meta: [
      { label: 'Role', value: 'Product Designer' },
      { label: 'Company', value: 'Sanar' },
      { label: 'Scope', value: 'EdTech · User Research · Continuous Discovery' },
    ],
    impact: [
      { num: '#1', txt: 'most-used platform of its kind in Latin America' },
      { num: 'Top', txt: 'app store ratings among medical education apps' },
      { num: '2', txt: 'continuous research groups: Alpha (internal) & Beta (external)' },
      { num: 'Daily', txt: 'conversations with real users shaping the roadmap' },
    ],
    nav: {
      prev: { label: '← Previous: Axur', href: '/work/axur' },
      next: { label: 'Back to all work →', href: '/#work' },
    },
    blocks: [
      { type: 'h2', text: 'Putting users at the center' },
      {
        type: 'p',
        html: 'At Sanar, we always strive to place our users at the center of the product. Our Alpha and Beta testing groups helped us tackle the challenge of building something completely user-centered — because listening to our users is the bridge to understanding an increasingly complex world.',
      },
      {
        type: 'p',
        html: "The Alpha and Beta groups came from a simple need: strong, constant interaction between the team and users to establish a genuine user-centered culture. It wasn't an easy call — we had real doubts about whether users would tolerate an unfinished or bug-filled product. What pushed us forward was realizing that making mistakes isn't a problem, it's how you arrive at the best solution.",
      },
      { type: 'h2', text: 'What Alphas and Betas do' },
      {
        type: 'p',
        html: 'Alphas and Betas are user groups in constant interaction with the team — providing input on project ideas, running research, testing, interviews and feedback sessions. At Sanar, our users helped us with:',
      },
      {
        type: 'ul',
        items: [
          'Understanding how the product is actually used',
          'Discovering bugs and flow issues',
          'Assessing product usability',
          'Feedback on improvements and implementation needs',
          'Tracking user satisfaction',
          'Proposing new features',
          'Benchmarking against alternatives',
        ],
      },
      {
        type: 'figure',
        src: '/images/sanar/alpha-beta.jpeg',
        alt: 'Alpha and Beta testing program illustration',
        caption: 'The Alpha/Beta program structure.',
      },
      {
        type: 'p',
        html: '<strong>Alpha testing</strong> validated acceptance, satisfaction and success in-house, run by our Ambassadors — a user club that promotes and recommends the product. We released builds to Alphas before pre-launch, close to completion, and used structured questionnaires to understand reliability at an early stage.',
      },
      {
        type: 'p',
        html: '<strong>Beta testing</strong> was our external acceptance test, run by students who organically joined the challenge of building a more comprehensive tool for future doctors. Betas gave feedback on already-launched products, took part in qualitative and quantitative research, and reviewed new solutions before official release — reducing the risk of product failure through real client validation.',
      },
      {
        type: 'p',
        html: 'We organized the whole pipeline in three stages: <strong>Pre-Alpha</strong> (still a prototype, unpublished), <strong>Alpha</strong> (near completion, tested internally), and <strong>Beta</strong> (released to a limited external audience for feedback and iteration).',
      },
      {
        type: 'figure',
        src: '/images/sanar/mockup-app.png',
        alt: 'Sanar app mockup after launch',
        caption: 'The product after launch — refined through continuous Alpha/Beta feedback.',
      },
      { type: 'h2', text: 'What users told us' },
      {
        type: 'p',
        html: 'Once live, feedback from our Alpha and Beta groups confirmed the direction: students called out the cleaner white background, bigger and more visible class icons, uninterrupted access to classes without re-login, and a clearer view of question progress and performance across the full range of topics. Several mentioned the new flashcard folders and filters made studying noticeably faster and more organized.',
      },
      {
        type: 'figure',
        src: '/images/sanar/feedback.webp',
        alt: "User feedback highlights from Sanar's Beta program",
        caption: 'Feedback highlights collected from the Beta community.',
      },
      {
        type: 'pull',
        text: "Making mistakes is not a problem — it's how you arrive at the best solution.",
      },
      { type: 'h2', text: 'Outcome' },
      {
        type: 'p',
        html: 'The result is a research relationship built on genuine trust: real users in daily conversation with the team, exchanging information, clarifying doubts, and helping shape solutions. That closeness helped Sanar become the platform with the most users in Latin America and some of the highest ratings in app stores for medical education.',
      },
    ],
  },
}

export function getCase(slug: string): CaseStudy | undefined {
  return cases[slug]
}
