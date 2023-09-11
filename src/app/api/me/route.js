import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    ok: true,
    fullName: "Tanakrit Boonyoung",
    studentId: "650612084",
  });
};
