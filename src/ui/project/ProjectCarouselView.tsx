import { useMemo, useState } from 'react';
import { TabStyle } from '../tab/TabStyle.ts';
import Tabs, { Tab } from '../tab/Tabs.tsx';
import Project from '../../model/project.ts';
import ProjectCard from './ProjectCard.tsx';
import styles from './ProjectCarouselView.module.scss';

interface ProjectCarouselViewProps {
  projects: Project[],
  defaultProject?: Project,
}

export default function ProjectCarouselView({ projects, defaultProject }: ProjectCarouselViewProps) {
  const projectTabs: Tab<Project>[] = useMemo(() =>
    projects.map(project => ({
      text: project.name,
      data: project,
    })
  ), [projects]);
  const [ project, setProject ] = useState<Tab<Project>|undefined>(
    defaultProject
      ? projectTabs.find(p => p.data === defaultProject)
      : projectTabs[0]
  );

  return (
    <>
      <Tabs tabsStyle={TabStyle.FLAT}
            onTabChange={tab => setProject(tab)}
            tabs={projectTabs}
            className={styles.carousel_tabs}
            selectedTab={project} />
      <div className={styles.carousel}>
        {project?.data && <ProjectCard project={project.data} className={styles.main_card}/>}
      </div>
    </>
  );
}