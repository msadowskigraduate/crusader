import { NextResponse } from 'next/server';
import { getFactionById } from '@/app/lib/data'; // your existing server function

type Params = {
  params: {
    id: string;
  };
};

export async function GET(request: Request, { params }: Params) {
  const { id } = params;

  console.log(id);
  try {
    const factions = await getFactionById(id);
    return NextResponse.json(factions);
  } catch (error) {
    console.error('Error fetching factions:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
