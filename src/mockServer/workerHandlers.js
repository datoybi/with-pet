import { rest } from 'msw';
import getFebData from 'lib/mocks/account/getFebData.json';

const todos = ['먹기', '자기', '놀기'];

export const workerHandlers = [
  // 소비 내역 전체를 조회합니다.
  rest.get('/consumption', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(getFebData));
  }),

  // 할일 추가
  rest.post('/todos', (req, res, ctx) => {
    todos.push(req.body);
    return res(ctx.status(201));
  }),
];
