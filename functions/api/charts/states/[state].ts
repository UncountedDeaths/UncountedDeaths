export async function onRequestGet(context) {
  // Contents of context object
  const {
    env, // same as existing Worker API
    params, // if filename includes [id] or [[path]]
  } = context;
  const value = await env.KV.get(params.state, { type: 'json' });
  return new Response(JSON.stringify(value));
}
