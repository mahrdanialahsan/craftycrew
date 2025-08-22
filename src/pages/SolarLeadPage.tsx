import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sun,
  Phone,
  Star,
  Quote,
  CheckCircle,
  DollarSign,
  TrendingUp,
  Shield,
  Clock,
  MapPin,
  Users,
  Zap
} from 'lucide-react';

const SolarLeadPage: React.FC = () => {
  const solarServices = [
    {
      title: "Verified Solar Leads",
      description: "We deliver qualified homeowners interested in solar energy solutions. These leads are pre-screened for solar readiness and high electricity usage."
    },
    {
      title: "Appointment Setting",
      description: "Our trained callers handle outreach, qualify prospects, and set qualified appointments for your solar sales team to close."
    },
    {
      title: "Lead Nurturing",
      description: "We maintain ongoing communication with prospects, keeping them engaged until they're ready to make a solar investment decision."
    }
  ];

  const solarLeadTypes = [
    "Homeowners Interested in Solar",
    "Net Metering Qualified Leads",
    "Solar Installation Ready Leads",
    "Utility Bill Qualified Leads (high electricity usage)",
    "Appointment-Set Leads",
    "Commercial Solar Leads (business properties ready for solar installation)"
  ];

  const solarTools = [
    {
      name: "Facebook Ads / Google Ads",
      description: "Lead acquisition and targeting"
    },
    {
      name: "CallTools / Mojo Dialer",
      description: "Cold calling and lead nurturing"
    },
    {
      name: "CRM Systems",
      description: "Managing and tracking leads through the pipeline"
    },
    {
      name: "Solar Calculators",
      description: "ROI and savings calculations for prospects"
    }
  ];

  const solarReviews = [
    "CraftyCrew's solar leads helped me close 5 installations in the first month.",
    "The appointment setting service is incredible --- qualified prospects ready to buy.",
    "Finally getting leads that actually want solar, not just tire kickers.",
    "Their lead nurturing keeps prospects engaged until they're ready to commit.",
    "ROI was immediate --- I made back my investment in the first week.",
    "The leads are pre-qualified and ready for solar consultations.",
    "Professional team that understands the solar industry.",
    "Consistent quality leads month after month.",
    "Their system integrates perfectly with our sales process.",
    "Best solar lead generation service I've ever used."
  ];

  const faqs = [
    {
      question: "What types of solar leads do you provide?",
      answer: "We provide verified leads for homeowners interested in solar, net metering qualified leads, solar installation ready leads, high electricity usage prospects, appointment-set leads, and commercial solar leads."
    },
    {
      question: "How do you qualify solar prospects?",
      answer: "We screen prospects based on electricity usage, property ownership, solar readiness, and expressed interest in renewable energy solutions."
    },
    {
      question: "Do you offer appointment setting services?",
      answer: "Yes, our trained callers handle outreach, qualify prospects, and set qualified appointments for your solar sales team."
    },
    {
      question: "What's the typical conversion rate for solar leads?",
      answer: "Our solar leads typically have a 15-25% conversion rate, significantly higher than industry averages due to our qualification process."
    },
    {
      question: "Can you target specific geographic areas?",
      answer: "Absolutely! We can target specific states, cities, or regions based on your solar installation service areas."
    },
    {
      question: "How quickly can I start receiving solar leads?",
      answer: "We can typically start delivering qualified solar leads within 24-48 hours of receiving your requirements and payment."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-yellow-500 to-orange-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Solar Lead Generation
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Get qualified solar leads that convert. From homeowners ready for solar to commercial properties, we deliver prospects that want to go green and save money.
            </p>
            <motion.a
              href="mailto:craftycrew87@gmail.com?subject=Solar Lead Generation - Get Started"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-orange-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors inline-block"
            >
              Get Solar Leads Today
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
              Our Solar Lead Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive solar lead generation services designed to help you find and connect with prospects ready to invest in solar energy.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {solarServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="card p-8 text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-r from-yellow-500 to-orange-600 flex items-center justify-center text-white">
                  {index === 0 && <Shield className="h-8 w-8" />}
                  {index === 1 && <Phone className="h-8 w-8" />}
                  {index === 2 && <Users className="h-8 w-8" />}
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

      {/* Lead Types Section */}
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
              Solar Lead Types We Provide
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From residential homeowners to commercial properties, we deliver the specific types of solar leads that match your business model.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solarLeadTypes.map((type, index) => (
              <motion.div
                key={type}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-orange-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-800 font-medium">{type}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
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
              Professional Tools We Use
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We leverage industry-leading tools and platforms to ensure accurate, high-quality solar lead generation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solarTools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="card p-6 text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r from-yellow-500 to-orange-600 flex items-center justify-center text-white">
                  <TrendingUp className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {tool.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  {tool.description}
                </p>
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
              What Solar Companies Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what solar professionals say about our lead generation services.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solarReviews.slice(0, 6).map((review, index) => (
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
                  <Quote className="h-6 w-6 text-orange-500 mr-2" />
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 italic">"{review}"</p>
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
              Everything you need to know about our solar lead generation services.
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
              Why Choose CraftyCrew for Solar Leads
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Solar-Specific Qualification --- We understand what makes a good solar prospect.",
              "High Conversion Rates --- 15-25% conversion rate vs industry average.",
              "Appointment Setting --- Qualified prospects ready for your sales team.",
              "Geographic Targeting --- Focus on your service areas only.",
              "Lead Nurturing --- Keep prospects engaged until they're ready to buy.",
              "24/7 Support --- We're here when you need us."
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-gradient-to-br from-yellow-500 to-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <p className="text-gray-700 font-medium">{feature}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to get qualified solar leads?
            </h2>
            <p className="text-xl mb-8">
              Start closing more solar installations with verified, targeted leads today.
            </p>
            <motion.a
              href="mailto:craftycrew87@gmail.com?subject=Solar Lead Generation - Get Started"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-orange-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors inline-block"
            >
              Get Solar Leads Today
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SolarLeadPage;
