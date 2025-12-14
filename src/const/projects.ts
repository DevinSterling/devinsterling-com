import Project from '../model/project.ts';

// Projects
import BASED_FX from './projects/basedfx.ts';
import CLAW from './projects/claw.ts';
import GOLDMAN_STACKS from './projects/goldmanstacks.ts';
import HOTERU from './projects/hoteru.ts';
import KURUMA from './projects/kuruma.ts';
import LOCALIZE from './projects/localize.ts';
import MEDIA_F from './projects/mediaframework.ts'
import RBOOK from './projects/rbook.ts';
import RECOGNIZER from './projects/recognizer.ts';
import URFOOD from './projects/urfood.ts'
import VIRAL from './projects/viral.ts';

const ALL_PROJECTS: Project[] = [
  RBOOK,
  LOCALIZE,
  RECOGNIZER,
  CLAW,
  VIRAL,
  BASED_FX,
  URFOOD,
  GOLDMAN_STACKS,
  KURUMA,
  HOTERU,
  MEDIA_F
];

export default ALL_PROJECTS;
