import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MeilisearchModule } from './meilisearch/meilisearch.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductModule } from './product/product.module';
import { Product } from './product/entities/product.entity';
import { ProductSubscriber } from './product/events/product.subscriber.event';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Fatih1234',
      database: 'test',
      subscribers: [ProductSubscriber],
      entities: [Product],
      synchronize: true,
    }),
    MeilisearchModule,
    ProductModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
