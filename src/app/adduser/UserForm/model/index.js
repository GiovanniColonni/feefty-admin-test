import { z } from "zod";

const Status = z.enum(["active", "inactive"]);

const Permission = z.enum(["create_user", "read_user", "update_user", "delete_user"]);

export const UserModel = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  status: Status.default("active"),
  email: z.string().min(1),
  roleId: z.string(),
});

export const RoleModel = z.object({
  id: z.string(),
  slug: z.string().min(1),
  label: z.string().min(1),
  permissions: z.array(Permission),
  User: z.array(UserModel),
});
