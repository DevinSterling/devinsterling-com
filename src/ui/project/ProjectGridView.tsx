import Project from '../../model/project.ts';
import ProjectGridItem from './ProjectGridItem.tsx';
import styles from './ProjectGridView.module.scss';

export default function ProjectGridView({ projects }: { projects: Project[] }) {
  return (
    <ul className={styles.grid} role='grid'>
      {projects.map((project, i) => (
        <ProjectGridItem key={project.name} project={project} style={{ animationDelay: `${i * 50}ms` }} />
      ))}
    </ul>
  );
}