import { Button } from '../components/ui/button';
function Order({
  state,
}: {
  state: {
    img: string;
    heading: string;
    message: string;
    btnText: string;
  };
}) {
  const { img, heading, message, btnText } = state;
  return (
    <div className="py-40">
      <div className="m-auto max-w-80 text-center">
        <img src={img} alt="" className="m-auto block" />

        <h3 className="mb-4 mt-5 text-2xl font-bold capitalize text-shopii-black-900  ">
          {heading}
        </h3>
        <p className="mb-10 text-sm text-shopii-black-500">{message}</p>

        <Button className="capitalize">{btnText}</Button>
      </div>
    </div>
  );
}

export default Order;
