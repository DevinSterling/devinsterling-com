import { HTMLAttributes } from 'react';
import { Link } from 'react-router';
import { Icon, IconArrowUpRight } from '@tabler/icons-react';
import Project from '../../model/project.ts';
import styles from './ProjectGridItem.module.scss';

interface ProjectGridItemProps extends HTMLAttributes<HTMLLIElement> {
  project: Project
}

export default function ProjectGridItem({ project, ...props }: ProjectGridItemProps) {
  return (
    <li {...props} className={styles.item}>
      <Link to={project.link} target='_blank' className={styles.content}>
        <div className={styles.image_container}>
          <img src={project.thumbnail?.src} alt={project.thumbnail?.alt} className={styles.project_image}/>
          <IconArrowUpRight className={styles.external_link} />
        </div>
        <h3 className={styles.project_name}>{project.name}</h3>
        <p className={styles.project_synopsis}>{project.introduction}</p>
        <ul className={styles.rail} aria-label='Languages'>
          {project.languages.map(language => (
            <IconItem key={language.name} Icon={language.icon} name={language.name} />
          ))}
        </ul>
        {Boolean(project.technologies.length) && (
          <ul className={styles.rail} aria-label='Technologies'>
            {project.technologies.map(technology => (
              <IconItem key={technology.name} Icon={technology.icon} name={technology.name} />
            ))}
          </ul>
        )}
      </Link>
    </li>
  );
}

function IconItem({ Icon, name }: { Icon?: Icon, name: string }) {
  return (
    <li className={styles.icon_item} title={name}>
      {Icon && <Icon className={styles.icon}/>}
      <span className={styles.icon_name}>{name}</span>
    </li>
  );
}