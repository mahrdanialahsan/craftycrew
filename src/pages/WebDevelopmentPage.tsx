import React from 'react';
import { motion } from 'framer-motion';
import { 
  Globe,
  Code,
  Star,
  Quote,
  CheckCircle,
  ShoppingCart,
  Palette,
  Search,
  Smartphone
} from 'lucide-react';

const WebDevelopmentPage: React.FC = () => {
  const webServices = [
    {
      title: "Custom Websites",
      description: "Professional, responsive websites built from scratch to match your brand and business needs perfectly."
    },
    {
      title: "E-Commerce Solutions",
      description: "Complete online stores with payment integration, inventory management, and customer-friendly shopping experiences."
    },
    {
      title: "Corporate Websites",
      description: "Professional business websites that establish credibility, showcase services, and convert visitors into customers."
    }
  ];

  const webTechnologies = [
    {
      category: "Frontend",
      tools: ["HTML5", "CSS3", "JavaScript", "React.js", "Next.js", "Tailwind CSS"]
    },
    {
      category: "CMS Platforms", 
      tools: ["WordPress", "Shopify", "Strapi", "Sanity"]
    },
    {
      category: "E-Commerce",
      tools: ["Shopify", "WooCommerce", "Custom Solutions"]
    },
    {
      category: "SEO & Performance",
      tools: ["Google Analytics", "Search Console", "PageSpeed Optimization"]
    }
  ];

  const portfolioProjects = [
    {
      title: "E-Commerce Fashion Store",
      description: "Built with Shopify + custom features, increasing sales by 40%.",
      type: "E-Commerce"
    },
    {
      title: "Corporate Law Firm Website",
      description: "Professional, SEO-optimized WordPress site with lead generation forms.",
      type: "Corporate Website"
    },
    {
      title: "Restaurant Chain Website",
      description: "Multi-location website with online ordering and reservation system.",
      type: "Business Website"
    },
    {
      title: "SaaS Landing Page",
      description: "High-conversion Next.js page, delivering 3x more signups.",
      type: "Landing Page"
    }
  ];

  const clientTestimonials = [
    "CraftyCrew delivered our website on time with flawless quality.",
    "Our e-commerce sales doubled after they rebuilt our online store.",
    "The team is highly professional and responsive.",
    "Best web development partner we've worked with — reliable and creative.",
    "CraftyCrew understood our requirements perfectly.",
    "Smooth process from start to finish.",
    "They exceeded expectations in both design and functionality.",
    "Very transparent, professional, and supportive team.",
    "Our business grew significantly after launching the new site.",
    "Highly recommended for custom websites and e-commerce solutions."
  ];

  const faqs = [
    {
      question: "How long does it take to build a website?",
      answer: "Typically 2-4 weeks for standard websites, 4-8 weeks for e-commerce sites, depending on complexity and features required."
    },
    {
      question: "Do you provide website maintenance?",
      answer: "Yes, we offer ongoing maintenance, updates, security monitoring, and technical support for all websites we build."
    },
    {
      question: "Will my website be mobile-friendly?",
      answer: "Absolutely! All our websites are fully responsive and optimized for mobile devices, tablets, and desktops."
    },
    {
      question: "Can you help with SEO?",
      answer: "Yes, we build SEO-friendly websites with proper structure, meta tags, and optimization to help you rank better in search engines."
    },
    {
      question: "What's included in the website cost?",
      answer: "Our packages include design, development, basic SEO setup, mobile optimization, and initial revisions. Hosting and domain are separate."
    },
    {
      question: "Do you work with existing websites?",
      answer: "Yes, we can redesign, optimize, or add new features to existing websites to improve performance and user experience."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-green-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Professional Web Development
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Custom websites that drive results. From business websites to e-commerce stores, we create digital experiences that convert visitors into customers.
            </p>
            <motion.a
              href="mailto:craftycrew87@gmail.com?subject=Web Development - Get Started"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors inline-block"
            >
              Get Your Website Today
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
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
              Our Web Development Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We create websites that not only look great but also perform exceptionally, driving real business results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {webServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="card p-8 text-center h-full flex flex-col"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-r from-blue-500 to-green-600 flex items-center justify-center text-white flex-shrink-0">
                  {index === 0 && <Globe className="h-8 w-8" />}
                  {index === 1 && <ShoppingCart className="h-8 w-8" />}
                  {index === 2 && <Palette className="h-8 w-8" />}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex-shrink-0">
                  {service.title}
                </h3>
                <p className="text-gray-600 flex-grow">
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
              We leverage the latest web technologies to ensure your website is fast, secure, and future-proof.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {webTechnologies.map((tech, index) => (
              <motion.div
                key={tech.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="card p-6 text-center h-full flex flex-col"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r from-blue-500 to-green-600 flex items-center justify-center text-white flex-shrink-0">
                  <Code className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 flex-shrink-0">
                  {tech.category}
                </h3>
                <ul className="text-gray-600 text-sm space-y-1 flex-grow">
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
              Our Web Development Portfolio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how we've helped businesses succeed with custom web solutions.
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
                  <div className="bg-gradient-to-br from-blue-500 to-green-600 p-3 rounded-lg mr-4">
                    <Globe className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
                    <span className="text-sm text-blue-600 font-medium">{project.type}</span>
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
              Don't just take our word for it. Here's what businesses say about our web development services.
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
                  <Quote className="h-6 w-6 text-blue-500 mr-2" />
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
              Everything you need to know about our web development services.
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
              Why Choose CraftyCrew for Web Development
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Custom Design — Unique websites tailored to your brand",
              "Mobile-First — Responsive design for all devices",
              "SEO Optimized — Built for search engine visibility",
              "Fast Loading — Optimized performance and speed",
              "Ongoing Support — Maintenance and updates included",
              "Proven Results — Track record of successful projects"
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-gradient-to-br from-blue-500 to-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <p className="text-gray-700 font-medium">{feature}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to launch your professional website?
            </h2>
            <p className="text-xl mb-8">
              Let's create a website that drives results for your business.
            </p>
            <motion.a
              href="mailto:craftycrew87@gmail.com?subject=Web Development - Get Started"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors inline-block"
            >
              Get Your Website Today
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WebDevelopmentPage;
