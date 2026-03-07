import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const { path } = await request.json();

        if (path) {
            revalidatePath(path);
            return NextResponse.json({ revalidated: true, now: Date.now(), path });
        }

        // Default revalidate home
        revalidatePath('/');
        return NextResponse.json({ revalidated: true, now: Date.now() });
    } catch (err) {
        return NextResponse.json({ message: 'Error revalidating', error: err.message }, { status: 500 });
    }
}
