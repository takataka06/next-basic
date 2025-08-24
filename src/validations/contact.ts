import {z} from "zod"

export const ContactSchema = z.object({
  name: z.string()
  .min(3,"名前は3文字以上で入力してください")
  .max(20,"名前は20文字以下で入力してください"),
  email: z.string()
  .min(1,"emailは必須です")
  .email("emailの形式で入力してください")
})

// 型の定義
export type ContactType = z.infer<typeof ContactSchema>
 //validation で使用するスキーマの定義と型の定義できる
 