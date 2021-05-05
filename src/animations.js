//Exit Animations
export const pageAnimation = {
  hidden: {
    opacity: 0,
    y: 300,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

//
export const revealDown = {
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      // ease: "easeInOut",
    },
  },
  hidden: {
    opacity: 0,
    y: "100%",
  },
};

export const opacity = {
  show: {
    opacity: 1,
    // scale: 1,
    transition: {
      duration: 1,
      when: "beforeChildren",
      staggerChildren: 0.75,
    },
  },
  hidden: {
    opacity: 0,
    // scale: 0.7,
  },
};

export const scaleDown = {
  show: {
    height: "85vh",
    width: "95vw",
    y: "10vh",
    transition: {
      duration: 1,
      delay: 1,
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
  hidden: {
    height: "100vh",
    width: "100vw",
  },
};

export const revealRight = {
  show: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
  hidden: {
    opacity: 0,
    x: "-50%",
  },
};

export const revealLeft = {
  show: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
  hidden: {
    opacity: 0,
    x: "50%",
  },
};

export const revealNavMobile = {
  show: {
    y: "200px",
    x: "350px",
    opacity: 0.5,
    overflowY: "hidden",
    transition: {
      duration: 1,
    },
  },
  hidden: {
    overflowY: "scroll",
    y: "0px",
    x: "0vw",
    transition: {
      duration: 1,
    },
  },
};

export const toggleTiltRight = {
  show: {
    rotate: 45,
    y: ".8rem",
    transition: {
      duration: 1,
    },
  },
  hidden: {
    y: 0,
    rotate: 0,
    transition: {
      duration: 1,
    },
  },
};
export const toggleTiltLeft = {
  show: {
    y: "-.8rem",
    rotate: -45,
    transition: {
      duration: 1,
    },
  },
  hidden: {
    y: 0,
    rotate: 0,
    transition: {
      duration: 1,
    },
  },
};
export const ToggleOpacityRight = {
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
    },
  },
  hidden: {
    x: "100%",
    opacity: 0,
    transition: {
      duration: 1,
    },
  },
};

//Services
export const revealServices = {
  show: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      delayChildren: 0.5,
      staggerChildren: 0.3,
    },
  },
  hidden: {
    opacity: 0.5,
    x: "0%",
  },
};

export const revealService = {
  hidden: { opacity: 0.5, scale: 0.8 },
  show: {
    scale: 1,
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
