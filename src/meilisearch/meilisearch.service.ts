import { Injectable } from '@nestjs/common';
import MeiliSearch from 'meilisearch';

@Injectable()
export class MeilisearchService {
  private readonly client: MeiliSearch;
  constructor() {
    this.client = new MeiliSearch({
      host: process.env.MEILISEARCH_HOST,
      apiKey: process.env.KEY,
    });
  }

  async addDocument(index: string, data: any) {
    await this.client.index(index).addDocuments(data);
  }

  updateDocument(index: string, data: any): void {
    this.client.index(index).updateDocuments(data);
  }

  deleteDocument(index: string, data: any): void {
    this.client.index(index).deleteDocuments(data.id);
  }

  async search(index: string, query: string) {
    return await this.client
      .index(index)
      .search(query)
      .then((res) => console.log(res));
  }
}
