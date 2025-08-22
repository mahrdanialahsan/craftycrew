import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Code, 
  Zap, 
  Palette, 
  Users, 
  ArrowRight, 
  CheckCircle
} from 'lucide-react';

const HomePage: React.FC = () => {
  const services = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Web & App Development",
      description: "From sleek websites to complex apps, we deliver tailored solutions that match your vision and go beyond expectations.",
      color: "from-blue-500 to-cyan-500",
      route: "/services/web-app-development/web-development"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "AI Automation",
      description: "Harness the power of N8n and Zapier with workflows, integrations, and AI agents that save time and accelerate growth.",
      color: "from-purple-500 to-pink-500",
      route: "/services/ai-automation"
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Graphic Designing",
      description: "Logos, branding, presentations, social media, brochures — we design everything your business needs to look professional and stand out.",
      color: "from-orange-500 to-red-500",
      route: "/services/graphic-design"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Real Estate & Solar Lead Generation",
      description: "Targeted, verified leads that help you close deals faster in real estate and solar markets.",
      color: "from-green-500 to-emerald-500",
      route: "/services/lead-generation/real-estate"
    }
  ];

  const features = [
    { icon: <CheckCircle className="h-5 w-5" />, text: "Skilled & diverse expert team" },
    { icon: <CheckCircle className="h-5 w-5" />, text: "Results that speak for themselves" },
    { icon: <CheckCircle className="h-5 w-5" />, text: "Tailored solutions for every client" },
    { icon: <CheckCircle className="h-5 w-5" />, text: "Long-term support and trust" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 gradient-bg opacity-90"></div>
        
        {/* Animated Background Elements */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 right-20 w-40 h-40 bg-white/10 rounded-full blur-xl"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              CraftyCrew
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Where Ideas Become Digital Reality
            </p>
            <p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto">
              Smart solutions, expert teams, and results that exceed expectations.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="mailto:craftycrew87@gmail.com?subject=Let's build something extraordinary together"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary text-lg px-8 py-4 flex items-center justify-center space-x-2"
            >
              <span>Let's build something extraordinary together</span>
              <ArrowRight className="h-5 w-5 flex-shrink-0" />
            </motion.a>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* Intro Section */}
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
              Your Growth Partner
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              At CraftyCrew, we're more than just a digital agency — we're your growth partner. 
              With a dedicated team of experts across development, automation, design, and lead generation, 
              we create solutions that help businesses thrive in today's competitive market.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
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
              Our Core Services
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Link
                key={service.title}
                to={service.route}
                className="block"
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="card p-8 text-center group cursor-pointer h-full flex flex-col"
                >
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex-shrink-0">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 flex-grow">
                    {service.description}
                  </p>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why Choose CraftyCrew?
              </h2>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.text}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <div className="text-primary-600">
                      {feature.icon}
                    </div>
                    <span className="text-lg text-gray-700">{feature.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Ready to take your business to the next level?
                </h3>
                <p className="text-gray-600 mb-6">
                  Get in touch today — let's craft your success story.
                </p>
                <motion.a
                  href="mailto:craftycrew87@gmail.com?subject=Get Started Today - CraftyCrew"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary"
                >
                  Get Started Today
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
