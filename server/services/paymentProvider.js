/**
 * Checkout adapter boundary for a future Stripe or Razorpay integration.
 * Keep provider-specific SDK calls in this module so controllers and UI do
 * not depend on a particular payment vendor.
 */
export async function createCheckoutSession({ plan }) {
  if (!process.env.STRIPE_SECRET_KEY && !process.env.RAZORPAY_KEY_ID) {
    return {
      configured: false,
      message:
        "Online checkout is not connected yet. Contact us to arrange this plan.",
    };
  }

  // Add provider SDK session creation here, then return a hosted checkout URL.
  // Do not mark subscriptions active until the provider confirms payment.
  return {
    configured: false,
    message:
      "Payment credentials are present, but the provider checkout adapter still needs setup.",
    requestedPlan: plan,
  };
}
