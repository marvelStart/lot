import lotUser from '@/view/users/user'
import lotEditInfo from '@/view/users/editInfo'
import lotBuy from '@/view/users/buy'

const userRoute = [
  {
    path: '/user.html',
    name: 'lot-user',
    component: lotUser
  },
  {
    path: '/edit.html',
    name: 'lot-edit-user',
    component: lotEditInfo
  },
  {
    path: '/buy/:type.html',
    name: 'lot-buy',
    component: lotBuy
  }
]

export default userRoute
