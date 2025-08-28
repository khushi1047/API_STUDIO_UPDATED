import express from "express";
import ivm from "isolated-vm";

const router = express.Router();

router.post("/run", async (req, res) => {
  const { code } = req.body;

  try {
    // Create new isolate
    const isolate = new ivm.Isolate({ memoryLimit: 128 });

    // Create a new context
    const context = await isolate.createContext();
    const jail = context.global;

    // Allow global access
    await jail.set("global", jail.derefInto());

    // Compile and run code
    const script = await isolate.compileScript(code);

    const result = await script.run(context, {
      timeout: 1000, // prevent infinite loops
    });

    res.json({ output: String(result) }); // ✅ Send actual result
  } catch (err) {
    res.json({ error: err.message });
  }
});

export default router;
