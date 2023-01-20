import { motion } from 'framer-motion';
import { Center, Box } from '@chakra-ui/react';

const loadingContainer = {
  width: '4rem',
  height: '4rem',
  display: 'flex',
  justifyContent: 'space-around',
};
const loadingCircle = {
  display: 'block',
  width: '1rem',
  height: '1rem',
  backgroundColor: '#ecc94b',
  borderRadius: '0.5rem',
};

const loadingContainerVariants = {
  start: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  end: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const loadingCircleVariants = {
  start: {
    y: '0%',
  },
  end: {
    y: '60%',
  },
};
const loadingCircleTransition = {
  duration: 0.4,
  yoyo: Infinity,
  ease: 'easeInOut',
};

const Loading = () => {
  return (
    <Center>
      <Box p="40vh">
        <div>
          <div className="fixed  w-full min-h-screen z-50 bg-black opacity-30" />
          <div className="flex fixed w-full justify-center items-center h-screen">
            <motion.div
              style={loadingContainer}
              variants={loadingContainerVariants}
              initial="start"
              animate="end"
            >
              <motion.span
                style={loadingCircle}
                variants={loadingCircleVariants}
                transition={loadingCircleTransition}
              ></motion.span>
              <motion.span
                style={loadingCircle}
                variants={loadingCircleVariants}
                transition={loadingCircleTransition}
              ></motion.span>
              <motion.span
                style={loadingCircle}
                variants={loadingCircleVariants}
                transition={loadingCircleTransition}
              ></motion.span>
            </motion.div>
          </div>
        </div>
      </Box>
    </Center>
  );
};

export default Loading;
