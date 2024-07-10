/**
 * Generated by orval v6.5.3 🍺
 * Do not edit manually.
 * Swagger Petstore
 * This is a sample Petstore server.  You can find 
out more about Swagger at 
[http://swagger.io](http://swagger.io) or on 
[irc.freenode.net, #swagger](http://swagger.io/irc/).

 * OpenAPI spec version: 1.0.0
 */
import type { Category } from './category';
import type { Tag } from './tag';
import type { PetStatus } from './petStatus';

export interface Pet {
  id?: number;
  category?: Category;
  name: string;
  photoUrls: string[];
  tags?: Tag[];
  /** pet status in the store */
  status?: PetStatus;
}
