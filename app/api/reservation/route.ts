import { NextResponse } from 'next/server'
import { reservationSchema } from '@/lib/schemas'

export async function POST(request: Request) {
  try {
    const body: unknown = await request.json()
    const result = reservationSchema.safeParse(body)

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          message: 'Invalid reservation data',
          errors: result.error.flatten().fieldErrors,
        },
        { status: 400 },
      )
    }

    console.log('Reservation received', result.data)

    return NextResponse.json({
      success: true,
      message: 'Reservation received',
    })
  } catch {
    return NextResponse.json(
      { success: false, message: 'Unable to process reservation' },
      { status: 500 },
    )
  }
}
