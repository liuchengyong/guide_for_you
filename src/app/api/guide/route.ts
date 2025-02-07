import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';
import { z } from 'zod';

// GET、POST、PUT、DELETE
export async function GET() {
    const navigations = await prisma.navigation.findMany();
    return NextResponse.json({
        code: 0,
        data: navigations,
    });
}

const createGuideSchema = z.object({
    title: z
        .string()
        .min(2, '标题长度不能小于2位')
        .max(20, '标题长度不能大于20位'),
    icon: z.string(),
    url: z.string(),
    order: z
        .number()
        .int('排序必须为整数')
        .min(0, '排序不能小于0')
        .max(10000, '排序不能大于10000'),
    description: z.string(),
});

export async function POST(req: Request) {
    try {
        const data = await req.json();
        console.log(data);
        const validatedData = createGuideSchema.parse(data);
        const user = await prisma.navigation.create({
            data: validatedData,
        });
        return NextResponse.json(user);
    } catch (error) {
        if (error instanceof Error) {
            console.log(error);
            return NextResponse.json({ error: error.message }, { status: 400 });
        }
    }
}
export async function PUT() {}
export async function DELETE() {}
