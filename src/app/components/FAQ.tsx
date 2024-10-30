"use client";

import { useState } from 'react';

const faqData = [
  {
    question: 'What is Checkdex?',
    answer: `CheckDEX is an industry-leading tool designed to verify if a token has paid for a DEX Screener enhanced listing. This information is crucial for traders and investors as it can help determine the intentions and commitment of the token's development team. By confirming a paid DEX Screener listing, CheckDEX provides valuable insight into the intention of the deployer. Our service is trusted by thousands of users daily to make informed decisions in the fast-paced world of defi trading.`,
  },
  {
    question: 'How do I get my token listed on DexScreener?',
    answer: `To get your token listed on CheckDEX, you need to pay for a DEX Screener enhanced listing:\n\n1. Visit https://marketplace.dexscreener.com/product/token-info\n2. Click on "Get Started" or "Buy Now"\n3. Fill out the required information about your token\n4. Complete the payment process\n5. Once your enhanced listing is active on DEX Screener (~5-10 minutes after payment), CheckDEX will automatically pick up this feed.\n\nRemember, having a paid DEX Screener listing not only gets you on CheckDEX but also provides additional benefits like increased visibility and credibility in the crypto community.`,
  },
  {
    question: 'Why should I buy trending for my token?',
    answer: `Trending gives your token massive exposure to active traders. Our data shows that 28.8% of tokens listed on CheckDEX Trending make it to Raydium, compared to just 1.4% of all Pump.fun tokens. That's a 20x better chance of success!`,
  },
  {
    question: 'When are trading listings visible?',
    answer: `Trending tokens are prominently displayed on CheckDEX.xyz, which exposes your token to over 7,000 daily active traders using our tool. We also have a dedicated Telegram channel (t.me/checkdex_trending) with listings updated every 5 minutes. Additionally, trending tokens are broadcast every 15 minutes across our Telegram channels that have over 6,000 active subscribers. This multi-platform visibility ensures maximum exposure for your token.`,
  },
  {
    question: 'How long does a trending listing last?',
    answer: `We offer flexible hourly reservations. You can choose the duration that fits your needs and budget. Our time slots run in 1, 3, or 6-hour increments.`,
  },
  {
    question: 'Does Checkdex have a paid API?',
    answer: `While we don't currently offer a standard paid API service, we do provide custom solutions for businesses and developers who require access to our data. These custom solutions include access to our closed API at a rate of $1 per call.\n\nIf you're interested in this service:\n\n1. Contact us through the form on our website\n2. Describe your specific needs and expected usage volume\n3. Our team will work with you to create a tailored solution for a set up fee\n4. We'll provide documentation and support for integrating our API into your systems.`,
  },
  {
    question: 'Why was I blocked from Checkdex? How can I get unblocked?',
    answer: `To maintain the quality and availability of our service for all users, we implement certain usage limits. Your IP address may be blocked if you hit our API over 100 times in one minute, as this is considered excessive usage that could potentially impact our service for others.\n\nIf you believe you've been blocked in error, here's what to do:\n\n1. Click the "Contact Us" button in the footer of our website\n2. Fill out the form with the following information:\n- Your IP address\n- The approximate time you were blocked\n- A brief explanation of your usage (e.g., were you running a script, using a bot, etc.)\n- Why you believe the block may be in error\n3. Our team will review your case as soon as possible.`,
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-900 text-white p-10">
      <h1 className="text-5xl font-bold text-center mb-8">FAQ</h1>
      <div className="space-y-4 max-w-3xl mx-auto">
        {faqData.map((item, index) => (
          <div key={index} className="border border-green-400 rounded-md">
            <button
              className="w-full text-left px-4 py-3 font-bold flex justify-between items-center hover:bg-gray-800"
              onClick={() => toggleFAQ(index)}
            >
              {item.question}
              <span>{openIndex === index ? '▲' : '▼'}</span>
            </button>
            {openIndex === index && (
              <div className="px-4 py-2 bg-gray-800">
                <p className="whitespace-pre-line">{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
