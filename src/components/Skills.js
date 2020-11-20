import { useTranslation } from 'react-i18next';

import './Skills.css';

import Javascript from '../javascript.png';
import Nodejs from '../nodejs.png';
import Express from '../expressjs-icon.svg';
import Koa from '../koa.png';
import React from '../react.png';
import Postman from '../postman.png';
import HTML from '../html.png';
import Mongo from '../mongo.png';
import Mongoose from '../mongoose.png';
import Postgresql from '../postgresql.png';
import Vscode from '../vscode.png';
import Css from '../css.png';
import Graphql from '../graphql.png';
import Angular from '../angular.png';
import Git from '../git.png';
import Heroku from '../heroku1.png';
import Python from '../python.png';
import Typescript from '../typescript.png';
import Jquery from '../jquery.png';
import Qgis from '../qgis.png';
import Arcgis from '../arcgis.png';
import Mapbox from '../mapbox.png';

function Skills() {
  const { t } = useTranslation(['skills']);

  return (
    <div className="container" id="section-skills">
      <h1>{t('title', 'default')}</h1>
      <div className="skills-container">

        <div className="skills-box skills-stack">
          <h3>{t('stack.title', 'default')}</h3>

          <div className="skills-content">

            <div className="skills-logo">
              <div className="stack-row"><img className="skills-img" src={Javascript} alt=""></img></div>
              <div className="stack-row"><img className="skills-img" src={Nodejs} alt=""></img></div>
              <div className="stack-row"><img className="skills-img" src={Express} alt=""></img></div>
              <div className="stack-row"><img className="skills-img" src={Koa} alt=""></img></div>
              <div className="stack-row"><img className="skills-img" src={React} alt=""></img></div>
              <div className="stack-row"><img className="skills-img" src={Postman} alt=""></img></div>
              <div className="stack-row"><img className="skills-img" src={Vscode} alt=""></img></div>
              <div className="stack-row"><img className="skills-img" src={HTML} alt=""></img></div>
            </div>

            <div className="skills-description">
              <div className="stack-row">{t('stack.skills.js', 'default')}</div>
              <div className="stack-row">{t('stack.skills.node', 'default')}</div>
              <div className="stack-row">{t('stack.skills.express', 'default')}</div>
              <div className="stack-row">{t('stack.skills.koa', 'default')}</div>
              <div className="stack-row">{t('stack.skills.react', 'default')}</div>
              <div className="stack-row">{t('stack.skills.postman', 'default')}</div>
              <div className="stack-row">{t('stack.skills.vscode', 'default')}</div>
              <div className="stack-row">{t('stack.skills.html', 'default')}</div>
            </div>
            
            <div className="skills-logo">
              <div className="stack-row"><img className="skills-img" src={Mongo} alt=""></img></div>
              <div className="stack-row"><img className="skills-img" src={Mongoose} alt=""></img></div>
              <div className="stack-row"><img className="skills-img" src={Postgresql} alt=""></img></div>
              <div className="stack-row"><img className="skills-img" src={Css} alt=""></img></div>
              <div className="stack-row"><img className="skills-img" src={Graphql} alt=""></img></div>
              <div className="stack-row"><img className="skills-img" src={Angular} alt=""></img></div>
              <div className="stack-row"><img className="skills-img" src={Git} alt=""></img></div>
              <div className="stack-row"><img className="skills-img" src={Heroku} alt=""></img></div>
            </div>

            <div className="skills-description">
              <div className="stack-row">{t('stack.skills.mongo', 'default')}</div>
              <div className="stack-row">{t('stack.skills.mongoose', 'default')}</div>
              <div className="stack-row">{t('stack.skills.postgresql', 'default')}</div>
              <div className="stack-row">{t('stack.skills.css', 'default')}</div>
              <div className="stack-row">{t('stack.skills.graphql', 'default')}</div>
              <div className="stack-row">{t('stack.skills.angular', 'default')}</div>
              <div className="stack-row">{t('stack.skills.git', 'default')}</div>
              <div className="stack-row">{t('stack.skills.heroku', 'default')}</div>
            </div>
          </div>
        </div>

        <div className="skills-box skills-experience">
          <h3>{t('experience.title', 'default')}</h3>
          <div className="skills-content">
            <div className="skills-logo">
              <div className="skills-row"><img className="skills-img" src={Python} alt=""></img></div>
              <div className="skills-row"><img className="skills-img" src={Typescript} alt=""></img></div>
              <div className="skills-row"><img className="skills-img" src={Jquery} alt=""></img></div>
              <div className="skills-row"><img className="skills-img" src={Mapbox} alt=""></img></div>
              <div className="skills-row"><img className="skills-img" src={Qgis} alt=""></img></div>
              <div className="skills-row"><img className="skills-img" src={Arcgis} alt=""></img></div>
            </div>
            
            <div className="skills-description">
              <div className="skills-row">{t('experience.skills.python', 'default')}</div>
              <div className="skills-row">{t('experience.skills.typescript', 'default')}</div>
              <div className="skills-row">{t('experience.skills.jquery', 'default')}</div>
              <div className="skills-row">{t('experience.skills.mapbox', 'default')}</div>
              <div className="skills-row">{t('experience.skills.qgis', 'default')}</div>
              <div className="skills-row">{t('experience.skills.arcgis', 'default')}</div>
            </div>
          </div>
        </div>

        <div className="skills-box skills-social">
          <h3>{t('social.title', 'default')}</h3>
          <div className="social-skills">
            <div className="skills-row">{t('social.skills.management', 'default')}</div>
            <div className="skills-row">{t('social.skills.leadership', 'default')}</div>
            <div className="skills-row">{t('social.skills.personal', 'default')}</div>
            <div className="skills-row">{t('social.skills.connecting', 'default')}</div>
            <div className="skills-row">{t('social.skills.project', 'default')}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills;