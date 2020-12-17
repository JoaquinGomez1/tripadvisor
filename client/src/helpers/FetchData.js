export default async function fetchData(url) {
  const req = await fetch(url);
  const res = await req.json();

  return { req, res };
}
