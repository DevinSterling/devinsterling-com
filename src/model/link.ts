import * as icons from "@tabler/icons-react";

export default interface Link {
  icon?: icons.Icon,
  title?: string,
  url: URL,
}

export const Link = {
  of: (url: string, icon?: icons.Icon, title?: string): Link => ({
    url: new URL(url),
    icon,
    title,
  }),
  github:   (url: string): Link => Link.of(url, icons.IconBrandGithub, 'Github'),
  cratesIo: (url: string): Link => Link.of(url, icons.IconPackage, 'crates.io (Rust Software Registry)'),
  docsRs:   (url: string): Link => Link.of(url, icons.IconVocabulary, 'docs.rs (Rust Software Documentation)'),
  sonatype: (url: string): Link => Link.of(url, icons.IconHexagon, 'Sonatype (Java Software Registry)'),
  javaDoc:  (url: string): Link => Link.of(url, icons.IconVocabulary, 'javadoc.io (Java Software Documentation)'),
};
