import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
    console.log('🌱 Seeding database...');

    // Clear existing products
    await prisma.product.deleteMany();

    const products = [
        {
            name: "The Midnight Tuxedo",
            description: "Premium velvet finish midnight blue tuxedo for elite gatherings.",
            price: 45000,
            category: "Tuxedos",
            images: ["https://images.unsplash.com/photo-1594932224011-04504ce58606?q=80&w=2000&auto=format&fit=crop"],
            colors: ["Midnight Blue", "Classic Black"],
            sizes: ["S", "M", "L", "XL"],
            isActive: true,
            displayLocations: ["Essential Collection", "HERO", "LATEST"]
        },
        {
            name: "Saharian Sand Blended Suit",
            description: "Lightweight linen-wool blend suit for summer weddings.",
            price: 32000,
            category: "Suits",
            images: ["https://images.unsplash.com/photo-1593032465175-481ac7f401a0?q=80&w=2000&auto=format&fit=crop"],
            colors: ["Sand", "Beige"],
            sizes: ["M", "L", "XL"],
            isActive: true,
            displayLocations: ["Essential Collection", "TRENDING"]
        },
        {
            name: "Royal Ivory Sherwani",
            description: "Hand-embroidered ivory sherwani with gold zardosi work.",
            price: 85000,
            category: "Ethic Wear",
            images: ["https://images.unsplash.com/photo-1598414440375-9e693998967b?q=80&w=2000&auto=format&fit=crop"],
            colors: ["Ivory", "Cream"],
            sizes: ["L", "XL"],
            isActive: true,
            displayLocations: ["Essential Collection", "FEATURED"]
        }
    ];

    for (const product of products) {
        await prisma.product.create({ data: product });
    }

    console.log('✅ Seeding complete!');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
