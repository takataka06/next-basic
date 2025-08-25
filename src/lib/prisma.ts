import { PrismaClient } from "@prisma/client";

//グローバルスコープでprismaインスタンスをキャッシュする
const globalForPrisma = globalThis as unknown as { 
  prisma: PrismaClient | undefined};
// prismaインスタンスがあればそれを使い、なければ新しく作成する
export const prisma = globalForPrisma.prisma ?? new PrismaClient();
// 開発環境でのみ使用
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;