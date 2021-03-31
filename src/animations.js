export const revealDown = {
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
  hidden: {
    opacity: 0,
    y: "-10%",
  },
};
export const reveal = {
  show: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
  hidden: {
    opacity: 0,
  },
};

export const revealRight = {
  show: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      delay: 0.75,
    },
  },
  hidden: {
    opacity: 0,
    x: "-10%",
  },
};

//Services
export const revealServices = {
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      delayChildren: 0.5,
      staggerChildren: 0.3,
    },
  },
  hidden: {
    opacity: 0.5,
    y: "-10%",
  },
};

export const revealService = {
  hidden: { x: "10%", opacity: 0.5, scale: 0.8 },
  show: {
    scale: 1,
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

//Articles
export const revealArticles = {
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
  hidden: {
    opacity: 0,
    y: "-10%",
  },
};

export const revealArticle = {
  hidden: { x: "50%", opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

//About
export const revealAboutHeader = {
  show: {
    y: "100%",
    transition: {
      duration: 1,
    },
  },
  hidden: {
    y: 0,
  },
};

export const revealAboutContent = {
  hidden: { x: 0 },
  show: {
    x: "100%",
    transition: {
      duration: 1,
      delay: 1,
      ease: "easeInOut",
    },
  },
};
