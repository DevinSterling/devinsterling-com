import * as icons from "@tabler/icons-react";

export default interface Link {
  icon?: icons.Icon,
  title?: string,
  url: string,
}

export const Link = {
  github(url: string): Link {
    return {
      icon: icons.IconBrandGithub,
      title: 'Github',
      url
    };
  },
  cratesIo(url: string): Link {
    return {
      icon: icons.IconPackage,
      title: 'crates.io (Rust Software Registry)',
      url,
    };
  },
  docsRs(url: string): Link {
    return {
      icon: icons.IconVocabulary,
      title: 'docs.rs (Rust Software Documentation)',
      url,
    };
  },
  sonatype(url: string): Link {
    return {
      icon: icons.IconHexagon,
      title: 'Sonatype (Java Software Registry)',
      url,
    }
  },
  javaDoc(url: string): Link {
    return {
      icon: icons.IconVocabulary,
      title: 'javadoc.io (Java Software Documentation)',
      url,
    }
  },
};
