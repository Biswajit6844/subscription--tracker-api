// config/upstash.js
import { Client } from '@upstash/workflow';

const { QSTASH_TOKEN } = process.env;

if (!QSTASH_TOKEN) {
  throw new Error('❌ QSTASH_TOKEN is missing from environment variables');
}

export const workflowClient = new Client({
  token: QSTASH_TOKEN,
});
