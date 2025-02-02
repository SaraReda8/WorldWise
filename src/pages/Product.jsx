import PageNav from "../components/PageNav";
import styles from "./Product.module.css";
import productimg from '../assets/about.webp'; // Ensure this path is correct
import { motion } from 'framer-motion'; // For animations
import { FaGlobe, FaMapMarkerAlt, FaHeart } from 'react-icons/fa'; // Icons for features

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />

      {/* About Section */}
      <motion.section
        className={styles.aboutSection}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className={styles.aboutContent}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2>About <span>WorldWise</span></h2>
          <p>
            WorldWise is your ultimate travel companion, designed to help you capture and relive your most cherished adventures. Whether you&apos;re exploring bustling cities, serene landscapes, or hidden gems, WorldWise keeps track of every step you take.
          </p>
          <p>
            Create a personalized map of your travels, share your journey with friends, and reminisce about your experiences. With WorldWise, your memories are just a click away.
          </p>

          <div className={styles.features}>
            <div className={styles.featureItem}>
              <FaGlobe className={styles.icon} />
              <h3>Global Coverage</h3>
              <p>Track your adventures anywhere in the world.</p>
            </div>
            <div className={styles.featureItem}>
              <FaMapMarkerAlt className={styles.icon} />
              <h3>Personalized Maps</h3>
              <p>Create a unique map of your travels.</p>
            </div>
            <div className={styles.featureItem}>
              <FaHeart className={styles.icon} />
              <h3>Cherish Memories</h3>
              <p>Relive your favorite moments anytime.</p>
            </div>
          </div>

          <button className={styles.ctaButton}>Start Your Journey</button>
        </motion.div>

        <motion.img
          src={productimg}
          alt="person with dog overlooking mountain with sunset"
          className={styles.aboutImage}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        />
      </motion.section>

 
    </main>
  );
}