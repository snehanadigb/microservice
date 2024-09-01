-- CreateTable
CREATE TABLE `Plan` (
    `planId` INTEGER NOT NULL AUTO_INCREMENT,
    `planName` VARCHAR(191) NOT NULL,
    `price` DOUBLE NOT NULL,

    PRIMARY KEY (`planId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
