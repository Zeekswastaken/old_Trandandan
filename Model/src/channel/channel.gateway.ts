import { WebSocketGateway, SubscribeMessage, MessageBody, WebSocketServer, ConnectedSocket } from '@nestjs/websockets';
import { ChannelService } from './channel.service';
import { createChannelDto } from './dto/createChannel.dto';
import { Socket, Server } from 'socket.io';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { JwtService } from '@nestjs/jwt';
import { Channel } from 'src/database/channel.entity';
@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
// @UseGuards(AuthGuard())
export class ChannelGateway {
  @WebSocketServer()
  server: Server;
  constructor(private readonly channelService: ChannelService,
              private readonly jwtService: JwtService) {}

  @SubscribeMessage('createChannel')
  async create(@MessageBody() createChannelDto: Partial<Channel>, @ConnectedSocket() client: Socket) {
    try{
      const userid = 1;
    // console.log("====> ", client.id);xxxxx
      // console.log("it kinda worked");
      // const token = client.handshake.query.token;
      // const decodedToken = this.jwtService.verify(token.toString());
      // const userid = decodedToken.sub;
      const channel = await this.channelService.createChannel(createChannelDto, userid);
      this.server.emit('channel', channel);
      if (channel.Type === 'private')
      {
        const invitationLink = this.channelService.generateInvitationLink(channel.id);
        console.log("----------> ", invitationLink);
        client.emit('invitationLink', invitationLink);
      }
      return channel;
    } catch (error)
    {
      console.error('Error creating channel: ', error.message);
      client.emit('error', error.message);
      throw error;
    }
  }
  
  @SubscribeMessage('findAllChannels')
  async findAll() {
    return await this.channelService.getAllChannels();
  }

  @SubscribeMessage('joinChannel')
  async Join(@MessageBody() data: { channelID: Number, userID: Number, Pass: string }){
    try {
      const channelID = 1; 
      const userID = data.userID;
      const Pass = data.Pass;
    const userid = 2;
    return await this.channelService.joinChannel(channelID, userid, Pass);
    }catch (error) {
      console.error('Error joining channel: ', error.message);
      throw error;
    }
  }

  @SubscribeMessage('LeaveChannel')
  async Leave(@MessageBody() data: { channelID: Number, userID: Number})
  {
    try {
      const channelID = data.channelID; 
      const userID = data.userID;
      console.log("--------> ", data.channelID);
      console.log("--------> ", data.userID);
    const userid = 1;
    const channelid = 1;
    return await this.channelService.LeaveChannel(channelid, userid);
    }catch (error) {
      console.error('Error leaving channel: ', error.message);
      throw error;
    }
  }
  
  @SubscribeMessage('assignAdmin')
  async assignAd(@MessageBody() data: { channelID: Number, userID: Number, initiatorID: Number})
  {
    try {
      const channelID = data.channelID; 
      const userID = data.userID;
      console.log("--------> ", data.channelID);
      console.log("--------> ", data.userID);
    const userid = 2;
    const channelid = 1;
    const initiatorid = 1;
    return await this.channelService.assignAdmin(channelid, userid, initiatorid);
    }catch (error) {
      console.error('Error assigning admin: ', error.message);
      throw error;
    }
  }

  @SubscribeMessage('removeAdmin')
  async removeAd(@MessageBody() data: { channelID: Number, userID: Number, initiatorID: Number})
  {
    try {
      const channelID = data.channelID; 
      const userID = data.userID;
      console.log("--------> ", data.channelID);
      console.log("--------> ", data.userID);
    const userid = 2;
    const channelid = 4;
    const initiatorid = 1;
    return await this.channelService.removeAdmin(channelid, userid, initiatorid);
    }catch (error) {
      console.error('Error removing admin: ', error.message);
      throw error;
    }
  }

  @SubscribeMessage('muteUser')
  async mute(@MessageBody() data: { channelID: Number, userID: Number, initiatorID: Number, amount: number})
  {
    try{
      const channelID = data.channelID; 
      const userID = data.userID;
      const initiatorID = data.initiatorID;
      const amount = data.amount;
      return await this.channelService.muteUser(channelID, userID, initiatorID, amount)
    }
  catch (error) {
    console.error('Error muting user: ', error.message);
    throw error;
    }
  }

  @SubscribeMessage('unmuteUser')
  async unmute(@MessageBody() data: { channelID: Number, userID: Number})
  {
    try{
      const channelID = data.channelID; 
      const userID = data.userID;
      return await this.channelService.unmuteUser(channelID, userID)
    }
  catch (error) {
    console.error('Error unmuting user: ', error.message);
    throw error;
    }
  }

  @SubscribeMessage('banUser')
  async ban(@MessageBody() data: { channelID: Number, userID: Number, initiatorID: Number, amount: number})
  {
    try{
      const channelID = data.channelID; 
      const userID = data.userID;
      const initiatorID = data.initiatorID;
      const amount = data.amount;
      return await this.channelService.banUser(channelID, userID, initiatorID, amount)
    }
  catch (error) {
    console.error('Error banning user: ', error.message);
    throw error;
    }
  }


  @SubscribeMessage('unbanUser')
  async unban(@MessageBody() data: { channelID: Number, userID: Number})
  {
    try{
      const channelID = data.channelID; 
      const userID = data.userID;
      return await this.channelService.unbanUser(channelID, userID)
    }
  catch (error) {
    console.error('Error unmuting user: ', error.message);
    throw error;
    }
  }
}