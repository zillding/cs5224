import { getChartTitle } from './utils'

export const CHARTS_TYPES = ['enrolment', 'graduates']
export const CHARTS_NAMES = ['hd', 'ufd', 'pad', 'pd']

export const DEFAULT_CHARTS = [{
  type: 'enrolment',
  name: 'hd'
}, {
  type: 'graduates',
  name: 'hd'
}]

export default {
  enrolment: {
    hd: {
      title: getChartTitle('enrolment', 'hd'),
      headers: [
        'Education',
        'Humanities & Social Sciences',
        'Mass Communication',
        'Business & Administration',
        'Law',
        'Natural, Physical & Mathematical Sciences',
        'Health Sciences',
        'Information Technology',
        'Architecture & Building',
        'Engineering Sciences',
        'Services',
        'Others'
      ]
    },
    pad: {
      title: getChartTitle('enrolment', 'pad'),
      headers: [
        'Education',
        'Applied Arts',
        'Humanities & Social Sciences',
        'Business & Administration',
        'Science & Related Technologies',
        'Health Sciences',
        'Information Technology',
        'Architecture & Building',
        'Engineering Sciences',
        'Services'
      ]
    },
    pd: {
      title: getChartTitle('enrolment', 'pd'),
      headers: [
        'Education',
        'Applied Arts',
        'Humanities & Social Sciences',
        'Mass Communication & Information Science',
        'Business & Administration',
        'Legal Studies',
        'Science & Related Technologies',
        'Health Sciences',
        'Malesormation Technology',
        'Architecture & Building',
        'Engineering Sciences',
        'Services'
      ]
    },
    ufd: {
      title: getChartTitle('enrolment', 'ufd'),
      headers: [
        'Education',
        'Applied Arts',
        'Humanities & Social Sciences',
        'Mass Communication',
        'Accountancy',
        'Business & Administration',
        'Law',
        'Natural, Physical & Mathematical Sciences',
        'Medicine',
        'Dentistry',
        'Health Sciences',
        'Information Technology',
        'Architecture & Building',
        'Engineering Sciences',
        'Services'
      ]
    },
  },
  graduates: {
    hd: {
      title: getChartTitle('graduates', 'hd'),
      headers: [
        'Education',
        'Humanities & Social Sciences',
        'Mass Communication',
        'Business & Administration',
        'Law',
        'Natural, Physical & Mathematical Sciences',
        'Health Sciences',
        'Information Technology',
        'Architecture & Building',
        'Engineering Sciences',
        'Services',
        'Others'
      ]
    },
    pad: {
      title: getChartTitle('graduates', 'pad'),
      headers: [
        'Education',
        'Applied Arts',
        'Humanities & Social Sciences',
        'Business & Administration',
        'Science & Related Technologies',
        'Health Sciences',
        'Information Technology',
        'Architecture & Building',
        'Engineering Sciences',
        'Services'
      ]
    },
    pd: {
      title: getChartTitle('graduates', 'pd'),
      headers: [
        'Education',
        'Applied Arts',
        'Humanities & Social Sciences',
        'Mass Communication & Information Science',
        'Business & Administration',
        'Legal Studies',
        'Science & Related Technologies',
        'Health Sciences',
        'Information Technology',
        'Architecture & Building',
        'Engineering Sciences',
        'Services'
      ]
    },
    ufd: {
      title: getChartTitle('graduates', 'ufd'),
      headers: [
        'Education',
        'Applied Arts',
        'Humanities & Social Sciences',
        'Mass Communication',
        'Accountancy',
        'Business & Administration',
        'Law',
        'Natural, Physical & Mathematical Sciences',
        'Medicine',
        'Dentistry',
        'Health Sciences',
        'Information Technology',
        'Architecture & Building',
        'Engineering Sciences',
        'Services'
      ]
    },
  }
}
