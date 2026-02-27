import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
    console.log('Seeding categories from existing products...');

    // Get all unique category strings from existing products
    const products = await prisma.product.findMany({
        select: { category: true }
    });

    const uniqueCategories = [...new Set(products.map(p => p.category).filter(Boolean))];

    for (const catName of uniqueCategories) {
        const slug = catName.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');

        await prisma.category.upsert({
            where: { name: catName },
            update: {},
            create: {
                name: catName,
                slug: slug,
                isActive: true
            }
        });
    }

    // Update products to link to Category
    const allCategories = await prisma.category.findMany();
    for (const cat of allCategories) {
        await prisma.product.updateMany({
            where: { category: cat.name },
            data: { categoryId: cat.id }
        });
    }

    console.log('Seed completed successfully.');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
