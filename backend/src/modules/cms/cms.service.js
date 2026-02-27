import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getCmsContent = async (key) => {
    return await prisma.cmsContent.findUnique({
        where: { key }
    });
};

export const upsertCmsContent = async (key, data) => {
    return await prisma.cmsContent.upsert({
        where: { key },
        update: { data },
        create: { key, data }
    });
};
