import React from 'react';
import { motion } from 'framer-motion';
import { 
  Palette, 
  Image,
  FileText,
  Package,
  Share2,
  Star,
  Quote,
  CheckCircle,
  ArrowRight,
  Users,
  Globe,
  Heart
} from 'lucide-react';

const GraphicDesignPage: React.FC = () => {
  const services = [
    {
      icon: <Image className="h-8 w-8" />,
      title: "Logo Design",
      description: "Unique, timeless, and memorable logos tailored to your brand story. Designed to work across digital and print platforms."
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Branding & Visual Identity",
      description: "Complete brand kits (logos, color palettes, typography, guidelines). Helps you maintain a consistent look across all channels."
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Presentation Design",
      description: "Investor pitch decks, sales presentations, webinars, and training slides. Clean, impactful visuals that keep audiences engaged."
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Flyers, Brochures & Pamphlets",
      description: "Professionally designed marketing materials that grab attention. Perfect for promotions, real estate, corporate, and events."
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "eBooks & Reports",
      description: "Digital layouts for eBooks, guides, and corporate reports. Designed for readability, professionalism, and easy distribution."
    },
    {
      icon: <Package className="h-8 w-8" />,
      title: "Packaging Design",
      description: "Attractive, retail-ready packaging that makes products stand out. Includes labels, box designs, and creative concepts."
    },
    {
      icon: <Share2 className="h-8 w-8" />,
      title: "Social Media Graphics",
      description: "High-converting posts, stories, covers, and ad creatives. Optimized for all platforms (Facebook, Instagram, LinkedIn, TikTok)."
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Custom Requests",
      description: "Need something unique? We handle all creative requests from infographics to event banners."
    }
  ];

  const portfolioProjects = [
    {
      title: "Startup Logo",
      description: "Designed a bold, minimalistic logo for a tech startup that boosted their credibility.",
      type: "Logo Design"
    },
    {
      title: "Real Estate Brochure",
      description: "Created a luxury brochure that helped a real estate client close multiple deals.",
      type: "Brochure Design"
    },
    {
      title: "Healthcare eBook",
      description: "Developed a professional guide for a healthcare company, downloaded 5,000+ times.",
      type: "eBook Design"
    },
    {
      title: "E-commerce Packaging",
      description: "Designed eye-catching packaging for an online skincare brand.",
      type: "Packaging Design"
    },
    {
      title: "Corporate Presentation",
      description: "Transformed a dull 30-slide deck into a visually stunning investor presentation.",
      type: "Presentation Design"
    },
    {
      title: "Social Media Campaign",
      description: "Designed 50+ creatives for a fashion brand, resulting in a 200% engagement increase.",
      type: "Social Media"
    }
  ];

  const clientTestimonials = [
    "Our investor pitch deck got a standing ovation---thank you, CraftyCrew!",
    "They rebranded our company and gave us a premium look. Highly recommended.",
    "The brochure design was top-notch. We closed 3 deals the same week.",
    "Loved the creativity in our eBook. Customers keep complimenting it.",
    "Their social media designs boosted our engagement like never before.",
    "CraftyCrew gave us packaging that made our products fly off the shelves.",
    "Professional, fast, and highly creative---exactly what we needed.",
    "The logo design perfectly reflects our brand identity.",
    "I got more than I expected. They truly care about client satisfaction.",
    "CraftyCrew is our go-to for all design needs. Always reliable."
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-pink-600 to-purple-700 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Designs That Build Brands & Inspire Trust
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              From logos to full brand identity, CraftyCrew creates powerful designs that connect with your audience and drive results.
            </p>
            <motion.a
              href="mailto:craftycrew87@gmail.com?subject=Get Your Free Design Consultation - CraftyCrew"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-pink-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors inline-block"
            >
              Get Your Free Design Consultation Today
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
              Why Graphic Design Matters
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Your brand's design is the first thing customers notice---and first impressions matter. At CraftyCrew, we know design isn't just about "looking good." It's about building trust, boosting sales, and making your business unforgettable. Whether you need a new logo, a brochure that sells, or a complete brand identity, our creative team delivers designs that combine beauty with strategy.
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
              Our Graphic Design Services
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
                  <div className="bg-gradient-to-br from-pink-500 to-purple-600 p-3 rounded-lg mr-4">
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

      {/* Portfolio Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Portfolio (Sample Projects)
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                  <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm font-medium">
                    {project.type}
                  </span>
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Client Testimonials
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clientTestimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <Quote className="h-6 w-6 text-pink-500 mr-2" />
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
              Why Choose CraftyCrew?
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Creative + Strategic",
                description: "Designs that look amazing and deliver results."
              },
              {
                title: "Full-Service",
                description: "From logos to packaging, we cover every design need."
              },
              {
                title: "Revisions Until Satisfaction",
                description: "We work until you're 100% happy."
              },
              {
                title: "Affordable & Professional",
                description: "High-quality design without the high agency cost."
              },
              {
                title: "Trusted Worldwide",
                description: "Clients across industries trust our creative solutions."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-gradient-to-br from-pink-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to take your brand visuals to the next level?
            </h2>
            <p className="text-xl mb-8">
              Contact CraftyCrew Today & Get a Free Design Consultation
            </p>
            <motion.a
              href="mailto:craftycrew87@gmail.com?subject=Contact CraftyCrew - Graphic Design"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-pink-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors inline-block"
            >
              Contact CraftyCrew Today
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default GraphicDesignPage;
