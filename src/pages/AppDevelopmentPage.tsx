import React from 'react';
import { motion } from 'framer-motion';
import { 
  Smartphone,
  Code,
  Star,
  Quote,
  CheckCircle,
  Database,
  Zap,
  Settings,
  Users
} from 'lucide-react';

const AppDevelopmentPage: React.FC = () => {
  const appServices = [
    {
      title: "Native Apps (iOS & Android)",
      description: "Platform-specific apps built with Swift for iOS and Kotlin/Java for Android for optimal performance."
    },
    {
      title: "Cross-Platform Apps",
      description: "React Native, Flutter, and Ionic apps that work seamlessly across iOS and Android platforms."
    },
    {
      title: "On-Demand Apps",
      description: "Delivery, taxi, booking, and service marketplace apps with real-time tracking and payments."
    },
    {
      title: "Business & Productivity Apps",
      description: "Custom business solutions, CRM systems, and productivity tools tailored to your workflow."
    },
    {
      title: "Social Networking Apps",
      description: "Community platforms with chat, groups, push notifications, and social features."
    },
    {
      title: "E-Commerce & Fintech Apps",
      description: "Secure shopping apps and financial technology solutions with payment integration."
    }
  ];

  const appTechnologies = [
    {
      category: "Languages",
      tools: ["Swift (iOS)", "Kotlin/Java (Android)", "JavaScript/TypeScript"]
    },
    {
      category: "Frameworks", 
      tools: ["React Native", "Flutter", "Ionic"]
    },
    {
      category: "Backend",
      tools: ["Node.js", "Laravel APIs"]
    },
    {
      category: "Databases",
      tools: ["Firebase", "MySQL", "MongoDB"]
    }
  ];

  const portfolioProjects = [
    {
      title: "Food Delivery App",
      description: "Full-featured delivery system with tracking & payment integration.",
      type: "On-Demand App"
    },
    {
      title: "E-Commerce Mobile App",
      description: "Integrated with Shopify store, increasing orders by 50%.",
      type: "E-Commerce App"
    },
    {
      title: "Social Networking App",
      description: "Custom-built with chat, groups, and push notifications.",
      type: "Social App"
    },
    {
      title: "Productivity App",
      description: "Task management app with real-time collaboration.",
      type: "Business App"
    }
  ];

  const clientTestimonials = [
    "CraftyCrew built our app exactly how we imagined.",
    "The UX design is smooth and user-friendly.",
    "Our app launched on time and with zero bugs.",
    "They were proactive and gave us great suggestions.",
    "The app boosted customer engagement by 60%.",
    "Great communication and professional support.",
    "We love the performance and speed of the app.",
    "CraftyCrew is our go-to partner for app development.",
    "They integrated our app with backend systems flawlessly.",
    "Very impressed with their technical skills and design sense."
  ];

  const faqs = [
    {
      question: "How long does it take to build a website or app?",
      answer: "Depends on complexity — usually 3-6 weeks for websites, 6-12 weeks for apps."
    },
    {
      question: "What will be the cost?",
      answer: "We provide flexible pricing based on project requirements. You'll always get a clear quote before we start."
    },
    {
      question: "Do you offer revisions?",
      answer: "Yes, we provide unlimited revisions until you're satisfied."
    },
    {
      question: "Which technologies do you use?",
      answer: "We use the latest frameworks and tools — React, Laravel, Node.js, Flutter, and more."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Mobile Apps That Transform Ideas Into Reality
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              From startups to enterprises, CraftyCrew builds apps that are fast, user-friendly, and built for growth.
            </p>
            <motion.a
              href="mailto:craftycrew87@gmail.com?subject=App Development - Get Started"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors inline-block"
            >
              Let's Build Your App -- Get a Free Consultation!
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Mobile Apps Are Important
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              In today's mobile-first world, apps are the fastest way to connect with customers, increase engagement, and grow revenue. At CraftyCrew, we specialize in creating secure, scalable, and intuitive mobile applications that deliver real business results.
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              What We Build
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We develop applications that are not only functional but also user-friendly, scalable, and built to grow with your business.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {appServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="card p-8 text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-r from-purple-500 to-blue-600 flex items-center justify-center text-white">
                  {index === 0 && <Smartphone className="h-8 w-8" />}
                  {index === 1 && <Code className="h-8 w-8" />}
                  {index === 2 && <Settings className="h-8 w-8" />}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Technologies We Use
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We use cutting-edge technologies to build robust, scalable applications that perform excellently across all platforms.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {appTechnologies.map((tech, index) => (
              <motion.div
                key={tech.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="card p-6 text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r from-purple-500 to-blue-600 flex items-center justify-center text-white">
                  <Database className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {tech.category}
                </h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  {tech.tools.map((tool, toolIndex) => (
                    <li key={toolIndex}>{tool}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our App Development Portfolio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how we've helped businesses succeed with custom mobile and web applications.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {portfolioProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="card p-6"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-br from-purple-500 to-blue-600 p-3 rounded-lg mr-4">
                    <Smartphone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
                    <span className="text-sm text-purple-600 font-medium">{project.type}</span>
                  </div>
                </div>
                <p className="text-gray-600">{project.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Reviews Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what businesses say about our app development services.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clientTestimonials.slice(0, 6).map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="card p-6"
              >
                <div className="flex items-center mb-4">
                  <Quote className="h-6 w-6 text-purple-500 mr-2" />
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about our app development services.
            </p>
          </motion.div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Choose CraftyCrew for App Development
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Full-Stack Expertise — From frontend to backend, web to mobile",
              "Client-Focused Approach — Every project tailored to your needs",
              "Scalability & Security — Built with growth and safety in mind",
              "Proven Results — Real businesses, real growth, real ROI",
              "Ongoing Support — We stay with you post-launch to ensure success"
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-gradient-to-br from-purple-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <p className="text-gray-700 font-medium">{feature}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Your app idea deserves to reach the world
            </h2>
            <p className="text-xl mb-8">
              Let CraftyCrew make it happen.
            </p>
            <motion.a
              href="mailto:craftycrew87@gmail.com?subject=App Development - Get Started"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors inline-block"
            >
              Book a Free Strategy Call Today!
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AppDevelopmentPage;
