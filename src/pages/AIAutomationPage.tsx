import React from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Bot,
  Brain,
  Database,
  MessageCircle,
  ShoppingCart,
  DollarSign,
  Palette,
  Star,
  Quote,
  CheckCircle,
  ArrowRight,
  Settings,
  Users,
  Globe
} from 'lucide-react';

const AIAutomationPage: React.FC = () => {
  const services = [
    {
      icon: <MessageCircle className="h-8 w-8" />,
      title: "Conversational & Voice AI",
      description: "We build AI-powered bots for WhatsApp, Telegram, and Twilio that handle customer queries, book appointments, and provide instant support --- reducing workload while keeping your clients happy."
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Custom AI Agents & LLM Apps",
      description: "From custom GPTs to advanced context-aware agents, we create AI apps that understand, learn, and deliver results for your specific business needs."
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "RAG Systems & Contextual AI",
      description: "Enhance your knowledge base with AI-driven retrieval systems. Perfect for document Q&A, compliance monitoring, and customer service support."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Workflow Automation & Integrations",
      description: "Seamlessly connect your tools --- from Gmail and Calendars to CRMs and databases --- using N8n, Zapier, and LangChain. Automate repetitive tasks and eliminate human errors."
    },
    {
      icon: <ShoppingCart className="h-8 w-8" />,
      title: "E-commerce & Travel Bots",
      description: "Boost sales with WhatsApp store bots or simplify bookings with travel chatbots. Automate customer journeys from browsing to checkout."
    },
    {
      icon: <DollarSign className="h-8 w-8" />,
      title: "Financial AI",
      description: "Streamline finance with invoice automation, payment reconciliation, and OCR-powered document processing. Save hours every week and reduce errors."
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Creative AI",
      description: "Use AI-powered design tools like Stable Diffusion to generate creative assets, visual content, and personalized designs in minutes."
    }
  ];

  const tools = [
    {
      name: "N8n",
      description: "Custom workflow automation"
    },
    {
      name: "Zapier",
      description: "Easy third-party integrations"
    },
    {
      name: "LangChain",
      description: "AI-powered contextual workflows"
    },
    {
      name: "FastAPI",
      description: "Scalable backends for AI apps"
    },
    {
      name: "GPT Models",
      description: "Natural language intelligence"
    },
    {
      name: "Stable Diffusion",
      description: "AI-powered creative design"
    },
    {
      name: "OCR & CRMs",
      description: "Document and client data automation"
    }
  ];

  const clientReviews = [
    "CraftyCrew's automations saved our team 25 hours every week.",
    "Their WhatsApp bot doubled our customer response rate.",
    "Professional, fast, and always reliable.",
    "We automated invoicing and cut errors by 90%.",
    "Their AI agents made customer support effortless.",
    "Zapier and N8n workflows were implemented flawlessly.",
    "Our e-commerce sales improved with automation.",
    "The team understands business needs, not just tech.",
    "They delivered beyond expectations --- highly recommended.",
    "Best ROI we've had from any digital service."
  ];

  const faqs = [
    {
      question: "Are your AI agents customizable?",
      answer: "Yes, every solution is built around your specific workflows and business goals."
    },
    {
      question: "Which tools do you integrate with?",
      answer: "We work with CRMs, emails, cloud apps, databases, and 5000+ third-party tools via N8n and Zapier."
    },
    {
      question: "Can I request a demo?",
      answer: "Absolutely --- we provide free consultations and demo workflows before you commit."
    },
    {
      question: "How soon can automation be implemented?",
      answer: "Most projects start delivering results within 2--4 weeks, depending on complexity."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-purple-600 to-blue-700 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Smart AI Automations That Save Time & Drive Growth
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              From intelligent workflows to custom AI agents, CraftyCrew helps you scale faster with automation that works.
            </p>
            <motion.a
              href="mailto:craftycrew87@gmail.com?subject=Let's Automate Your Business - CraftyCrew"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors inline-block"
            >
              Let's Automate Your Business Today
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why AI Automation Matters
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              In today's fast-paced world, efficiency isn't optional --- it's essential. Businesses that adopt AI automation save hours of repetitive work, reduce operational costs, and achieve faster growth. At CraftyCrew, we design automation systems tailored to your needs, so you can focus on what really matters: scaling your business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our AI Automation Services
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-br from-purple-500 to-blue-600 p-3 rounded-lg mr-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                </div>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Technologies Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Tools & Technologies
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-purple-50 to-blue-50 p-6 rounded-lg border border-purple-200"
              >
                <div className="flex items-center mb-3">
                  <Settings className="h-6 w-6 text-purple-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">{tool.name}</h3>
                </div>
                <p className="text-gray-600">{tool.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Reviews Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Client Reviews
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clientReviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <Quote className="h-6 w-6 text-purple-500 mr-2" />
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

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Choose CraftyCrew
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Tailored solutions, never one-size-fits-all",
              "Full-stack AI & automation expertise",
              "Measurable ROI and long-term results",
              "Dedicated support and revisions",
              "Proven track record with businesses worldwide"
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
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

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
          </motion.div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to automate your business and scale faster?
            </h2>
            <p className="text-xl mb-8">
              Contact CraftyCrew today --- let's build your AI-powered future together.
            </p>
            <motion.a
              href="mailto:craftycrew87@gmail.com?subject=Contact CraftyCrew - AI Automation"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors inline-block"
            >
              Contact CraftyCrew Today
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AIAutomationPage;
