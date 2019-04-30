import lotUser from '@/view/users/user'
import editInfo from '@/view/users/editInfo'
import buy from '@/view/users/buy'

const userRoute = [
  {
    path: '/user.html',
    name: 'lot-user',
    component: lotUser
  },
  {
    path: '/edit.html',
    name: 'lot-edit-user',
    component: editInfo
  },
  {
    path: '/buy/:type.html',
    name: 'lot-buy',
    component: buy
  }
]

export default userRoute
