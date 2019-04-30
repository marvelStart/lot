import lotLocations from '@/view/locations/lovation'
import lotHomepage from '@/view/locations/homepage'
const locationRouter = [
  {
    path: '/locations.html',
    name: 'lot-locations',
    component: lotLocations
  },
  {
    path: '/location/:uid.html',
    name: 'lot-homepage',
    component: lotHomepage
  }
]

export default locationRouter
