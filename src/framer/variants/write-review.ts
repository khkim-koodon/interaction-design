export const stagger = {
  initial: {
    transition: {
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },

  animate: {
    transition: {
      staggerChildren: 0.07,
    },
  },
};

export const starRotateUp = {
  initial: { y: 0 },

  animate: { y: -120, rotateY: 720 },
};

export const textFadeOut = {
  initial: {
    opacity: 1,
    scale: 1,
    y: 0,
  },

  animate: {
    opacity: 0,
    scale: 0,
    y: -16,
    transition: {
      duration: 0.2,
    },
  },
};

export const fadeIn = {
  initial: {
    opacity: 0,
    scale: 1.25,
    y: 0,
  },

  animate: {
    opacity: 1,
    scale: 1,
    y: -120,
    transition: {
      duration: 0.2,
      delay: 0.2,
    },
  },
};
