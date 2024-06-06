import { DataAPIClient, VectorDoc, UUID } from '@datastax/astra-db-ts';

const { ASTRA_DB_APPLICATION_TOKEN, ASTRA_DB_API_ENDPOINT } = process.env;

if(!ASTRA_DB_APPLICATION_TOKEN && !ASTRA_DB_API_ENDPOINT) {
  throw new Error('Missing environment variables');
}


// initialize the client
const client = new DataAPIClient(ASTRA_DB_APPLICATION_TOKEN!, { httpOptions: { client: 'fetch'}});
export const db = client.db(ASTRA_DB_API_ENDPOINT!)
