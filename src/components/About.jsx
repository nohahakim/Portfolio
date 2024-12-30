/* eslint-disable react/no-unknown-property */ // if needed for tilt options
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import PropTypes from "prop-types";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      // Framer Motion variants
      variants={textVariant(index * 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="
        flex flex-col items-center justify-between h-full w-full
        max-w-[300px]
        rounded-lg border border-[#854CE6]
        shadow-[0_4px_24px_rgba(23,92,230,0.15)]
        p-6
        transition-all duration-200
        hover:-translate-y-2 hover:border-white
        hover:shadow-[0_0_50px_3px_rgba(133,76,230,1)]
        hover:brightness-110
        cursor-pointer
        focus:outline-none
      "
      role="button"
      tabIndex={0}
    >
      <h2 className="mb-5 text-center text-2xl font-semibold text-white">
        {title}
      </h2>
      <div className="flex flex-col items-center">
        <img
          src={icon}
          alt={`${title} icon`}
          className="h-[90px] w-[90px] object-contain"
        />
      </div>
    </motion.div>
  );
};

ServiceCard.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

const About = () => {
  return (
    <>
      {/* Heading Section */}
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      {/* Description */}
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 max-w-3xl text-[17px] leading-[30px] text-secondary"
      >
        I&apos;m a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Node.js, and
        Three.js. I&apos;m a quick learner and collaborate closely with clients
        to create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let&apos;s work together to bring your ideas to
        life!
      </motion.p>

      {/* Services Grid */}
      <div
        className="
          mt-20 w-full
          grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))]
          gap-10
          justify-items-center
          items-stretch
        "
      >
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
