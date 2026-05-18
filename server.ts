import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { Resend } from "resend";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Middleware to parse JSON bodies
  app.use(express.json());

  // API Routes
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, phone, truck, mcNumber, message } = req.body;
      
      const resendApiKey = process.env.RESEND_API_KEY;
      if (!resendApiKey) {
        return res.status(500).json({ error: "RESEND_API_KEY environment variable is not set." });
      }

      const resend = new Resend(resendApiKey);

      const data = await resend.emails.send({
        from: 'onboarding@resend.dev', // Default resend testing email
        to: 'ateeqwrk1@gmail.com', // Sends to the user who requested this
        subject: `New Contact Form Submission from ${name}`,
        html: `
          <h3>New Contact Request</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
          <p><strong>MC Number:</strong> ${mcNumber || 'N/A'}</p>
          <p><strong>Truck Type:</strong> ${truck || 'N/A'}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        `
      });

      res.status(200).json({ success: true, data });
    } catch (error: any) {
      console.error("Resend error:", error);
      res.status(500).json({ error: error.message || "Failed to send email" });
    }
  });

  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    // Fallback for SPA routing depending on express version (using * for v4)
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
