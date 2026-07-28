import { useMemo, useState } from 'react';
import { TabStyle } from '../tab/TabStyle.ts';
import Tabs, { Tab } from '../tab/Tabs.tsx';
import Project from '../../model/project.ts';
import ProjectCard from './ProjectCard.tsx';
import styles from './ProjectCarouselView.module.scss';

interface ProjectCarouselViewProps {
  projects: Project[],
  defaultProject?: Project,
  onProjectChange?: (project: Project) => void,
}

export default function ProjectCarouselView({ projects, defaultProject, onProjectChange }: ProjectCarouselViewProps) {
  const projectTabs: Tab<Project>[] = useMemo(() =>
    projects.map(project => ({
      text: project.name,
      data: project,
    })
  ), [projects]);

  const [ project, setProject ] = useState<Tab<Project> | undefined>(() =>
    defaultProject
      ? projectTabs.find(p => p.data === defaultProject)
      : projectTabs[0]
  );

  const onTabChange = (tab: Tab<Project>) => {
    setProject(tab);
    if (tab.data) {
      onProjectChange?.(tab.data);
    }
  };

  return (
    <>
      <Tabs tabsStyle={TabStyle.FLAT}
            onTabChange={onTabChange}
            tabs={projectTabs}
            className={styles.carousel_tabs}
            selectedTab={project} />
      <div key={project?.text} className={styles.carousel}>
        {project?.data && <ProjectCard project={project.data} className={styles.main_card}/>}
      </div>
    </>
  );
}