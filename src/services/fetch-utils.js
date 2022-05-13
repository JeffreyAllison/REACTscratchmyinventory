import { client, checkError } from './client';

export async function createAlbum(album) {
  const response = await client.from('albums').insert([album]);

  return checkError(response);
}

export async function getAlbums() {
  const response = await client.from('albums').select();

  return checkError(response);
}

export async function getAlbumById(id) {
  const response = await client.from('albums').select().match({ id }).single();

  return checkError(response);
}

export async function updateAlbum(id, newAlbum) {
  const response = await client.from('albums').update(newAlbum).match({ id });

  return checkError(response);
}

export function getUser() {
  return client.auth.session();
}

export async function signUp(email, password) {
  const response = await client.auth.signUp({ email, password });

  return response.user;
}

export async function signIn(email, password) {
  const response = await client.auth.signIn({ email, password });

  return response.user;
}

export async function logout() {
  await client.auth.signOut();

  return (window.location.href = '../');
}
