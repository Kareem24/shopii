import OrderEmptyState from './component/OrderEmptyState';
import Ordered from './component/Ordered';
function Orders() {
  const order = true;
  return <>{order ? <Ordered /> : <OrderEmptyState />}</>;
}

export default Orders;
