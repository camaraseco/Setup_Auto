import {
  LandingContainer,
  LandingCTA,
  LandingFAQ,
  LandingFeatures,
  LandingHero,
  LandingHowItWorks,
  LandingPainPoints,
  LandingPricing,
  LandingSocialProof,
  LandingSocialRating,
  LandingTestimonials,
} from '~/designSystem'

export default function LandingPage() {
  const features = [
    {
      heading: `Automated Trade Execution`,
      description: `Set your strategy parameters once and let the system automatically execute trades based on your predefined technical criteria.`,
      icon: <i className="las la-robot"></i>,
    },
    {
      heading: `Risk Management`,
      description: `Built-in risk controls limit exposure to 2% of capital per trade to protect your investment.`,
      icon: <i className="las la-shield-alt"></i>,
    },
    {
      heading: `Real-time Monitoring`,
      description: `Track your positions and performance with live updates and automated email notifications.`,
      icon: <i className="las la-chart-line"></i>,
    },
    {
      heading: `Technical Analysis`,
      description: `Advanced indicators including EMAs, RSI, and volume analysis to identify optimal trade entries and exits.`,
      icon: <i className="las la-chart-bar"></i>,
    },
    {
      heading: `Daily Profit Targets`,
      description: `Automatically close positions once your daily profit goal of $200 is reached.`,
      icon: <i className="las la-bullseye"></i>,
    },
    {
      heading: `Performance Analytics`,
      description: `Detailed reporting and analytics to help optimize your trading strategy over time.`,
      icon: <i className="las la-analytics"></i>,
    },
  ]

  const testimonials = [
    {
      name: `Michael Chen`,
      designation: `Day Trader`,
      content: `Since using this platform, my win rate has increased by 40%. The automated risk management keeps my emotions in check.`,
      avatar: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
    {
      name: `Sarah Williams`,
      designation: `Part-time Trader`,
      content: `As a busy professional, this app allows me to trade consistently without watching charts all day. I'm finally seeing steady profits.`,
      avatar: 'https://randomuser.me/api/portraits/women/6.jpg',
    },
    {
      name: `David Kumar`,
      designation: `Professional Trader`,
      content: `The technical analysis automation is spot-on. I've reduced my trading time by 70% while maintaining profitability.`,
      avatar: 'https://randomuser.me/api/portraits/men/7.jpg',
    },
  ]

  const navItems = [
    {
      title: `Features`,
      link: `#features`,
    },
    {
      title: `Pricing`,
      link: `#pricing`,
    },
    {
      title: `FAQ`,
      link: `#faq`,
    },
  ]

  const packages = [
    {
      title: `Basic`,
      description: `Perfect for beginning traders`,
      monthly: 49,
      yearly: 470,
      features: [
        `Basic technical indicators`,
        `Email notifications`,
        `Daily performance reports`,
      ],
    },
    {
      title: `Professional`,
      description: `For serious day traders`,
      monthly: 99,
      yearly: 950,
      features: [
        `Advanced technical analysis`,
        `Real-time trade execution`,
        `Risk management controls`,
        `Priority support`,
      ],
      highlight: true,
    },
    {
      title: `Enterprise`,
      description: `Custom solutions for trading firms`,
      monthly: 299,
      yearly: 2900,
      features: [
        `Custom indicators`,
        `Multi-account management`,
        `API access`,
        `Dedicated support`,
      ],
    },
  ]

  const questionAnswers = [
    {
      question: `How does the automated trading system work?`,
      answer: `The system executes trades based on your pre-defined technical criteria, including EMAs, RSI, and volume analysis. Once set up, it runs automatically until reaching your daily profit target.`,
    },
    {
      question: `What risk management features are included?`,
      answer: `We implement strict 2% per trade risk limits, automated stop-losses, and daily loss limits to protect your capital.`,
    },
    {
      question: `Can I customize the trading parameters?`,
      answer: `Yes, you can fully customize technical indicators, position sizes, and profit targets to match your trading style.`,
    },
    {
      question: `What happens if there are technical issues?`,
      answer: `Our system includes fail-safes that automatically close positions if connectivity issues occur, protecting your capital.`,
    },
  ]

  const steps = [
    {
      heading: `Configure Your Strategy`,
      description: `Set up your technical indicators and risk parameters based on your trading style.`,
    },
    {
      heading: `Activate Automation`,
      description: `Let the system monitor markets and execute trades based on your criteria.`,
    },
    {
      heading: `Monitor Performance`,
      description: `Track your trades and receive real-time notifications on position status.`,
    },
    {
      heading: `Optimize & Scale`,
      description: `Use performance analytics to refine your strategy and grow your profits.`,
    },
  ]

  const painPoints = [
    {
      emoji: `😰`,
      title: `Emotional trading leads to impulsive decisions`,
    },
    {
      emoji: `💸`,
      title: `Inconsistent execution causes missed opportunities`,
    },
    {
      emoji: `⏰`,
      title: `Time-consuming manual trading reduces work-life balance`,
    },
  ]

  return (
    <LandingContainer navItems={navItems}>
      <LandingHero
        title={`Transform Your Trading with Professional-Grade Automation`}
        subtitle={`Achieve consistent $200 daily profits with automated technical analysis and risk management`}
        buttonText={`Start Trading Smarter`}
        pictureUrl={`https://marblism-dashboard-api--production-public.s3.us-west-1.amazonaws.com/MtlMvz-setuptrade-EKUi`}
        socialProof={
          <LandingSocialRating
            numberOfUsers={1000}
            suffixText={`profitable traders and counting`}
          />
        }
      />
      <LandingSocialProof title={`Trusted By Leading Traders`} />
      <LandingPainPoints
        title={`80% of Day Traders Lose Money Due to Emotional Trading`}
        painPoints={painPoints}
      />
      <LandingHowItWorks
        title={`Your Path to Consistent Trading Profits`}
        steps={steps}
      />
      <LandingFeatures
        id="features"
        title={`Trade with Confidence Using Professional Automation`}
        subtitle={`Eliminate emotional decisions and execute your strategy with precision`}
        features={features}
      />
      <LandingTestimonials
        title={`Join Traders Who've Transformed Their Results`}
        subtitle={`See how automation has helped others achieve consistent profits`}
        testimonials={testimonials}
      />
      <LandingPricing
        id="pricing"
        title={`Invest in Your Trading Success`}
        subtitle={`Choose the plan that matches your trading goals`}
        packages={packages}
      />
      <LandingFAQ
        id="faq"
        title={`Common Questions About Automated Trading`}
        subtitle={`Everything you need to know about getting started`}
        questionAnswers={questionAnswers}
      />
      <LandingCTA
        title={`Start Your Journey to Consistent Trading Profits`}
        subtitle={`Join successful traders who've eliminated emotional decisions and achieved their daily profit goals`}
        buttonText={`Begin Trading Smarter`}
        buttonLink={`/register`}
      />
    </LandingContainer>
  )
}
  