"use client";

import { Button } from "pol-ui";
import { useEffect } from "react";

export default function ({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex text-center w-full flex-col gap-4 items-center justify-center">
      <p>🫥 Oh no, something went wrong... maybe refresh?</p>
      <Button variant='outline' onClick={reset}>
        Refresh
      </Button>
    </div>
  );
}
