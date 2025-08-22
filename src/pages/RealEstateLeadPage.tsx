import React from 'react';
import { motion } from 'framer-motion';
import { 
  Home,
  Phone,
  Star,
  Quote,
  CheckCircle,
  DollarSign,
  TrendingUp,
  Shield,
  Clock,
  MapPin,
  Users
} from 'lucide-react';

const RealEstateLeadPage: React.FC = () => {
  const realEstateServices = [
    {
      title: "Verified Leads",
      description: "We deliver fresh, accurate real estate leads customized to your needs. These leads are filtered by location, property type, and owner profile to maximize closing potential."
    },
    {
      title: "Skip Tracing",
      description: "Our advanced skip tracing uncovers missing contact information --- phone numbers, emails, mailing addresses --- helping you connect directly with property owners and decision-makers."
    },
    {
      title: "Cold Calling",
      description: "Our trained callers handle outreach, qualify leads, and set appointments for you. This means you spend less time prospecting and more time closing."
    }
  ];

  const realEstateLeadTypes = [
    "Motivated Sellers",
    "Cash Buyers", 
    "Absentee Owners",
    "Pre-Foreclosures",
    "Vacant Properties",
    "Probate Leads",
    "FSBO (For Sale By Owner) Leads",
    "Expired Listings"
  ];

  const realEstateTools = [
    {
      name: "PropStream",
      description: "Property data, analytics & lists"
    },
    {
      name: "BatchLeads",
      description: "Skip tracing & lead enrichment"
    },
    {
      name: "REIPro",
      description: "CRM and lead management"
    },
    {
      name: "Mojo Dialer / CallTools",
      description: "Power dialing for cold calling campaigns"
    }
  ];

  const realEstateReviews = [
    "CraftyCrew's leads helped me close 3 deals in the first month.",
    "Skip tracing accuracy was excellent --- reached owners I couldn't before.",
    "Cold calling service saved me hours --- appointments came ready.",
    "Highly recommend their real estate leads --- quality is unmatched.",
    "The leads were fresh, not recycled lists.",
    "Excellent ROI --- I got my money back within weeks.",
    "Their system gave me an edge over competitors in my area.",
    "Finally a company that delivers exactly what they promise.",
    "My pipeline has never looked stronger.",
    "Their cold calling team is professional and efficient."
  ];

  const faqs = [
    {
      question: "What types of real estate leads do you provide?",
      answer: "We provide verified leads for motivated sellers, cash buyers, absentee owners, pre-foreclosures, vacant properties, probate leads, FSBO leads, and expired listings."
    },
    {
      question: "How fresh are the leads?",
      answer: "All leads are verified within 24-48 hours of delivery, ensuring maximum accuracy and contactability."
    },
    {
      question: "Do you offer skip tracing services?",
      answer: "Yes, we provide advanced skip tracing to find missing contact information including phone numbers, emails, and mailing addresses."
    },
    {
      question: "Can you handle cold calling for us?",
      answer: "Absolutely! Our trained callers handle outreach, qualify leads, and set appointments so you can focus on closing deals."
    },
    {
      question: "What tools do you use for lead generation?",
      answer: "We use industry-leading tools including PropStream, BatchLeads, REIPro, and Mojo Dialer/CallTools for comprehensive lead management."
    },
    {
      question: "How quickly can I start receiving leads?",
      answer: "We can typically start delivering leads within 24-48 hours of receiving your requirements and payment."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-green-600 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Real Estate Lead Generation
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Get verified, high-quality real estate leads that convert. From motivated sellers to cash buyers, we deliver the prospects you need to close more deals.
            </p>
            <motion.a
              href="mailto:craftycrew87@gmail.com?subject=Real Estate Lead Generation - Get Started"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors inline-block"
            >
              Get Real Estate Leads Today
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
              Our Real Estate Lead Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive real estate lead generation services designed to help you find and connect with the right prospects.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {realEstateServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="card p-8 text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-r from-green-500 to-blue-600 flex items-center justify-center text-white">
                  {index === 0 && <Shield className="h-8 w-8" />}
                  {index === 1 && <MapPin className="h-8 w-8" />}
                  {index === 2 && <Phone className="h-8 w-8" />}
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
              Real Estate Lead Types We Provide
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From motivated sellers to cash buyers, we deliver the specific types of leads that match your investment strategy.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {realEstateLeadTypes.map((type, index) => (
              <motion.div
                key={type}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
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
              We leverage industry-leading tools and platforms to ensure accurate, high-quality lead generation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {realEstateTools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="card p-6 text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r from-green-500 to-blue-600 flex items-center justify-center text-white">
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
              What Real Estate Investors Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what real estate professionals say about our lead generation services.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {realEstateReviews.slice(0, 6).map((review, index) => (
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
                  <Quote className="h-6 w-6 text-green-500 mr-2" />
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
              Everything you need to know about our real estate lead generation services.
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
              Why Choose CraftyCrew for Real Estate Leads
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Exclusive & Verified Leads --- No shared lists, only fresh prospects.",
              "Full-Service Solutions --- Leads + skip tracing + cold calling.",
              "Proven Tools & Processes --- Industry-standard platforms for accuracy.",
              "Higher ROI --- Save time, cut costs, and close more deals.",
              "Trusted by Investors --- Reliable partner for long-term growth.",
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
                <div className="bg-gradient-to-br from-green-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <p className="text-gray-700 font-medium">{feature}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to get high-quality real estate leads?
            </h2>
            <p className="text-xl mb-8">
              Start closing more deals with verified, targeted real estate leads today.
            </p>
            <motion.a
              href="mailto:craftycrew87@gmail.com?subject=Real Estate Lead Generation - Get Started"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors inline-block"
            >
              Get Real Estate Leads Today
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default RealEstateLeadPage;
