import { Logger } from '@nestjs/common';
import {
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';

@WebSocketGateway()
export class ChatGateway implements OnGatewayInit {
  @WebSocketServer() wss: Server;
  private logger: Logger = new Logger('ChatGateway');

  afterInit(server: any) {
    throw new Error('Method not implemented.');
  }

  @SubscribeMessage('chatToServer')
  handleMessage(client: Socket, message: { sender: string; message: string }) {
    this.wss.emit('chatToClient', message);
  }
}
