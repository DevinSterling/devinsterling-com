import { ComponentProps } from 'react';
import { Link } from 'react-router';
import { Icon, IconArrowUpRight } from '@tabler/icons-react';
import Project from '../../model/project.ts';
import styles from './ProjectGridItem.module.scss';

interface ProjectGridItemProps extends ComponentProps<'li'> {
  project: Project,
  onProjectSelected?: (project: Project) => void;
}

export default function ProjectGridItem({ project, onProjectSelected, ...props }: ProjectGridItemProps) {
  const isLink = project.links.length > 0 && onProjectSelected == null;

  return (
    <li {...props}
        className={`${styles.item} ${props.className?? ''}`}
        style={{
          filter: `drop-shadow(5em 5em 10em color-mix(in srgb, ${project.color}, transparent 80%))`,
          ...props.style
        }}>
      {isLink ? (
        <Link to={project.links[0]?.url.href} target={'_blank'} className={styles.btn}>
          <ItemContents isExternal={isLink} project={project}/>
        </Link>
      ) : (
        <button className={styles.btn} onClick={() => onProjectSelected?.(project)}>
          <ItemContents isExternal={isLink} project={project}/>
        </button>
      )}
    </li>
  );
}

function ItemContents({ isExternal, project }: { isExternal: boolean, project: Project}) {
  return (
    <div className={styles.content}>
      <div className={styles.image_container}>
        <img src={project.thumbnail?.src} alt={project.thumbnail?.alt} className={styles.project_image}/>
        { isExternal && (
          <span className={styles.external_link}>
            <span className={styles.text}>{project.links[0]?.url.hostname}</span>
            <IconArrowUpRight />
          </span>
        )}
      </div>
      <h3 className={styles.project_name} style={{ backgroundColor: project.color }}>{project.name}</h3>
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
    </div>
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