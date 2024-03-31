"use client"
import { useFormState, useFormStatus } from 'react-dom'
import  {action}  from "./action"
import { revalidatePath } from 'next/cache'

type State = {
  message: string | null
}

function SubmitBtn(){
  const { pending } = useFormStatus()
  return(
    <button type="submit" disabled={pending}>
      {pending ? "Submitting..." : "Submit"} 
    </button>
  )
}

export default function HomePage() {
  const initialState = {
    message: "",
  }
  const [state, formAction] = useFormState<State, FormData>(action, initialState)

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-black">
      <form action={async (formData) => {
        formAction(formData)
      }}>
        <input name="value1" type="text" />
        <SubmitBtn/>
        <p>{state.message}</p>
      </form>
    </main>
  );
}
