export const post = async ({ request }) => {
  const data = await request.json ()
  console.log (data)
  return {
    body: {
      message: "ok"
    }
  }
}