import { NextResponse } from 'next/server';
import { getProjectById } from '@/lib/projects-db';

// GET /api/projects/1
export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const projectId = Number(id);

  if (!Number.isInteger(projectId)) {
    return NextResponse.json({ error: 'Invalid id' }, { status: 400 });
  }

  const project = getProjectById(projectId);

  if (!project) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }

  return NextResponse.json(project);
}
