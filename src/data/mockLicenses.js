// src/data/mockLicenses.js
export const mockLicenseData = [
  {
    id: 'l001',
    name: 'Whispering Leaf License (MP3 Lease)',
    price: 29.99,
    format: 'MP3 (320kbps)',
    distributionLimit: '5,000 copies / 500,000 streams',
    musicVideo: '1 Music Video (Monetized)',
    radioBroadcasting: 'Not Permitted',
    livePerformances: 'Permitted (Non-profit)',
    commercialUse: 'Permitted (Small Projects)',
    credit: 'Required (e.g., "Prod. by [Your Artist Name]")',
    delivery: 'Instant digital download',
    notes: 'Ideal for independent artists, demos, and non-commercial projects.'
  },
  {
    id: 'l002',
    name: 'Moonbeam License (WAV Lease)',
    price: 49.99,
    format: 'WAV (24-bit) + MP3',
    distributionLimit: '10,000 copies / 1,000,000 streams',
    musicVideo: '1 Music Video (Monetized)',
    radioBroadcasting: '2 Stations Permitted',
    livePerformances: 'Permitted (Monetized)',
    commercialUse: 'Permitted (Independent Commercial)',
    credit: 'Required (e.g., "Prod. by [Your Artist Name]")',
    delivery: 'Instant digital download',
    notes: 'Higher quality audio, suitable for more serious releases and streaming.'
  },
  {
    id: 'l003',
    name: 'Starfall License (Track Stems)',
    price: 99.99,
    format: 'WAV Track Stems + WAV & MP3 Masters',
    distributionLimit: 'Unlimited copies / Unlimited streams',
    musicVideo: 'Unlimited Music Videos (Monetized)',
    radioBroadcasting: 'Unlimited Stations',
    livePerformances: 'Permitted (Monetized)',
    commercialUse: 'Permitted (Full Commercial Use)',
    credit: 'Required (e.g., "Prod. by [Your Artist Name]")',
    delivery: 'Instant digital download',
    notes: 'Ultimate flexibility for professional mixing, mastering, and full commercial releases.'
  },
  {
    id: 'l004',
    name: 'World Tree Accord (Exclusive Rights)',
    price: 'Inquire for Price', // Or a fixed high price e.g., 499.99
    format: 'WAV Track Stems + WAV & MP3 Masters',
    distributionLimit: 'Unlimited (Beat sold once)',
    musicVideo: 'Unlimited',
    radioBroadcasting: 'Unlimited',
    livePerformances: 'Unlimited',
    commercialUse: 'Full Exclusive Rights',
    credit: 'Negotiable (Often not required or specified in contract)',
    delivery: 'Secure delivery with contract',
    notes: 'Full ownership. The beat will be removed from the store. Contact for details and agreement.'
  }
];

export const mockFaqData = [
  {
    id: 'faq001',
    question: 'How do I receive my files after purchase?',
    answer: 'You will receive an email with secure download links immediately after your payment is successfully processed. Please check your spam/junk folder if you don\'t see it within a few minutes.'
  },
  {
    id: 'faq002',
    question: 'What payment methods do you accept?',
    answer: 'We accept major credit cards (Visa, MasterCard, American Express) and PayPal for secure transactions.'
  },
  {
    id: 'faq003',
    question: 'Can I upgrade my license later?',
    answer: 'Yes, in most cases, you can upgrade your license by paying the difference. Please contact us with your original order details to arrange an upgrade.'
  },
  {
    id: 'faq004',
    question: 'What does "Credit Required" mean?',
    answer: 'It means you must credit the producer in your track title, description, or metadata, typically as "Prod. by [Your Artist Name]". Specifics are often outlined in the license agreement.'
  },
  {
    id: 'faq005',
    question: 'What if I exceed the streaming/distribution limits of my lease?',
    answer: 'If you anticipate exceeding the limits of your current lease, you should upgrade to a higher-tier license or purchase an exclusive license to ensure you remain compliant.'
  }
];