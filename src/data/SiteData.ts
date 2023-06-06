export type SiteData = {
  header: {
    title: string;
    subtitle: string;
    srcImage: string;
    button: {
      label: string;
      icon: string;
      targetSection: string;
    };
  };
  navbar: {
    brand: string;
    srcLogo: string;
    menuOptions: {
      id: string;
      label: string;
      icon: string;
    }[];
  };
  about: {
    id: string;
    title: string;
    subtitle: string;
    content: {
      image: string;
      paragraphs: string[];
    };
    button: {
      label: string;
      icon: string;
      href: string;
    };
  };
  skills: {
    id: string;
    title: string;
    subtitle: string;
    items: {
      title: string;
      icon: string;
      description: string;
    }[];
  };
  portfolio: {
    id: string;
    title: string;
    subtitle: string;
    items: {
      title: string;
      category: string;
      srcImage: string;
      tags: string[];
      description: string;
    }[];
  };
  contact: {
    id: string;
    title: string;
    subtitle: string;
    placeholders: {
      name: string;
      email: string;
      subject: string;
      message: string;
    };
    button: {
      label: string;
      icon: string;
    };
  };
  footer: {
    location: {
      title: string;
      address: string;
    };
    links: {
      title: string;
      items: {
        icon: string;
        href: string;
      }[];
    };
    otherLinks: {
      title: string;
      items: {
        label: string;
        href: string;
      }[];
    };
  };
};

export type Project = {
  title: string;
  category: string;
  srcImage: string;
  tags: string[];
  description: string;
};