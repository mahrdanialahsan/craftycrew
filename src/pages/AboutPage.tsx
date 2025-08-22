import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, 
  Eye, 
  Heart, 
  Award, 
  Users, 
  Lightbulb, 
  TrendingUp,
  Shield,
  CheckCircle
} from 'lucide-react';

const AboutPage: React.FC = () => {
  const values = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Trust",
      description: "We build long-term partnerships.",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Excellence",
      description: "We aim higher than expectations.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Innovation",
      description: "We embrace change and new ideas.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Results",
      description: "We focus on what matters most — your growth.",
      color: "from-green-500 to-emerald-500"
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
              About CraftyCrew
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              A modern digital agency built on innovation, creativity, and trust. 
              Our team brings together experts from different fields to deliver 
              all-in-one digital solutions that help businesses grow.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <div className="w-16 h-16 mx-auto lg:mx-0 mb-6 rounded-xl bg-gradient-to-r from-primary-500 to-primary-600 flex items-center justify-center">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-lg text-gray-600">
                To empower businesses with smart technology, creative design, and reliable support 
                — making digital transformation simple and effective.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <div className="w-16 h-16 mx-auto lg:mx-0 mb-6 rounded-xl bg-gradient-to-r from-secondary-500 to-secondary-600 flex items-center justify-center">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-lg text-gray-600">
                To be the trusted partner for companies worldwide, known for quality, 
                transparency, and results.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
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
              What Makes Us Different
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Users className="h-8 w-8" />,
                title: "Strong Team",
                description: "A strong, multi-disciplinary team with diverse expertise"
              },
              {
                icon: <Shield className="h-8 w-8" />,
                title: "Tailored Solutions",
                description: "Never one-size-fits-all — we customize for your needs"
              },
              {
                icon: <CheckCircle className="h-8 w-8" />,
                title: "Client Satisfaction",
                description: "Commitment to exceeding client expectations"
              },
              {
                icon: <Lightbulb className="h-8 w-8" />,
                title: "Expertise",
                description: "Deep expertise across development, automation, design, and lead generation"
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center h-full flex flex-col"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center text-white flex-shrink-0">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex-shrink-0">
                  {item.title}
                </h3>
                <p className="text-gray-600 flex-grow">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and every decision we make.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="card p-8 text-center h-full flex flex-col"
              >
                <div className={`w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-r ${value.color} flex items-center justify-center text-white`}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
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
              Work with a team that cares about your success
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Ready to start your next project? Let's create something amazing together.
            </p>
            <motion.a
              href="mailto:craftycrew87@gmail.com?subject=Contact us today - CraftyCrew"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary-600 font-semibold py-4 px-8 rounded-lg text-lg hover:bg-gray-100 transition-colors duration-300 inline-block"
            >
              Contact us today
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
