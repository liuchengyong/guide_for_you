-- CreateTable
CREATE TABLE "t_navigation" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "icon" TEXT,
    "url" TEXT,
    "order" INTEGER NOT NULL,
    "parentId" INTEGER,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "t_navigation_pkey" PRIMARY KEY ("id")
);
