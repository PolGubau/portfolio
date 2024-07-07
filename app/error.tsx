"use client";

import { Button } from "pol-ui";
 
export function errorComponent ({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
 

  return (
    <div className="flex text-center w-full flex-col gap-4 items-center justify-center">
      <p>🫥 Oh no, something went wrong... maybe refresh?</p>
      <Button variant='outline' onClick={reset}>
        Refresh
      </Button>

      <pre>
         {JSON.stringify(error)}
      </pre>
    </div>
  );
}
