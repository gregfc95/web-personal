import icon from "./assets/jose-profile.jpeg";

interface IConfig {
  me: {
    name: string;
    job: string;
    started: string;
    stack: string;
    hobby: string;
    projectLink: string;
  };
  socials: {
    [name: string]: string;
  };
  projects: {
    [name: string]: {
      url: string;
      tags: string[];
    };
  };
  og: {
    image: string;
  };
}

export const Config: IConfig = {
  me: {
    name: "Jose Gregorio Fernandez Campos",
    job: "Quality Assurance Engineer",
    started: "2020-01-05",
    stack: "QA automations using PlayWright",
    hobby: "play videogames",
    projectLink: "https://github.com/JohnDoe?tab=repositories",
  },
  socials: {
    linkedin: "https://www.linkedin.com/in/gjfc/",
    github: "https://github.com/gregfc95",
  },
  projects: {
    "996.ICU": {
      url: "https://github.com/996icu/996.ICU",
      tags: ["ccp", "chinese", "overwork", "labor", "996"],
    },
    Linux: {
      url: "https://github.com/torvalds/linux",
      tags: ["c", "kernel", "unix", "os"],
    },
  },
  og: {
    image: icon.src,
  },
};
