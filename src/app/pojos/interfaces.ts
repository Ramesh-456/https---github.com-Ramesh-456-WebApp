export interface ChatUserDTO{
    userId:String,
    userFirstName:String
  }

export interface ChatInfos{
    sender?:String,
    receiver?:String,
    senderMsg?:String,
    sendingTime?:String,
    receivingTime?:String
}