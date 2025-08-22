import React from 'react';
import { motion } from 'framer-motion';
import { 
  Crown,
  Code,
  Palette,
  Users,
  Zap,
  Home,
  Star,
  Quote,
  CheckCircle,
  ArrowRight,
  Globe,
  Smartphone,
  Database,
  Settings
} from 'lucide-react';

const TeamPage: React.FC = () => {
  const leadershipTeam = [
    {
      name: "Mahr Akash Rauf",
      position: "Co-Founder & CEO",
      description: "Akash's journey has been full of dedication and persistence. After years of struggle and learning, he co-founded CraftyCrew with a vision to create designs and solutions that truly stand out. He believes in quality without compromise and ensures every client feels the value of choosing us.",
      icon: <Crown className="h-8 w-8" />
    },
    {
      name: "Mahr Talha Farooq",
      position: "Co-Founder & CEO",
      description: "Talha turned his experience and determination into building a company that helps businesses grow with trust. His leadership reflects consistency, hard work, and a client-first mindset, making CraftyCrew a reliable partner for long-term success.",
      icon: <Crown className="h-8 w-8" />
    }
  ];

  const webAppTeam = [
    {
      name: "Danial Ashan",
      position: "Full Stack Developer",
      description: "Danial is the technical backbone of CraftyCrew. With years of experience in enterprise-level applications, APIs, and databases, he crafts powerful digital solutions using CorePHP, Laravel, Node.js, and React. His focus is on delivering scalable and secure systems tailored to business needs.",
      icon: <Code className="h-8 w-8" />
    },
    {
      name: "Seerat Rasool",
      position: "WordPress Expert",
      description: "Seerat specializes in creating modern and user-friendly WordPress websites. From business sites to e-commerce solutions, he ensures every project is built with precision and creativity, while leading his team to deliver seamless web experiences.",
      icon: <Globe className="h-8 w-8" />
    },
    {
      name: "Tasawur Abbas",
      position: "App Development Lead",
      description: "Tasawur is a skilled Flutter developer with expertise in front-end, API integration, Firebase, local storage, and cross-platform apps. From Android and iOS to AI-integrated apps, he leads the mobile development team to build innovative and efficient solutions.",
      icon: <Smartphone className="h-8 w-8" />
    }
  ];

  const designTeam = [
    {
      name: "Mahr Akash Rauf",
      position: "Design Lead",
      description: "Akash brings creativity and vision to CraftyCrew's design projects. From logos to branding, he ensures every design reflects uniqueness and professionalism.",
      icon: <Palette className="h-8 w-8" />
    },
    {
      name: "Saqib Jabbar",
      position: "Senior Graphic Designer",
      description: "Saqib has years of experience in creating impactful visuals. He specializes in branding, brochures, presentations, and social media designs that help businesses stand out with confidence.",
      icon: <Palette className="h-8 w-8" />
    }
  ];

  const leadGenerationTeam = [
    {
      name: "Mahr Talha Farooq",
      position: "Lead Generation Head",
      description: "Talha leads the lead generation division with expertise and strategy. He focuses on delivering verified, high-converting real estate and solar leads that help clients close deals faster and grow their businesses.",
      icon: <Users className="h-8 w-8" />
    }
  ];

  const aiAutomationTeam = [
    {
      name: "Malick Adeen Hassan",
      position: "AI Automation Specialist",
      description: "Malick is passionate about building intelligent workflows and automation systems. With expertise in N8n, Zapier, and AI integrations, he helps businesses save time, reduce costs, and scale faster with smart automation.",
      icon: <Zap className="h-8 w-8" />
    }
  ];

  const teamValues = [
    "A perfect mix of creativity, technology, and strategy",
    "Strict commitment to quality and deadlines",
    "Tailored solutions for every client's requirements",
    "No compromises --- we deliver beyond expectations",
    "A passionate team that values trust and long-term partnerships"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-indigo-600 to-purple-700 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our Team — The Strength Behind CraftyCrew
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              At CraftyCrew, our team is more than just professionals — we're a family built through years of hard work, challenges, and passion. Every member brings unique expertise, and together we deliver solutions that not only meet client expectations but often exceed them.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              👑 Leadership Team
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {leadershipTeam.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow h-full flex flex-col"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-br from-yellow-500 to-orange-600 p-4 rounded-lg mr-4">
                    {member.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{member.name}</h3>
                    <p className="text-lg text-gray-600">{member.position}</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed flex-grow">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Web & App Development Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              💻 Web & App Development Team
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {webAppTeam.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow h-full flex flex-col"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-3 rounded-lg mr-4">
                    {member.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                    <p className="text-gray-600">{member.position}</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed flex-grow">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Graphic Design Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              🎨 Graphic Design Team
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {designTeam.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-pink-50 to-purple-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow h-full flex flex-col"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-br from-pink-500 to-purple-600 p-3 rounded-lg mr-4">
                    {member.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                    <p className="text-gray-600">{member.position}</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed flex-grow">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Generation Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              📊 Lead Generation Team
            </h2>
          </motion.div>
          
          <div className="max-w-2xl mx-auto">
            {leadGenerationTeam.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-br from-green-500 to-blue-600 p-4 rounded-lg mr-6">
                    {member.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{member.name}</h3>
                    <p className="text-lg text-gray-600">{member.position}</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Automation Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              🤖 AI Automation Team
            </h2>
          </motion.div>
          
          <div className="max-w-2xl mx-auto">
            {aiAutomationTeam.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-br from-purple-500 to-blue-600 p-4 rounded-lg mr-6">
                    {member.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{member.name}</h3>
                    <p className="text-lg text-gray-600">{member.position}</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Our Team Special Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              🌍 What Makes Our Team Special?
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-gradient-to-br from-indigo-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <p className="text-gray-700 font-medium">{value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Note Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              ✅ Final Note
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              When you work with CraftyCrew, you don't just hire a service — you partner with a dedicated team that treats your project like its own. Our clients stay with us because they see the results, the care, and the commitment we bring every single time.
            </p>
            <motion.a
              href="mailto:craftycrew87@gmail.com?subject=Let's grow together - Contact our team"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-indigo-700 hover:to-purple-800 transition-colors inline-block"
            >
              Let's grow together — contact our team today
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;
