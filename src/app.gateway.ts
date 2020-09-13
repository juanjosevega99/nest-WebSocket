import { Logger } from '@nestjs/common';
import { SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';

@WebSocketGateway()
export class AppGateway {
  
  private logger: Logger = new Logger('AppGateway')

  afterInit(server : any) {
    this.logger.log('Initialized')
  }
  
  @SubscribeMessage('message')
  handleMessage(client: any, payload: any): string {
    return 'Hello world!';
  }
}
