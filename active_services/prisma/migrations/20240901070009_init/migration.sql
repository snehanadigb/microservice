-- CreateTable
CREATE TABLE `ActivePlan` (
    `activeId` INTEGER NOT NULL AUTO_INCREMENT,
    `activeName` VARCHAR(191) NOT NULL,
    `activePrice` DOUBLE NOT NULL,

    PRIMARY KEY (`activeId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
