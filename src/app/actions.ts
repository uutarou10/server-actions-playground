'use server'

export const addTask = async (task: string) => {
  console.log('addTask', task)
  return `Received text: ${task}`
}
