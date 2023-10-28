import {addTask} from "@/app/actions";
import Form from "@/app/_components/form";

export default function Home() {
  return (
    <main>
      <Form onSubmit={addTask} />
      <div>{new Date().toLocaleString()}</div>
    </main>
  )
}
