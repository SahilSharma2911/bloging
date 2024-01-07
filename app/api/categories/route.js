import prisma from "@/app/utils/connect";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const categories = await prisma.category.findMany();
    console.log(categories);
    // return new NextResponse(JSON.stringify(categories, { status: 200 }));
    return new NextResponse.json(categories, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { message: "Something went wrong!" },
      { status: 500 }
    );
    // return new NextResponse(
    //   JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    // );
  }
};
