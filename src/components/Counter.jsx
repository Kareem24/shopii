import { useState } from 'react';
import { cn } from '../lib/utils';

export default function Counter({ className }) {
  const [count, setCount] = useState(1);

  return (
    <div
      className={cn(
        className,
        'flex  justify-between rounded-md border border-shopii-black-900 ',
      )}
    >
      <button
        className="text-lg font-medium text-shopii-black-500"
        onClick={() => {
          if (count > 0) setCount((count) => count - 1);
        }}
      >
        -
      </button>
      <p className="text-lg font-medium text-shopii-black-500">{count}</p>
      <button
        className="text-lg font-medium text-shopii-black-500"
        onClick={() => setCount((count) => count + 1)}
      >
        +
      </button>
    </div>
  );
}
