import _ from 'lodash'
import { Contact, Room } from 'wechaty'

const me = ['wxid_fw1ohd5c982222', 'wxid_1qizr97llbta22']

const hello = (contact: Contact) => _.trim(`
欢迎新人入群, 请注意修改昵称 (eg. 山月-前端-北京)

---
由山月自制机器人发送，目前支持面试，基金关键字回复

博客: https://shanyue.tech
github: https://github.com/shfshanyue
`)

export const handleRoomJoin = (room: Room, inviteeList: Contact[]) => {
  if (me.includes(room.owner().id)) {
    inviteeList.forEach(c => {
      room.say(hello(c), c)
    })
  }
}
