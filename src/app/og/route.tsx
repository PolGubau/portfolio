import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";

export const runtime = "edge";

export function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const postTitle = searchParams.get("title");

  return new ImageResponse(
    <div className="w-full h-full grid place-items-center text-black bg-primary text-6xl text-cemter">
      <div
        style={{
          background:
            "url(https://polgubau.com/assets/thumbnail.png) no-repeat center",
        }}
      />
      <p className="text-center">{postTitle}</p>
    </div>,
    {
      width: 1920,
      height: 1080,
    },
  );
}
