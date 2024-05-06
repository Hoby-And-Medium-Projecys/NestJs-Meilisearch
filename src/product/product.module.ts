import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { ProductSubscriber } from './events/product.subscriber.event';
import { MeilisearchService } from 'src/meilisearch/meilisearch.service';

@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  controllers: [ProductController],
  providers: [ProductService, ProductSubscriber, MeilisearchService],
  exports: [ProductService],
})
export class ProductModule {}
