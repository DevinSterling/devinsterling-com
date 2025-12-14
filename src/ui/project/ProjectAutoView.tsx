import { useCallback, useMemo, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { ProjectCardVariant } from './ProjectCardVariant.ts';
import Project from '../../model/project.ts';
import ProjectCard from './ProjectCard.tsx';
import CustomButton from '../button/CustomButton.tsx';
import PaginateBar from '../pagination/PaginateBar.tsx';
import styles from './ProjectAutoView.module.scss'
import { PlayState } from '../pagination/PlayState.ts';

interface ProjectsAutoViewProps {
  projects: Project[],
  slots: number,
  time: number,
  onSelectProject(project: Project): void,
}

const SCROLL_THRESHOLD = 0.5;

function computeSelection(projects: Project[], slots: number, iteration: number): Project[] {
  const selection = projects.slice(iteration, iteration + slots);
  const cutoff = (iteration + slots) % projects.length;
  if (cutoff < iteration) selection.push(...projects.slice(0, cutoff));
  return selection;
}

export default function ProjectAutoView({ projects, slots, time, onSelectProject }: ProjectsAutoViewProps) {
  const [ iteration, setIteration ] = useState<number>(0);
  const [ playState, setPlayState ] = useState<PlayState>(PlayState.PLAY);
  const { ref, inView } = useInView({
    threshold: SCROLL_THRESHOLD,
    onChange: (inView => setPlayState(inView ? PlayState.PLAY : PlayState.STOP)),
  });

  // Projects to currently show within the view
  const selection = useMemo<Project[]>(
    () => computeSelection(projects, slots, iteration),
    [projects, slots, iteration]
  );
  const onModalShow = useCallback(() => setPlayState(PlayState.DISABLED), [setPlayState]);
  const onModalClose = useCallback(() => setPlayState(PlayState.PLAY), [setPlayState]);

  // Stop if playing
  const setStop = () => setPlayState(prev => (
    prev === PlayState.PLAY ? PlayState.STOP : prev
  ));
  // Attempt to play. Not possible if disabled or element not in view
  const setPlaying = () => setPlayState(prev => (
    prev === PlayState.DISABLED || !inView ? prev : PlayState.PLAY
  ));
  const setUserIteration: (iteration: number) => void = i => {
    setIteration(i * 2);
    setPlayState(PlayState.STOP);
  }

  return (
    <div ref={ref} className={styles.spaced}>
      <ul>
        {selection.map((project, i) => (
          <CustomButton as='li'
                        key={project.name}
                        onClick={() => onSelectProject(project)}
                        onMouseOver={setStop}
                        onMouseLeave={setPlaying}
                        onFocus={setStop}
                        onBlur={setPlaying}>
            <ProjectCard project={project}
                         style={{ animationDelay: `${i*100}ms` }}
                         className={`${styles.auto_card} ${i % 2 ? styles.change_alt : styles.change}`}
                         variant={i % 2 ? ProjectCardVariant.MINI_RIGHT : ProjectCardVariant.MINI_LEFT}
                         onModalShow={onModalShow}
                         onModalClose={onModalClose}/>
          </CustomButton>
        ))}
      </ul>
      <PaginateBar length={Math.ceil(projects.length / slots)}
                   selected={Math.floor((iteration / 2) % projects.length)}
                   onSelectedChange={setUserIteration}
                   autoIncrementTime={time}
                   autoIncrementPlayState={playState} />
    </div>
  );
}
