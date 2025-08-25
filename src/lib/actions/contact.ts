"use server"
import { flatten } from './../../../node_modules/zod/src/v3/helpers/util';
import { redirect } from "next/navigation"
import { ContactSchema } from "@/validations/contact"
import {prisma} from "@/lib/prisma"

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
  const name = formData.get("name") as string
  const email = formData.get("email") as string

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
//メールアドレスが存在しているか確認
  const existingRecord = await prisma.contact.findUnique({
    where: {email: email}
  })
  if(existingRecord){
    return {
      success:false,
      errors: {
        name: [],
        email: ["このemailは既に存在しています"]
      }
    }
    await prisma.contact.create({
      data: {
        name,
        email 
      }
    })
  }

  console.log({name, email});

  redirect("/contacts/complete")
}