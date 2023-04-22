export default function User() {
  //COMPONENT LOGIC
  const id: number = 89;
  //Request all users from the Next.js API: GET all users

  //RETURN this to UI
  return (
    <main>
      <h1 className="flex justify-center">Specific User with ID: ${id}</h1>
    </main>
  );
}
