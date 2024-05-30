import emptyState from '../../../assets/icons/Empty-State.png';
import { Button } from '../../../components/ui/button';
function OrderEmptyState() {
  return (
    <div className="m-auto flex max-w-80 flex-col items-center justify-center space-y-6">
      <img src={emptyState} alt="" width={64} height={64} />
      <p className="text-shopii-black-500">
        {' '}
        your order history is waiting to be filled
      </p>
      <Button>Start order</Button>
    </div>
  );
}

export default OrderEmptyState;
