import { Injectable } from '@nestjs/common';
import { CreateCardsDto } from './cards.dto';

@Injectable()
export class AppService {
  Cards: CreateCardsDto[] = []
  handleCardsPlaced(Cards: CreateCardsDto) {
    console.log(`Received a new order - customer: ${Cards.cardCommander}`);
    this.Cards.push(Cards);
  }

  getCards() {
    return this.Cards;
  }
}
