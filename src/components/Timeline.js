import React from 'react';
import { VerticalTimeline }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useTranslation } from 'react-i18next';
import TimelineElem from './TimelineElem';
import './Timeline.css';

import Codeworks from '../codeworks.png';
import GIS from '../gis.png';
import Udemy from '../udemy.png';
import Fairchain from '../fairchain.png';
import Wecanteen from '../wecanteen.jpeg';
import Kitchenroulette from '../kitchenroulette.jfif';
import Copekcabana from '../copekcabana.png';
import UvA from '../uva.jpg';
import Karma from '../karma.png';
import Veerhuis from '../veerhuis.png';

function Timeline() {
  const { t } = useTranslation(['timeline']);
  const workStyle = { background: '#60c7b9', color: 'rgb(17, 16, 14)' }
  const studyStyle = { background: '#e27d60', color: 'rgb(17, 16, 14)' }
  const workArrow = { borderRight: '7px solid  #60c7b9' }
  const studyArrow = { borderRight: '7px solid  #e27d60' }

  return (
    <div className="container" id="section-timeline">
      <h1>{t('title', 'default')}</h1>
      <VerticalTimeline>
        <TimelineElem contentStyle={studyStyle} contentArrowStyle={studyArrow} name="codeworks" icon={Codeworks} />
        <TimelineElem contentStyle={studyStyle} contentArrowStyle={studyArrow} name="webdev" icon={Udemy} />
        <TimelineElem contentStyle={studyStyle} contentArrowStyle={studyArrow} name="gis" icon={GIS} />
        <TimelineElem contentStyle={workStyle} contentArrowStyle={workArrow} name="projectmanager" icon={Fairchain}/>
        <TimelineElem contentStyle={workStyle} contentArrowStyle={workArrow} name="wecanteen" icon={Wecanteen} />
        <TimelineElem contentStyle={workStyle} contentArrowStyle={workArrow} name="kitchenroulette" icon={Kitchenroulette} />
        <TimelineElem contentStyle={workStyle} contentArrowStyle={workArrow} name="copekcabana" icon={Copekcabana} />
        <TimelineElem contentStyle={studyStyle} contentArrowStyle={studyArrow} name="fps" icon={UvA} />
        <TimelineElem contentStyle={studyStyle} contentArrowStyle={studyArrow} name="yoga" icon={Karma} />
        <TimelineElem contentStyle={workStyle} contentArrowStyle={workArrow} name="veerhuis" icon={Veerhuis} />
      </VerticalTimeline>
    </div>
  )
}

export default Timeline;