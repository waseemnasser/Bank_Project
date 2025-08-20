import "./UseCaseRow.css";
import UseCaseCard from "../UseCaseCard/UseCaseCard";
import { motion, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

const row = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease } },
};

const grid = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.06 },
  },
};

const card = {
  hidden: { opacity: 0, y: 12, scale: 0.985 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.35, ease } },
};

const stat = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease } },
};

export default function UseCasesRow({ useCaseData, indiv, title, para, reverce }) {
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      className={`ss-useCases ${reverce ? "ss-reverce" : ""}`}
      variants={row}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <motion.div
        className="WN_UseCaseCards gpu"
        variants={grid}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {useCaseData.map((item, index) => (
          <motion.div
            key={index}
            variants={card}
            whileHover={
              prefersReduced ? {} : { y: -4, scale: 1.02 }
            }
            transition={{ duration: 0.25 }}
            style={{ width: "100%" }}
          >
            <UseCaseCard CardIcon={item.icon} CardDescription={item.description} />
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="ss-useCasesIndivs gpu"
        variants={row}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <motion.h2 className="LexendMedium ss-useCasesIndivsTitle" variants={stat}>
          {title}
        </motion.h2>

        <motion.p className="LexendLight ss-useCasesIndivsDes" variants={stat}>
          {para}
        </motion.p>

        <motion.div
          className="ss-useCasesIndivsContainer"
          variants={grid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {indiv.map((item, index) => (
            <motion.div
              key={index}
              className="ss-useCasesIndivsInnerContainer"
              variants={stat}
            >
              <motion.div
                className="ss-useCasesIndivsItem"
                whileHover={prefersReduced ? {} : { y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <span className="LexendMedium ss-useCasesIndivsItemSpan">{item.per}</span>
                <p className="LexendLight ss-useCasesIndivsItemP">{item.title}</p>
              </motion.div>

              {index !== 2 ? <div className="ss-dashed" /> : null}
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="ss-useCasesIndivsButtonContainer" variants={stat}>
          <motion.button
            className="LexendRegular ss-useCasesIndivsButton"
            whileHover={prefersReduced ? {} : { y: -2 }}
            whileTap={prefersReduced ? {} : { scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            Learn More
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
