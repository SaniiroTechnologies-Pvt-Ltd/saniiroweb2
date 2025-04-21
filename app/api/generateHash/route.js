import crypto from "crypto";

// POST method handler export karein
export async function POST(req) {
  try {
    const body = await req.json(); // Request body ko JSON mein parse karein
    const { key, txnid, amount, productinfo, firstname, email } = body;

    // Required fields ko validate karein
    if (!key || !txnid || !amount || !productinfo || !firstname || !email) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const salt = "tZ8uy9qJ9iWfVtbOmU4hXk3PVGuSroXk"; // Apni PayU Merchant Salt yahan daalein
    const hashString = `${key}|${txnid}|${amount}|${productinfo}|${firstname}|${email}|||||||||||${salt}`;
    const hash = crypto.createHash("sha512").update(hashString).digest("hex");

    // Hash return karein
    return new Response(JSON.stringify({ hash }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
