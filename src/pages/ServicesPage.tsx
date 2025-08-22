import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Code, 
  Zap, 
  Palette, 
  Users, 
  Globe,
  Smartphone,
  ShoppingCart,
  Database,
  Settings,
  Shield,
  Star,
  Quote,
  ArrowRight
} from 'lucide-react';

const ServicesPage: React.FC = () => {
  const detailedServices = [
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Website Development",
      description: "We develop fast, responsive, and SEO-friendly websites tailored to your business goals.",
      route: "/services/web-app-development/web-development",
      features: [
        "Custom Business Websites",
        "Landing Pages & Microsites",
        "Portfolio or Agency Sites",
        "Blog or News Platforms",
        "Performance Optimization"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Web Applications",
      description: "Need more than a static website? We build robust web apps with scalable architecture.",
      route: "/services/web-app-development/web-development",
      features: [
        "SaaS Dashboards",
        "CRM/ERP Systems",
        "Booking & Scheduling Platforms",
        "Membership & Subscription Portals",
        "Admin Panels & Analytics Dashboards"
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <ShoppingCart className="h-8 w-8" />,
      title: "eCommerce Solutions",
      description: "We craft seamless online shopping experiences that drive conversions.",
      route: "/services/web-app-development/web-development",
      features: [
        "Shopify & WooCommerce Stores",
        "Custom Product Catalogs",
        "Payment Gateway Integration",
        "Multi-vendor Marketplaces",
        "Order Management Systems"
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile App Development",
      description: "We build mobile apps that users love - clean, functional, and scalable.",
      route: "/services/web-app-development/app-development",
      platforms: ["iOS (Swift) & Android (Kotlin)", "React Native", "Flutter"],
      appTypes: [
        "Business Utilities",
        "Educational Apps",
        "Fitness, Food, Finance Apps",
        "Community & Social Platforms"
      ],
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Backend & API Development",
      description: "Secure, high-performance APIs and server logic to power your web/mobile stack.",
      route: "/services/web-app-development/app-development",
      features: [
        "RESTful & GraphQL API Development",
        "Database Design & Optimization",
        "User Auth & Role Management",
        "Cloud Deployment (AWS, DigitalOcean, etc.)"
      ],
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "CMS & Custom Integrations",
      description: "Empower your team with easy content management and smart automation.",
      route: "/services/web-app-development/web-development",
      features: [
        "WordPress / Headless CMS (Strapi, Sanity)",
        "Laravel Nova / OctoberCMS",
        "3rd-Party API Integrations",
        "CRM / Email / Payment Automation"
      ],
      color: "from-teal-500 to-cyan-500"
    }
  ];

  const coreServices = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Web & App Development",
      description: "From corporate websites to e-commerce platforms, CRMs, and custom apps — we build digital experiences tailored to your business. Our developers deliver beyond expectations, ensuring every project is scalable, secure, and user-friendly.",
      route: "/services/web-app-development/web-development",
      portfolio: [
        {
          title: "E-Commerce Store",
          description: "Built with secure payments, smooth UX, and product management system."
        },
        {
          title: "Real Estate CRM",
          description: "Custom web app to manage listings, clients, and leads."
        },
        {
          title: "Corporate Website",
          description: "Sleek, responsive, and SEO-friendly for brand presence."
        },
        {
          title: "Mobile App",
          description: "Hybrid app for bookings and user engagement."
        }
      ]
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "AI Automation",
      description: "Automate tasks, streamline workflows, and save hours every week. Our team specializes in N8n automations, AI agents, Zapier, and complex integrations. We create smart solutions that help you focus on growth, not repetitive work.",
      route: "/services/ai-automation",
      reviews: [
        "CraftyCrew's automation saved us 15+ hours a week — game changer!",
        "Seamless Zapier integration, flawless execution.",
        "Their N8n workflows boosted our productivity instantly.",
        "Highly professional team, always delivering more than expected.",
        "Best investment we made this year — automation that just works.",
        "CraftyCrew set up AI agents that transformed our customer support.",
        "They made complex integrations look easy.",
        "We scaled faster thanks to their automation strategies.",
        "Brilliant team — reliable and efficient.",
        "Automation that actually makes life easier — highly recommended."
      ]
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Graphic Designing",
      description: "Your brand deserves to stand out. We design logos, branding kits, presentations, flyers, brochures, social media graphics, and more. Whether it's online or offline, our designs make your business look polished and professional.",
      route: "/services/graphic-design",
      portfolio: [
        {
          title: "Logo Design",
          description: "Modern, memorable, and unique brand identities."
        },
        {
          title: "Corporate Brochure",
          description: "Professionally designed for business impact."
        },
        {
          title: "Presentation Design",
          description: "Engaging slides for webinars & client pitches."
        },
        {
          title: "Social Media Pack",
          description: "Creative posts that boost engagement."
        }
      ]
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Lead Generation",
      description: "Our expert team provides high-quality, targeted leads tailored to your requirements. Whether you're in real estate or solar, we help you connect with the right people and close deals faster.",
      route: "/services/lead-generation",
      reviews: [
        "The real estate leads were accurate and ready to close — amazing ROI!",
        "Within 2 weeks, we closed our first solar deal thanks to CraftyCrew.",
        "High-quality leads that actually convert — not junk data.",
        "Their leads helped us expand into new markets successfully.",
        "Saved us so much time — targeted, verified leads every time.",
        "Solar leads were exactly what we needed to hit our monthly goals.",
        "Professional team, clear communication, and quality results.",
        "These leads helped us build a stronger pipeline fast.",
        "CraftyCrew understands real estate business needs perfectly.",
        "Reliable partner for long-term lead generation."
      ]
    }
  ];

  const technologies = {
    frontend: ["React", "Next.js", "Vue.js", "HTML5", "Tailwind CSS"],
    backend: ["Node.js", "Laravel", "PHP", "Express.js", "MongoDB", "MySQL"],
    mobile: ["React Native", "Flutter", "Kotlin", "Swift"],
    devops: ["GitHub", "Docker", "DigitalOcean", "AWS"],
    ecommerce: ["Shopify", "WooCommerce", "Custom Stacks"],
    cms: ["WordPress", "Strapi", "Sanity", "OctoberCMS"]
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Custom Web & App Development Services
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-6">
              Modern, Scalable, and High-Performance Digital Solutions
            </p>
            <p className="text-lg text-white/80 max-w-4xl mx-auto">
              At Crafty Crew Agency, we build tailored web and mobile applications that solve real problems, 
              improve user experience, and drive business growth. Whether you're launching a startup, scaling a 
              business, or modernizing legacy systems - our development team brings your vision to life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Detailed Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Development Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From sleek websites to complex backend systems, mobile apps, and eCommerce platforms - we 
              design, build, and optimize every layer of your digital presence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {detailedServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="card p-8 cursor-pointer h-full flex flex-col"
                onClick={() => window.location.href = service.route}
              >
                <div className={`w-16 h-16 mb-6 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center text-white flex-shrink-0`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex-shrink-0">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 flex-grow">
                  {service.description}
                </p>
                
                {service.features && (
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                )}

                {service.platforms && (
                  <div className="space-y-3 mb-6">
                    <h4 className="font-semibold text-gray-900">Platforms:</h4>
                    {service.platforms.map((platform, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                        <span className="text-gray-700 text-sm">{platform}</span>
                      </div>
                    ))}
                    <h4 className="font-semibold text-gray-900 mt-4">Apps we build:</h4>
                    {service.appTypes?.map((appType, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                        <span className="text-gray-700 text-sm">{appType}</span>
                      </div>
                    ))}
                  </div>
                )}

                <div className="mt-auto">
                  <Link
                    to={service.route}
                    className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold rounded-lg hover:from-primary-600 hover:to-secondary-600 transition-all duration-300 transform hover:scale-105"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Services with Portfolio/Reviews */}
      {coreServices.map((service, serviceIndex) => (
        <section key={service.title} className={`py-20 ${serviceIndex % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Service Content */}
              <motion.div
                initial={{ opacity: 0, x: serviceIndex % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 mb-6 rounded-xl bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center text-white">
                  {service.icon}
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  {service.title}
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  {service.description}
                </p>
                <Link
                  to={service.route}
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold rounded-lg hover:from-primary-600 hover:to-secondary-600 transition-all duration-300 transform hover:scale-105"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </motion.div>

              {/* Portfolio/Reviews */}
              <motion.div
                initial={{ opacity: 0, x: serviceIndex % 2 === 0 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                {service.portfolio ? (
                  <div className="space-y-4">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-6">Portfolio Examples</h3>
                    {service.portfolio.map((item, index) => (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="card p-6"
                      >
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">
                          {item.title}
                        </h4>
                        <p className="text-gray-600">
                          {item.description}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-4">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-6">Client Reviews</h3>
                    {service.reviews?.slice(0, 5).map((review, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="card p-6"
                      >
                        <div className="flex items-start space-x-3">
                          <Quote className="h-6 w-6 text-primary-500 mt-1 flex-shrink-0" />
                          <p className="text-gray-700 italic">
                            "{review}"
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* Technologies Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Tools & Technologies We Use
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We leverage the latest technologies and tools to deliver cutting-edge solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(technologies).map(([category, techs], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4 capitalize">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {techs.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Crafty Crew Agency?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choosing us means choosing reliability, performance, and clean code that lasts. 
              We don't just build products — we become your tech partner.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              {
                icon: <Shield className="h-8 w-8" />,
                title: "Agile & Transparent",
                description: "Transparent workflow with regular updates and clear communication"
              },
              {
                icon: <Code className="h-8 w-8" />,
                title: "Clean Code",
                description: "Scalable, documented code that's built to last and grow"
              },
              {
                icon: <Palette className="h-8 w-8" />,
                title: "UI/UX + Development",
                description: "Design and development under one roof for seamless integration"
              },
              {
                icon: <Star className="h-8 w-8" />,
                title: "Post-Launch Support",
                description: "Ongoing support and optimization after project completion"
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Trusted by All",
                description: "Trusted by Startups, Agencies & Enterprises worldwide"
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="card p-6 text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center text-white">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Let's Build Something Great
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Have an idea in mind? Let's turn it into a powerful, scalable digital product. 
              We're here to bring your vision to life - from MVPs to full-scale apps.
            </p>
            <motion.a
              href="mailto:craftycrew87@gmail.com?subject=Request a Custom Quote - CraftyCrew"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary-600 font-semibold py-4 px-8 rounded-lg text-lg hover:bg-gray-100 transition-colors duration-300 inline-block"
            >
              Request a Custom Quote
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
