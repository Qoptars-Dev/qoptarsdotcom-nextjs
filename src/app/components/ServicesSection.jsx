"use client";
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const ServicesSection = () => {
  const services = [
    {
      title: 'Drone Design',
      description: 'Our team of expert designers and engineers work together to create drones that are not only functional but also visually stunning. We believe that good design is a key factor in providing an exceptional user experience.',
      image: "images/design-0.webp",
    },
    {
      title: 'Drone Assembly',
      description: 'We understand that not everyone has the time or knowledge to assemble their own drones, which is why we offer drone assembly services for our customers. Our team of professionals will ensure that your drone is assembled to perfection.',
      image: 'images/assembly-0.webp',
    },
    {
      title: 'Drone Maintenance',
      description: 'We also offer drone maintenance services to ensure that your drone is always in top condition. Our team of technicians will conduct regular maintenance checks and repairs to ensure that you get the most out of your drone.',
      image: 'images/maintain-0.webp',
    },
  ];

  const ref = useRef(null);
  const inView = useInView(ref, {once: true});
  const control = useAnimation();

  useEffect(() => {
    if(inView) {
      control.start("visible");
    }
    else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <section className="bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
        initial="hidden"
        animate={control}
        variants={{
          hidden: { opacity: 0, scale: 0},
          visible: { opacity: 1, scale: 1}
        }}
         transition={{ duration: 0.4 }}
        className="text-4xl text-gray-200 mb-8 text-center font-Mont font-medium">What We Do</motion.h2>
        <div ref={ref} className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              initial="hidden"
              animate={control}
              whileTap={{
                scale: 1.1,
                transition: { duration: 0.5 }
              }}
              variants={{
                hidden: { opacity: 0},
                visible: { opacity: 1 }
              }}
              transition={{ duration: 0.3, delay: index * 0.7}}
              key={index}
              className="bg-gray-800 font-Mont rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={service.image}
                  alt={`${service.title} Service`}
                  className="h-64 w-full object-cover rounded-t-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black opacity-40"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-100 mb-2">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
