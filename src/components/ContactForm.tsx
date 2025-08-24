"use client"
import { submitContactForm } from '@/lib/actions/contact';
import { useActionState } from 'react'
export default function ContactForm() {
  const [state, formAction] = useActionState(submitContactForm,{
    success: false,
    errors: {}
  })
  return (
    <div>
      <form action={formAction}>
        <div className='py-24 text-gray-600'>
          <div className='mx-auto flex flex-col bg-white shadow-md p-8 md:w-1/2 w-full'>
            <h2 className='text-lg mb-2'>お問い合わせフォーム</h2>
            <div className='mb-4'>
              <label htmlFor='name' className='text-sm'>名前</label>
              <input type='text' id='name' name='name' className='w-full border rounded px-3 py-2 mt-1 text-sm'/>
              {state.errors.name && (
                <p className='text-red-500 text-sm mt-1'>{state.errors.name.join(",")}</p>
              )}
            </div>
            <div className='mb-4'>
              <label htmlFor='email' className='test-sm'>email</label>
              <input type='text' id='email' name="email" className='w-full border rounded px-3 py-2 mt-1 text-sm'/>
              {state.errors.name && (
                <p className='text-red-500 text-sm mt-1'>{state.errors.email.join(",")}</p>
              )}
            </div>
            <button className='text-white bg-indigo-500 py-2 px-6 rounded text-lg'>送信</button>
          </div>
        </div> 
      </form>
    </div>
  )
}
