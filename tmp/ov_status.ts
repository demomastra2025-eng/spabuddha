import crypto from 'node:crypto';

const apiKey = '7110b98f-b3f4-4b4f-b7ef-af71278a657d';
const secret = '1ebd8dfbb1b1001a6f07f8a6aa2ea8aded02d0a2209a30a2ade7df5f6e44e2d2';
const payload = { payment_id: '127780234236885330' };

function encode(payload: unknown) {
  return Buffer.from(JSON.stringify(payload), 'utf8').toString('base64');
}

function signData(encodedData: string, secret: string) {
  return crypto.createHmac('sha512', secret).update(encodedData).digest('hex');
}

async function main() {
  const data = encode(payload);
  const sign = signData(data, secret);
  const token = Buffer.from(apiKey, 'utf8').toString('base64');
  const url = 'https://api.paysage.kz/payment/status';

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ data, sign }),
  });

  const text = await res.text();
  console.log('status', res.status);
  console.log(text);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
