import Project from '../../model/project.ts';
import ProjectGridItem from './ProjectGridItem.tsx';
import styles from './ProjectGridView.module.scss';

interface ProjectGridViewProps {
  projects: Project[],
  /** Callback for projects that do not have links currently. */
  onSelectProject(project: Project): void,
}

export default function ProjectGridView({ projects, onSelectProject }: ProjectGridViewProps) {
  return (
    <ul className={styles.grid} role='grid'>
      {projects.map((project, i) => (
        <ProjectGridItem key={project.name}
                         project={project}
                         style={{ animationDelay: `${i * 50}ms` }}
                         // For projects that do not have a link currently, delegate to `onSelectProject`
                         onProjectSelected={!project.links.length ? onSelectProject : undefined} />
      ))}
    </ul>
  );
}
