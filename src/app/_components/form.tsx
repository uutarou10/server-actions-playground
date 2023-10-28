'use client'
// import { startTransition } from 'react'
// import {addTask} from "@/app/actions";
import {FormEvent} from "react";
import {useRouter} from 'next/navigation'

type Props = {
  onSubmit: (text: string) => void
}
export default function Form({ onSubmit }: Props) {
  const router = useRouter()
  const _onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('called onSubmit function', e.currentTarget.text.value)
    onSubmit(e.currentTarget.text.value)
    router.refresh()
  }
  return (
    <form onSubmit={_onSubmit}>
      <label>
        What will you do?
        <input type={'text'} name={'text'} required />
      </label>
      <button type={'submit'}>Submit</button>
    </form>
  )
}
