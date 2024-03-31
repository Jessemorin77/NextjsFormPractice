type State = {
  message: string | null
}

function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export async function action(initialState: State, formData: FormData) {
  const value1 = formData.get("value1")

  await sleep(3000)

  if (value1 == "") {
    return {
      message: "empty"
    }
  }

  return {
    message: `value1: ${value1}`
  }

}
