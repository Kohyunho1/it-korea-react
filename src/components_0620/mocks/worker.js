// msw : 가상 백엔드
import { setupWorker } from 'msw/browser';
import { handler } from './handler';

export const worker = setupWorker(...handler);
