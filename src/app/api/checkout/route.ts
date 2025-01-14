import { NextResponse } from 'next/server';
import Stripe from 'stripe';

// Route Segment Config
export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

// Check environment variables
const stripeKey = process.env.STRIPE_SECRET_KEY;
const appUrl = process.env.NEXT_PUBLIC_APP_URL;

console.log('Environment check:', {
  hasStripeKey: !!stripeKey,
  hasAppUrl: !!appUrl,
});

if (!stripeKey) {
  throw new Error('Missing STRIPE_SECRET_KEY');
}

if (!appUrl) {
  throw new Error('Missing NEXT_PUBLIC_APP_URL');
}

const stripe = new Stripe(stripeKey, {
  apiVersion: '2023-10-16',
});

export async function POST(request: Request) {
  console.log('Received checkout request');
  
  try {
    const body = await request.json();
    console.log('Request body:', body);

    const { packageId, packageName, price } = body;

    if (!packageId || !packageName || typeof price !== 'number') {
      console.log('Invalid request data:', { packageId, packageName, price });
      return NextResponse.json(
        { error: 'Invalid request data' },
        { status: 400 }
      );
    }

    console.log('Creating Stripe checkout session...');
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: packageName,
            },
            unit_amount: price * 100,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${appUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${appUrl}/`,
    });

    console.log('Checkout session created:', { sessionId: session.id, hasUrl: !!session.url });

    if (!session.url) {
      return NextResponse.json(
        { error: 'Failed to create checkout session URL' },
        { status: 500 }
      );
    }

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error('Checkout session creation failed:', {
      error,
      message: error instanceof Error ? error.message : 'Unknown error',
      name: error instanceof Error ? error.name : 'Unknown',
      stack: error instanceof Error ? error.stack : undefined
    });
    
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Internal server error' },
      { status: 500 }
    );
  }
} 