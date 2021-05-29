import { textFadeOut } from '../../../framer/variants/write-review';
import H324px400 from '../../../foundation/typography/h3-24px-400';
import { motion } from 'framer-motion';

const LeadText = ({ starAnimation }: { starAnimation: boolean }) => {
  return (
    <>
      <motion.div
        variants={textFadeOut}
        initial={false}
        animate={starAnimation ? 'animate' : 'initial'}
      >
        <H324px400 color="black">쿠돈 구매 경험은 어떠셨어요?</H324px400>
      </motion.div>
    </>
  );
};

export default LeadText;
