import { useTranslation } from 'react-i18next';
import Project from './ProjectElem';

import Catcalls from '../catcalls.png';
import Bookclub from '../bookclub.png';

function Projects() {
  const { t } = useTranslation(['projects']);

  return (
    <div className="container">
      <h1>{t('title', 'default')}</h1>
      <Project title={t('projects.catcall.title', 'default')} image={Catcalls} github={t('projects.catcall.github', 'default')} website={t('projects.catcall.website', 'default')} content={t('projects.catcall.content', 'default')} stack={t('projects.catcall.stack', 'default')} />
      <Project title={t('projects.bookclub.title', 'default')} image={Bookclub} github={t('projects.bookclub.github', 'default')} content={t('projects.bookclub.content', 'default')} stack={t('projects.bookclub.stack', 'default')} />
    </div>
  );
}

export default Projects;