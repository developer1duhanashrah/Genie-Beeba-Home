export const tiers = [
  {
    name: 'Starter',
    id: 'starter',
    href: '#',
    price: '$399',
    unit: '/Month',
    mostPopular: false,
  },
  {
    name: 'Growth',
    id: 'growth',
    href: '#',
    price: '$750',
    unit: '/Month',
    mostPopular: true,
  },
  {
    name: 'Elite',
    id: 'elite',
    href: '#',
    price: '$1199',
    unit: '/Month',
    mostPopular: false,
  },
];

export const sections = [
  {
    name: 'Core Capabilities',
    features: [
      {
        name: 'AI Agents',
        tiers: { Starter: '3 Agent', Growth: '5 Agent', Elite: 'Unlimited' },
      },
      {
        name: 'Inbound Call Handling',
        tiers: { Starter: true, Growth: true, Elite: true },
      },
      {
        name: 'Appointment Booking',
        tiers: { Starter: true, Growth: true, Elite: true },
      },
      {
        name: 'Lead Qualification (Smart AI)',
        tiers: { Starter: true, Growth: true, Elite: true },
      },
      {
        name: 'Call Routing (Human Transfer)',
        tiers: { Starter: true, Growth: true, Elite: true },
      },
    ],
  },
  {
    name: 'Management & Tech',
    features: [
      {
        name: 'Usage Tracking (Minutes)',
        tiers: { Starter: true, Growth: true, Elite: true },
      },
      {
        name: 'Call Recording & Transcripts',
        tiers: { Starter: true, Growth: true, Elite: true },
      },
      {
        name: 'Analytics Dashboard',
        tiers: { Starter: 'Basic', Growth: 'Advanced', Elite: 'Real-time + Custom' },
      },
      {
        name: 'Knowledge Base Training',
        tiers: { Starter: true, Growth: true, Elite: true },
      },
    ],
  },
  {
    name: 'Limits & Performance',
    features: [
      {
        name: 'Minutes Included',
        tiers: { Starter: '200', Growth: '1000', Elite: '2500' },
      },
      {
        name: 'Concurrent Call Handling',
        tiers: { Starter: '1', Growth: '5', Elite: '10' },
      },
    ],
  },
  {
    name: 'Support & Success',
    features: [
      {
        name: 'AI Chat Support',
        tiers: { Starter: true, Growth: true, Elite: true },
      },
      {
        name: 'Email Support',
        tiers: { Starter: '24-48 hrs', Growth: 'Same Day', Elite: 'Fast-track' },
      },
      {
        name: 'Onboarding Support',
        tiers: { Starter: 'Self-serve', Growth: 'Guided Setup Call', Elite: 'Full Deployment' },
      },
      {
        name: 'Dedicated Manager',
        tiers: { Starter: false, Growth: false, Elite: true },
      },
      {
        name: 'Live Agent Support (Call/WhatsApp)',
        tiers: { Starter: false, Growth: true, Elite: true },
      },
    ],
  },
];