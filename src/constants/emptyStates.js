import generalSvg from '../assets/images/empty-states/general.svg';
import generalPng from '../assets/images/empty-states/general.png';
import sessionSvg from '../assets/images/empty-states/history-session.svg';
import sessionPng from '../assets/images/empty-states/history-session.png';
import notificationSvg from '../assets/images/empty-states/notification.svg';
import notificationPng from '../assets/images/empty-states/notification.png';
import searchResultSvg from '../assets/images/empty-states/search-result.svg';
import searchResultPng from '../assets/images/empty-states/search-result.png';
import inboxSvg from '../assets/images/empty-states/inbox.svg';
import inboxPng from '../assets/images/empty-states/inbox.png';

export const emptyStates = {
  general: {
    title: 'General',
    png: generalPng,
    svg: generalSvg,
  },
  session: {
    title: 'Empty session',
    png: sessionPng,
    svg: sessionSvg,
  },
  notification: {
    title: 'Empty notification',
    png: notificationPng,
    svg: notificationSvg,
  },
  searchResult: {
    title: 'Empty search result',
    png: searchResultPng,
    svg: searchResultSvg,
  },
  inbox: {
    title: 'Empty inbox',
    png: inboxPng,
    svg: inboxSvg,
  },
};
