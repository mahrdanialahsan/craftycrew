import React from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  Clock
} from 'lucide-react';

const ContactPage: React.FC = () => {

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "craftycrew87@gmail.com",
      description: "Send us an email anytime",
      link: "mailto:craftycrew87@gmail.com"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone & WhatsApp",
      value: "+92 309 715 5706",
      description: "Call us or message on WhatsApp",
      link: "tel:+923097155706",
      whatsappLink: "https://wa.me/923097155706"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Response Time",
      value: "Within 24 hours",
      description: "We'll get back to you quickly"
    }
  ];



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
              Let's Work Together
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Whether you need a website, automation, design, or qualified leads — 
              CraftyCrew is here to deliver. We listen, understand, and create 
              solutions that help you grow.
            </p>
            <p className="text-lg text-white/80 mt-6">
              📩 Fill out the form or reach us directly via email/phone.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Get in touch
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Ready to start your next project? Let's create something amazing together.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center text-white">
                      {info.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {info.title}
                    </h3>
                    {info.link ? (
                      <div className="mb-3">
                        <a 
                          href={info.link}
                          className="text-gray-900 font-medium hover:text-primary-600 transition-colors duration-200 block"
                        >
                          {info.value}
                        </a>
                        {info.whatsappLink && (
                          <a 
                            href={info.whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-3 py-1 bg-green-500 text-white text-sm rounded-full hover:bg-green-600 transition-colors duration-200 mt-2"
                          >
                            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                            </svg>
                            WhatsApp
                          </a>
                        )}
                      </div>
                    ) : (
                      <p className="text-gray-900 font-medium mb-3">
                        {info.value}
                      </p>
                    )}
                    <p className="text-gray-600 text-sm">
                      {info.description}
                    </p>
                  </motion.div>
                ))}
              </div>


            </motion.div>
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
              Ready to get started?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's turn your vision into reality. Contact us today and let's create something extraordinary together.
            </p>
            <motion.a
              href="mailto:craftycrew87@gmail.com?subject=Start Your Project - CraftyCrew"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary-600 font-semibold py-4 px-8 rounded-lg text-lg hover:bg-gray-100 transition-colors duration-300 inline-block"
            >
              Start Your Project
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
