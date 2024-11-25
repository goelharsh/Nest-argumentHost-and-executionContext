import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// In next js application we have application context

// Till now we have made http based applications - in application ka context HTTP hi hota hai 

// Hum nextjs me MICROSERVICES based applications bhi bna skte hain 
// - inka context RPC HOTA HAI 

// WEB SOCKET BASED - WS CONTEXT

// IN APPLICATION KO HOST BOLTE HAI , AND IN APPLICATION KA EK PARTICULAR CONTEXT HOTA HAI 

// NOW 
// To work with these things we have  - argumentHost class 

// METHODS PRESENT IN THIS CLASS

// getType(), switchToHttp(), swichToRpc(), switchToWs, getArgs(), getArgByIndex()

// NOW 
// **** EXECUTION CONTEXT *****

// JAISE HMARE PASS KAFI SARI CHIJE EXECUTE HORI HOTI HAI APP ME, LIKE CONTROLLER, PIPE, SERVICES, ETC,

// TO KAB KHA KYA CHIJ EXECUTE HORI HAI IS CHIIJ KI INFO KE LIYE HUM EXECUTION CONTEXT USE KRTE HAIN 

// execution context class extends from arguments host clas 


// getClass(), getHandler() 


// *** ********* **********

// 1. HttppArgumentHost class  - iski help se hum httpcontext me kam krte hain  
  // - getRequest() 
  // - getResponse()
  // - getNext()

// 2. WsArgumentHost class  - iski help se hum web socket context me kam krte hain  
  // - getData() 
  // - getClient()

// 3. RpcArgumentHost class  - iski help se hum microservices context me kam krte hain  
  // - getData() 
  // - getContext()


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
