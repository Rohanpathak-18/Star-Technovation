import { createCheckoutSession } from "../services/paymentProvider.js";

const plans = new Set(["Monthly", "Quarterly", "Half Yearly", "Yearly"]);

export async function createCheckout(req, res) {
  const { plan } = req.body;

  if (!plans.has(plan)) {
    return res
      .status(400)
      .json({ message: "Choose a valid plan." });
  }

  const checkout = await createCheckoutSession({ plan });

  if (!checkout.configured) {
    return res.status(503).json({ message: checkout.message });
  }

  return res.json(checkout);
}
