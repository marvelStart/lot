import lotChat from '@/view/chats/chat'
import lotWindow from '@/view/chats/window'

const chatRoute = [
  {
    path: '/chat.html',
    name: 'lot-chat',
    component: lotChat
  },
  {
    path: '/window/:uid.html',
    name: 'lot-window',
    component: lotWindow
  }
]

export default chatRoute
