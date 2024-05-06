import { Injectable, Inject } from '@nestjs/common';
import { Product } from '../entities/product.entity';
import { MeilisearchService } from 'src/meilisearch/meilisearch.service';
import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
  UpdateEvent,
  RemoveEvent,
} from 'typeorm';

@EventSubscriber()
@Injectable()
export class ProductSubscriber implements EntitySubscriberInterface<Product> {
  constructor(private readonly meilisearchService: MeilisearchService) {}

  listenTo() {
    return Product;
  }

  async afterInsert(event: InsertEvent<Product>) {
    console.log(event.entity);
    await this.meilisearchService.addDocument('product', event.entity);
  }

  afterUpdate(event: UpdateEvent<Product>) {
    console.log('yyy');
    this.meilisearchService.updateDocument('product', event.entity);
  }

  afterRemove(event: RemoveEvent<Product>) {
    console.log('zzz');
    this.meilisearchService.deleteDocument('product', event.entity);
  }

  beforeInsert(event: InsertEvent<Product>) {
    console.log(`BEFORE USER INSERTED: `, event.entity);
  }
}
