import { createCheckoutSession } from "../services/paymentProvider.js";

const plans = new Set(["Signal", "Orbit", "Constellation"]);

export async function createCheckout(req, res) {
  const { plan, billing = "monthly" } = req.body;

  if (!plans.has(plan) || !["monthly", "yearly"].includes(billing)) {
    return res
      .status(400)
      .json({ message: "Choose a valid plan and billing period." });
  }

  const checkout = await createCheckoutSession({ plan, billing });

  if (!checkout.configured) {
    return res.status(503).json({ message: checkout.message });
  }

  return res.json(checkout);
}
