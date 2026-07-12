export type Readout = {
  before: string
  after: string
  label: string
}

export type WorkCard = {
  slug: string
  image: string
  imageAlt: string
  meta: string
  title: string
  summary: string
  pills: { text: string; coral?: boolean }[]
}

export type ImpactItem =
  | { type: 'transform'; from: string; to: string; label: string }
  | { type: 'single'; value: string; label: string }

export type TimelineItem = {
  year: string
  role: string
  desc: string
}

export type Testimonial = {
  quote: string
  note?: string
  logo: string
  logoAlt: string
  name: string
  role: string
}

export const heroReadouts: Readout[] = [
  { before: '1M', after: '46M', label: 'PicPay Card users scaled' },
  { before: '1', after: '14', label: 'designers led at PicPay' },
  { before: '16', after: '75', label: 'design leadership score at Axur' },
  { before: '36', after: '69', label: 'NPS after card transformation' },
]

export const workCards: WorkCard[] = [
  {
    slug: 'picpay',
    image: '/images/picpay/card-phone.png',
    imageAlt: 'PicPay Card app interface on a phone screen',
    meta: 'PicPay · Digital Banking · 2021–2024',
    title: 'Rethinking the Card Experience',
    summary:
      "Redesigned PicPay's card ecosystem end to end — from a single confusing MVP to a scalable family of financial products.",
    pills: [{ text: '46M users' }, { text: 'NPS 71', coral: true }, { text: '+48% virtual cards' }],
  },
  {
    slug: 'axur',
    image: '/images/axur/design-system.png',
    imageAlt: 'Axur design system documentation',
    meta: 'Axur Cybersecurity · Design Org & AI · 2024–2025',
    title: 'Scaling Design Through Organizational Transformation and AI',
    summary:
      'Rebuilt the design organization and shipped an engineering-first design system powered by Figma Dev Mode + MCP, without growing headcount.',
    pills: [{ text: '70% faster delivery' }, { text: 'Leadership score 16→75', coral: true }],
  },
  {
    slug: 'sanar',
    image: '/images/sanar/header.webp',
    imageAlt: 'Sanar medical education product interface',
    meta: 'Sanar · EdTech · Product Research',
    title: 'Helping Users Achieve Their Dream Medical Specialty',
    summary:
      'Built an Alpha/Beta user-research program that turned medical students into daily collaborators — shaping the most-used platform of its kind in Latin America.',
    pills: [{ text: '#1 platform in LatAm' }, { text: 'Top app store ratings', coral: true }],
  },
]

export const impactItems: ImpactItem[] = [
  { type: 'transform', from: '1', to: '14', label: "Designers led across PicPay's card portfolio" },
  { type: 'single', value: '2M', label: 'Limite Garantido cards issued in the first month of launch' },
  { type: 'single', value: '75', label: 'Team eNPS — "Amazing" range, up 58pts in one year' },
  { type: 'single', value: '70%', label: 'Faster design-to-production delivery at Axur' },
]

export const timeline: TimelineItem[] = [
  {
    year: 'Now',
    role: 'Manager of Design, Hotmart',
    desc: 'Also co-founder at Writeopia, and a mentor on ADPList.',
  },
  {
    year: '2024–25',
    role: 'Global Manager of Product Experience & Design',
    desc: 'Rebuilt the design organization for the AI era: career frameworks, coaching, and an engineering-first design system. Leadership score moved from 16 to 75.',
  },
  {
    year: '2024',
    role: 'Senior Design Manager, PicPay & Original',
    desc: 'Led a team of managers, staff and designers across both brands.',
  },
  {
    year: '2023',
    role: 'Design Manager, PicPay',
    desc: 'Responsible for Gold, Platinum, Black and Limite Garantido — growing the team to 14 designers.',
  },
  {
    year: '2022',
    role: 'Design Lead, PicPay',
    desc: 'Took ownership of PF and PJ cards, leading a team of 4 designers.',
  },
  {
    year: '2021',
    role: 'Senior Product Designer, PicPay',
    desc: 'Joined focused on the Personal Cards BU. Redesigned the card home in 3 months, scope soon expanded to PF + PJ products.',
  },
  {
    year: '2021–24',
    role: 'Design Coach, Cubos Academy',
    desc: 'Developed and delivered UI/UX courses — lectures, exercises, and projects — with career guidance for students entering the market.',
  },
  {
    year: '2021–24',
    role: 'Product Design Mentor, Interaction Future',
    desc: 'Part-time mentorship on interaction design and emerging technologies, alongside full-time product roles.',
  },
  {
    year: '2021',
    role: 'Senior Product Designer (Consultant), GFT · BV',
    desc: 'Four-month UX consulting engagement at BV bank — user research, prototypes, and design-system evolution.',
  },
  {
    year: '2020–21',
    role: 'Product Designer, Sanar',
    desc: 'Hands-on product design in edtech; laid groundwork for the Alpha/Beta research program and continuous discovery culture.',
  },
  {
    year: '2020–21',
    role: 'Product Design Manager, CerraD\'ouro',
    desc: 'Led product design for a fashion & jewelry brand — from concept to collection launch.',
  },
  {
    year: '2019–21',
    role: 'Chapter Leader, Ladies That UX',
    desc: 'Built community and programming for women in UX in Belo Horizonte.',
  },
  {
    year: '2019–20',
    role: 'Product Designer / PM, One Beleza',
    desc: 'Led product design for a beauty & wellness platform — ideation through launch, research, and design systems.',
  },
  {
    year: '2018–19',
    role: 'Marketing Designer, Escola em Movimento (Arco)',
    desc: 'Product and marketing design for an innovative Edtech — named among Latin America\'s 100 most innovative Edtechs.',
  },
  {
    year: '2016–18',
    role: 'UX Designer, CadeVAn',
    desc: 'End-to-end product design — wireframes, prototypes, user research, and stakeholder collaboration.',
  },
  {
    year: '2014–16',
    role: 'Product Designer, SimplePass',
    desc: 'Early startup product design across research, prototyping, and iterative delivery.',
  },
  {
    year: '2013–20',
    role: 'Product Designer, CerraD\'ouro',
    desc: 'Seven years in fashion & jewelry — market research, 3D prototyping, and the Nature collection of organic metalwork pieces.',
  },
]

export const testimonials: Testimonial[] = [
  {
    quote:
      'Whenever any problem arises, whether technical or personal, she is the person we think of reaching out to. She offers suggestions for solutions on screen design, process management, and stakeholder communication — and goes above and beyond.',
    logo: '/images/shared/logo-picpay.png',
    logoAlt: 'PicPay logo',
    name: 'Team Member',
    role: 'PicPay',
  },
  {
    quote:
      'Gabriela is an exceptional professional — highly competent, communicative, creative and innovative. She possesses enviable leadership and project management skills, creating a positive and healthy work environment that encourages participation and learning for all.',
    logo: '/images/shared/logo-axur.png',
    logoAlt: 'Axur logo',
    name: 'COO',
    role: 'Axur',
  },
  {
    quote:
      "Gabi is the most caring manager I have ever had. She is always open to opinions and doesn't care about her own status; she treats everyone in a welcoming manner.",
    logo: '/images/shared/logo-picpay.png',
    logoAlt: 'PicPay logo',
    name: 'Team Member',
    role: 'PicPay',
  },
  {
    quote:
      'Gabriela is very didactic, explains very well, provides excellent examples to address doubts, and is very clear and precise.',
    note: '— Perfect score, 10!',
    logo: '/images/shared/logo-cubos.png',
    logoAlt: 'Cubos Academy logo',
    name: 'Student',
    role: 'Cubos Academy',
  },
]

export const socialLinks = [
  { label: 'LinkedIn ↗', href: 'https://www.linkedin.com/in/gabrielasvlima/' },
  { label: 'Medium ↗', href: 'https://medium.com/@gabrielasvlima' },
  { label: 'Book me on ADPList ↗', href: 'https://adplist.org/mentors/gabriela-lima' },
]
