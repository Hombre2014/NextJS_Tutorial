export default function UserList({ users }) {
  return (
    <div>
      <h1>List of Users</h1>
      {
        users.map(user => (
          <div key={user.id}>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </div>
        ))
      }
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  console.log(data);

  return {
    props: {
      users: data,
    },
  }
}
