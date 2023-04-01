import { rest } from 'msw';
import { Order } from 'types/order';
import { ORDERS } from 'constants/orders';
import ordersData from 'mocks/data/orders.json';

const handlers = [
  // 주문 리스트 가져오기
  rest.get<Order[]>(`/${ORDERS}`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json<Order[]>(ordersData.orders));
  }),

  // 특정 주문내역 가져오기
  rest.get<Order>(`/${ORDERS}/:id`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json<Order | undefined>(
        ordersData.orders.find(
          (order: Order) => order.id === parseInt(req.params.id as string)
        )
      )
    );
  }),
];
export default handlers;
