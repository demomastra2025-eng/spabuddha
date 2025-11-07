import { query } from "../db/pool";
import { AppError } from "../errors/AppError";
import { verifyPassword } from "../utils/password";

interface UserRow {
  id: string;
  email: string;
  password_hash: string;
  role: string;
  display_name: string | null;
  is_active: boolean;
}

export interface AuthenticatedUser {
  id: string;
  email: string;
  role: string;
  name: string | null;
}

export async function findUserByEmail(email: string): Promise<UserRow | null> {
  const result = await query<UserRow>(
    `SELECT id, email, password_hash, role, display_name, is_active FROM users WHERE email = $1 LIMIT 1`,
    [email],
  );
  return result.rows[0] ?? null;
}

export async function authenticate(email: string, password: string): Promise<AuthenticatedUser> {
  const user = await findUserByEmail(email);
  if (!user) {
    throw new AppError(401, "Неверный email или пароль");
  }

  if (!user.is_active) {
    throw new AppError(403, "Профиль деактивирован");
  }

  const isValid = await verifyPassword(password, user.password_hash);
  if (!isValid) {
    throw new AppError(401, "Неверный email или пароль");
  }

  return {
    id: user.id,
    email: user.email,
    role: user.role,
    name: user.display_name,
  };
}
