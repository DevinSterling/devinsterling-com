import { HTMLAttributes } from 'react';
import { IconBrandGithub } from '@tabler/icons-react';
import { ProjectCardVariant } from './ProjectCardVariant.ts';
import Project from '../../model/project.ts';
import ModalAware from '../modal/ModalAware.ts';
import ListGroup from '../ListGroup.tsx';
import PillLinkButton from '../button/PillLinkButton.tsx';
import ChipLink from '../button/ChipLink.tsx';
import ImageView from '../image/ImageView.tsx';
import styles from './ProjectCard.module.scss'

interface ProjectCardProps extends ModalAware, HTMLAttributes<HTMLElement> {
  project: Project,
  variant?: ProjectCardVariant,
}

export default function ProjectCard({
  className = '',
  project,
  variant,
  onModalShow,
  onModalClose,
  ...props
}: ProjectCardProps) {
  return (
    <article {...props}
             className={`${className} ${styles.card} ${variant ? styles[variant] : ''}`}>
      <div className={styles.title_container}>
        <h3 className={styles.project_title}>{project.name}</h3>
        <PillLinkButton to={project.link} Icon={IconBrandGithub} title='GitHub' target='_blank' signatureColor/>
      </div>
      <div className={styles.chips}>
        <div className={styles.languages}>
          <h4 className={styles.chip_title}>Languages</h4>
          <ListGroup spacing={10}>
            {project.languages.map(language => (
              <ListGroup.Item key={language.name}>
                <ChipLink to={language.link} Icon={language.icon}>
                  {language.name}
                </ChipLink>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>
        {project.technologies.length > 0 && (
          <div className={styles.technologies}>
            <h4 className={styles.chip_title}>Technologies</h4>
            <ListGroup spacing={10}>
              {project.technologies.map(technology => (
                <ListGroup.Item key={technology.name}>
                  <ChipLink to={technology.link} Icon={technology.icon}>
                    {technology.name}
                  </ChipLink>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </div>
        )}
      </div>
      <p className={styles.description}>{project.introduction} {project.synopsis}</p>
      <ImageView key={project.name}
                 className={styles.thumbnail}
                 images={project.images}
                 image={project.thumbnail}
                 onModalShow={onModalShow}
                 onModalClose={onModalClose}/>
    </article>
  );
}