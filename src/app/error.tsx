"use client";

import { Button } from "pol-ui";
import { useMemo } from "react";

export default function ErrorComponent({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="flex text-center w-full flex-col gap-4 items-center justify-center">
      <p>🫥 Oh no, something went wrong... maybe refresh?</p>
      {useMemo(
        () => (
          <Button variant="outline" onClick={reset}>
            Refresh
          </Button>
        ),
        [reset],
      )}

      <pre>{JSON.stringify(error)}</pre>
    </div>
  );
}
