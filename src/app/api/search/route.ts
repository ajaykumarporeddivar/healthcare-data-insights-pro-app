import { HEALTHCARE_PROFESSIONALS } from '@/lib/data';

export async function GET({ request }: { request: Request }): Promise<Response> {
  const url = new URL(request.url);
  const q = url.searchParams.get('q');
  const type = url.searchParams.get('type');

  const searchResults = HEALTHCARE_PROFESSIONALS.filter((professional) => {
    const entityName = professional.name.toLowerCase();
    const entityTitle = professional.hospital.toLowerCase();
    const query = q?.toLowerCase();

    if (!q) {
      return true;
    }

    return entityName.includes(query) || entityTitle.includes(query);
  });

  const results = searchResults.slice(0, 20);

  return new Response(JSON.stringify({
    ok: true,
    data: {
      results,
      total: results.length,
      query: q || '',
    },
  }), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}