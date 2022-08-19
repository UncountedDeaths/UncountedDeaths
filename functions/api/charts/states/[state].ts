export async function onRequestGet(context) {
  // Contents of context object
  const {
    request, // same as existing Worker API
    env, // same as existing Worker API
    params, // if filename includes [id] or [[path]]
    waitUntil, // same as ctx.waitUntil in existing Worker API
    next, // used for middleware or to fetch assets
    data, // arbitrary space for passing data between middlewares
  } = context;
  const value = await env.VitalStats.get('TEST', { type: 'text' });
  await env.VitalStats.put('react', 'testing');
  console.log(value);
  return new Response(value == null ? 'nothing' : value);
}
