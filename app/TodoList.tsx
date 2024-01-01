// TodoList.tsx

"use client"
import type { Schema } from '@/amplify/data/resource'
import { generateClient } from 'aws-amplify/data'
import { client } from '@/utils/data'

const client = generateClient<Schema>()

export default function TodoList() {
  async function createTodo() => {
    await client.models.Todo.create({
      content: window.prompt("Todo content?"),
      isDone: false
    })
  }

  return <div>
    <button onClick={createTodo}>Add new todo</button>
  </div>
}