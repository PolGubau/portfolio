import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const postTitle = searchParams.get("title");
  const fontData = await fetch(
    "https://polgubau.com/fonts/Poppins-Regular.ttf"
  ).then((res) => res.arrayBuffer());
  return new ImageResponse(
    (
      <div className="w-full h-full grid place-items-center text-black bg-primary text-6xl ">
        <div
          style={{
            background:
              "url(https://polgubau.com/assets/thumbnail.png) no-repeat center center fixed",
          }}
        ></div>
        <p>{postTitle}</p>
      </div>
    ),
    {
      width: 1920,
      height: 1080,
      fonts: [
        {
          name: "Pol Gubau Amores",
          data: fontData,
          style: "normal",
        },
      ],
    }
  );
}
