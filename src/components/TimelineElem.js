import { VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useTranslation } from 'react-i18next';

import './Timeline.css';


function TimelineElem ( props ) {
  const { t } = useTranslation(['timeline']);

  return (
    <VerticalTimelineElement
    className="vertical-timeline-element"
    contentStyle={props.contentStyle}
    contentArrowStyle={props.contentArrowStyle}
    date={t('tl-' + props.name + '.date', 'default')}
    dateClassName="timeline-date"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: 'rgb(245, 245, 245)' }}
    icon={<img src={props.icon} alt="" />}
    >
      <h3 className="vertical-timeline-element-title">{t('tl-' + props.name + '.title', 'default')}</h3>
      <h4 className="vertical-timeline-element-subtitle">{t('tl-' + props.name + '.sub-title', 'default')}</h4>
      <p>
        <span className="text-adjust">{t('tl-' + props.name + '.content', 'default')}</span>

      </p>  
  </VerticalTimelineElement>
  )
}



export default TimelineElem;