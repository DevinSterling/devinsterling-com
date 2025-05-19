import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';
import { IconCarouselHorizontal, IconLayoutGrid, IconReplace } from '@tabler/icons-react';
import Tabs, { Tab } from '../../../ui/tab/Tabs.tsx';
import ProjectAutoView from '../../../ui/project/ProjectAutoView.tsx';
import ProjectCarouselView from '../../../ui/project/ProjectCarouselView.tsx';
import ProjectGridView from '../../../ui/project/ProjectGridView.tsx';
import Project from '../../../model/project.ts';
import ALL_PROJECTS from '../../../const/projects.ts';
import styles from './Projects.module.scss'

const AUTO_VIEW = {
  icon: IconReplace,
  text: 'Auto',
  hideText: true,
};
const CAROUSEL_VIEW = {
  icon: IconCarouselHorizontal,
  text: 'Gallery',
  hideText: true,
};
const GRID_VIEW = {
  icon: IconLayoutGrid,
  text: 'All',
  hideText: true,
};
const PROJECT_VIEWS: Tab<never>[] = [AUTO_VIEW, CAROUSEL_VIEW, GRID_VIEW];

interface ViewContext {
  tab: Tab<never>,
  project?: Project,
}

const ID = 'projects';

export default function Projects() {
  const [ context, setContext ] = useState<ViewContext>({ tab: AUTO_VIEW });
  const [ param ] = useSearchParams()

  useEffect(() => {
    const project = param.get("project")

    if (project) {
      // Ensure element is visible
      document.getElementById(ID)?.scrollIntoView({ behavior: 'smooth' })
      // Update context to show the requested project
      setContext({
        tab: CAROUSEL_VIEW,
        project: ALL_PROJECTS.find(p => p.name.toLowerCase() === project.toLowerCase())
      })
    }
  }, [param]);

  const getView = () => {
    switch (context.tab) {
      case AUTO_VIEW:
        return <ProjectAutoView projects={ALL_PROJECTS}
                                slots={2}
                                time={4000}
                                onSelectProject={project => {
                                  document.getElementById(ID)!.scrollIntoView({ behavior: 'smooth' });
                                  setContext({ tab: CAROUSEL_VIEW, project });
                                }}/>;
      case CAROUSEL_VIEW:
        return <ProjectCarouselView projects={ALL_PROJECTS} defaultProject={context.project} />;
      default:
        return <ProjectGridView projects={ALL_PROJECTS} />;
    }
  };

  return (
    <section className={styles.projects} id={ID}>
      <div className={styles.content}>
        <div className={styles.project_title_bar}>
          <h2>Projects</h2>
          <Tabs onTabChange={tab => setContext({tab})}
                tabs={PROJECT_VIEWS}
                selectedTab={context.tab} />
        </div>
        {getView()}
      </div>
    </section>
  );
}