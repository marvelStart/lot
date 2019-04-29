import lotUser from '@/view/users/user'
import editInfo from '@/view/users/editInfo'

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
  }
]

export default userRoute
