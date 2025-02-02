import PageNav from "../components/PageNav";
import styles from "./Product.module.css";
import pricingimg from '../assets/pricing3.webp'; // Replace with your image
import { motion } from 'framer-motion'; // For animations
import { FaCheck } from 'react-icons/fa'; // Icons for features

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />

      <motion.section
        className={styles.pricingSection}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className={styles.pricingContent}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2>
            Simple Pricing.
            <br />
            Just <span>$9/month</span>.
          </h2>
          <p>
            Unlock the full potential of WorldWise with our affordable pricing plan. Track your travels, create personalized maps, and relive your adventures with ease.
          </p>

          <div className={styles.features}>
            <div className={styles.featureItem}>
              <FaCheck className={styles.icon} />
              <p>Track unlimited cities and countries.</p>
            </div>
            <div className={styles.featureItem}>
              <FaCheck className={styles.icon} />
              <p>Create personalized travel maps.</p>
            </div>
            <div className={styles.featureItem}>
              <FaCheck className={styles.icon} />
              <p>Save and share your travel memories.</p>
            </div>
            <div className={styles.featureItem}>
              <FaCheck className={styles.icon} />
              <p>24/7 customer support.</p>
            </div>
          </div>

          <button className={styles.ctaButton}>Get Started Now</button>
        </motion.div>

        <motion.img
          src={pricingimg}
          alt="overview of a large city with skyscrapers"
          className={styles.pricingImage}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        />
      </motion.section>
    </main>
  );
}