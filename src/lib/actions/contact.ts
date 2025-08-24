"use server"
import { flatten } from './../../../node_modules/zod/src/v3/helpers/util';
import { redirect } from "next/navigation"
import { ContactSchema } from "@/validations/contact"

// ActionStateの方定義
type ActionState ={
  success: boolean;
  errors: {
    name?: string[]
    email?: string[]
  }
  serverError?: string
}

export async function submitContactForm(
  prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  // フォームデータの取得
  const name = formData.get("name")
  const email = formData.get("email")

  // ここでバリデーションを実行
  const validationResult = ContactSchema.safeParse({name, email})

  if(!validationResult.success) {
    // バリデーションエラー
    const errors = validationResult.error.flatten().fieldErrors
    console.log(errors)
    return {
      success: false,
      errors: {
        name: errors.name || [],
        email: errors.email || []
      }
    }
  }
  // DB

  console.log({name, email});

  redirect("/contacts/complete")
}