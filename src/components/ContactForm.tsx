"use client"
import { submitContactForm } from '@/lib/actions/contact';
import { useActionState,useState } from 'react'
import { z} from "zod"
import { ContactSchema } from '@/validations/contact';

export default function ContactForm() {
  const [state, formAction] = useActionState(submitContactForm,{
    success: false,
    errors: {}
  })

  const [clientErrors,setClientErrors] = useState({
    name:"",
    email:""})

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const {name, value} = e.target

    try{
      if(name === "name"){
        ContactSchema.pick({name:true}).parse({name:value})

      } else if(name === "email"){
        ContactSchema.pick({email:true}).parse({email:value})
      }
      //エラーを空にする
      setClientErrors((prev) => ({...prev, [name]:""}))
    } catch(error){
      if(error instanceof z.ZodError){
        const errorMessage = error.errors[0]?.message || ""
        setClientErrors((prev) => ({...prev, [name]:errorMessage}) )
      }
    }
  }
  return (
    <div>
      <form action={formAction}>
        <div className='py-24 text-gray-600'>
          <div className='mx-auto flex flex-col bg-white shadow-md p-8 md:w-1/2 w-full'>
            <h2 className='text-lg mb-2'>お問い合わせフォーム</h2>
            <div className='mb-4'>
              <label htmlFor='name' className='text-sm'>名前</label>
              <input type='text' id='name' name='name'
              onBlur={handleBlur} className='w-full border rounded px-3 py-2 mt-1 text-sm'/>
              {state.errors.name && (
                <p className='text-red-500 text-sm mt-1'>{state.errors.name.join(",")}</p>
              )}
              {clientErrors.name && (
                <p className='text-red-500 text-sm mt-1'>{clientErrors.name}</p>
              )}
            </div>
            <div className='mb-4'>
              <label htmlFor='email' className='test-sm'>email</label>
              <input type='text' id='email' name="email" 
              onBlur={handleBlur} className='w-full border rounded px-3 py-2 mt-1 text-sm'/>
              {state.errors.name && (
                <p className='text-red-500 text-sm mt-1'>{state.errors.email.join(",")}</p>
              )}
              {clientErrors.name && (
                <p className='text-red-500 text-sm mt-1'>{clientErrors.email}</p>
              )}
            </div>
            <button className='text-white bg-indigo-500 py-2 px-6 rounded text-lg'>送信</button>
          </div>
        </div> 
      </form>
    </div>
  )
}
