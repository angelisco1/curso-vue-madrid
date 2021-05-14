

export const getUsuarioById = async (idUsuario) => {
  const resp = await fetch(
    'https://jsonplaceholder.typicode.com/users/' + idUsuario
  );
  return await resp.json();
}

export const getUsuarios = async () => {
  const resp = await fetch('https://jsonplaceholder.typicode.com/users');
  return await resp.json();
}