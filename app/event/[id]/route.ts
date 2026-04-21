import { redirect } from 'next/navigation';

const APP_STORE_URL = 'https://apps.apple.com/us/app/citydogs/id6761141597';

export async function GET() {
  redirect(APP_STORE_URL);
}
