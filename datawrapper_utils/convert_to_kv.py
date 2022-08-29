import json


# This is just to convert the output from main.py to
# a format that Cloudflare Workers KV can import in bulk.

# $ npx wrangler kv:bulk put --binding KV --preview false  ./output_kv.json
# $ npx wrangler kv:bulk put --binding KV --preview  ./output_kv.json
if __name__ == '__main__':
    with open("./output.json", 'r') as f:
        json_data = json.loads(f.read())

    output_kv = []
    for state in json_data:
        output_kv.append({"key": state, "value": json.dumps(json_data[state])})
    with open('./output_kv.json', 'w') as f:
        json.dump(output_kv, f)

