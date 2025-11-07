import { Router } from "express";
import { z } from "zod";
import { asyncHandler } from "../middleware/asyncHandler";
import { authenticate } from "../services/authService";
import { signAccessToken } from "../utils/jwt";
import { requireAuth } from "../middleware/authMiddleware";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export const authRouter = Router();

authRouter.post(
  "/login",
  asyncHandler(async (req, res) => {
    const payload = loginSchema.parse(req.body);
    const user = await authenticate(payload.email, payload.password);
    const token = signAccessToken({ sub: user.id, email: user.email, role: user.role, name: user.name });
    res.json({ token, user });
  }),
);

authRouter.get(
  "/me",
  requireAuth,
  asyncHandler(async (req, res) => {
    res.json({
      user: {
        id: req.user!.sub,
        email: req.user!.email,
        role: req.user!.role,
        name: req.user!.name ?? null,
      },
    });
  }),
);
