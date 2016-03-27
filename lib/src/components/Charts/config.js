export default {
  enrolment: {
    hd: {
      title: getTitle('enrolment', 'hd'),
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
      title: getTitle('enrolment', 'pad'),
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
      title: getTitle('enrolment', 'pd'),
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
      title: getTitle('enrolment', 'ufd'),
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
      title: getTitle('graduates', 'hd'),
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
      title: getTitle('graduates', 'pad'),
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
      title: getTitle('graduates', 'pd'),
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
      title: getTitle('graduates', 'ufd'),
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

function getTitle(type, name) {
  let first = ''
  switch (type) {
    case 'enrolment':
      first = 'Enrolment In'
      break
    case 'graduates':
      first = 'Graduates From'
      break
    default:
      break
  }
  let second = ''
  switch (name) {
    case 'hd':
      second = 'Higher Degree'
      break
    case 'ufd':
      second = 'University First Degree'
      break
    case 'pad':
      second = 'Polytechnic Advanced Diploma'
      break
    case 'pd':
      second = 'Polytechnic Diploma'
      break
    default:
      break
  }
  return `${first}\n${second} Courses`
}
