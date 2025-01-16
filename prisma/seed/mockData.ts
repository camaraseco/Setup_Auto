import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const splitSql = (sql: string) => {
  return sql.split(';').filter(content => content.trim() !== '')
}

async function main() {
  const sql = `

INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('ea0105cb-1213-4b32-8b87-16d2a664d955', '1Eli55@yahoo.com', 'Bob Builder', 'https://i.imgur.com/YfJQV5z.png?id=3', 'xyz567mno890', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('f9003b48-5b2a-46ad-8195-7763dda96fd2', '9Erich79@hotmail.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=11', 'inv789xyz012', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('a9e5e3c4-7e36-47f8-a732-d90e92a7070c', '17Marielle80@hotmail.com', 'Bob Builder', 'https://i.imgur.com/YfJQV5z.png?id=19', 'token345ghi678', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('270bab18-4614-4046-9ee1-366701d86582', '33Cleora.Wyman69@hotmail.com', 'Bob Builder', 'https://i.imgur.com/YfJQV5z.png?id=35', 'xyz567mno890', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('a0057931-9036-4bcf-934b-435d513f881a', '41Holly_Altenwerth54@hotmail.com', 'Bob Builder', 'https://i.imgur.com/YfJQV5z.png?id=43', 'xyz567mno890', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('2cca4e10-a7cc-411b-b63d-ff361debe1cf', '49Maxie_Frami@yahoo.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=51', 'invite901jkl234', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('c8a6b302-55b6-49a4-b54f-2e36d69ad27d', '57Toney14@gmail.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=59', 'invite901jkl234', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('6197b875-8d30-46fb-a66c-d2a4359bfc63', '65Ayla91@hotmail.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=67', 'invite901jkl234', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('7d3d83c1-d82e-4ad4-bc5b-bdee23024e1a', '73Mose_Tromp@yahoo.com', 'Trader Joe', 'https://i.imgur.com/YfJQV5z.png?id=75', 'token345ghi678', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');

INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('e4b45f5d-1b77-48d2-8426-7bf364224bac', 'DayTrade Solutions', 'https://i.imgur.com/YfJQV5z.png?id=82');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('5dabd8b8-1075-4ec6-861d-9eede5d9da4e', 'TradeMaster Inc.', 'https://i.imgur.com/YfJQV5z.png?id=85');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('3a309d24-e846-4c4a-ac08-e3a8e4c9adc1', 'DayTrade Solutions', 'https://i.imgur.com/YfJQV5z.png?id=88');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('6d905931-7180-4c00-a44e-cd72b12f63bc', 'ProfitMaximizers', 'https://i.imgur.com/YfJQV5z.png?id=91');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('576d2cf9-9b9e-449e-bcfd-02218c17048b', 'ProfitMaximizers', 'https://i.imgur.com/YfJQV5z.png?id=94');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('410017a9-a54b-43c0-b8d9-ba0f7ea3e02b', 'AlgoTrade Systems', 'https://i.imgur.com/YfJQV5z.png?id=97');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('e1acba79-e4fc-4fa7-9d7e-f16c8e9897b8', 'ProfitMaximizers', 'https://i.imgur.com/YfJQV5z.png?id=100');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('7ac84856-2094-4e50-9368-32a502553700', 'TradeMaster Inc.', 'https://i.imgur.com/YfJQV5z.png?id=103');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('dd9a173e-9e7e-4274-8e08-5eb8611055a0', 'MarketGurus', 'https://i.imgur.com/YfJQV5z.png?id=106');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('ddd13819-6621-494f-b438-c11fef54aadd', 'TradeMaster Inc.', 'https://i.imgur.com/YfJQV5z.png?id=109');

INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('15e6411d-ffbe-47a0-830e-df6606a5c1ec', 'Analyst', 'f9003b48-5b2a-46ad-8195-7763dda96fd2', 'ddd13819-6621-494f-b438-c11fef54aadd');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('3ce1e9f5-cc21-4032-b5ba-b37abc12a19a', 'Developer', '270bab18-4614-4046-9ee1-366701d86582', '576d2cf9-9b9e-449e-bcfd-02218c17048b');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('3644ff57-3884-4f51-91d4-d960e55c4616', 'Support Specialist', '6197b875-8d30-46fb-a66c-d2a4359bfc63', '6d905931-7180-4c00-a44e-cd72b12f63bc');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('040ab1c0-ae71-4048-9b6b-dcf496804934', 'Risk Manager', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'e1acba79-e4fc-4fa7-9d7e-f16c8e9897b8');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('bee168ba-aac1-423a-b446-8232b8906515', 'Analyst', 'c8a6b302-55b6-49a4-b54f-2e36d69ad27d', '6d905931-7180-4c00-a44e-cd72b12f63bc');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('ca7e623e-5b16-4f0c-adbe-d7370146945f', 'Trader', '7d3d83c1-d82e-4ad4-bc5b-bdee23024e1a', '410017a9-a54b-43c0-b8d9-ba0f7ea3e02b');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('d60be36b-5404-426d-aa3a-10dd18ec601e', 'Developer', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'e4b45f5d-1b77-48d2-8426-7bf364224bac');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('19ab43cd-1aaf-4324-aa4d-1384454518b5', 'Trader', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '410017a9-a54b-43c0-b8d9-ba0f7ea3e02b');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('fda4122d-5267-465e-a5ca-c066e30b37fb', 'Support Specialist', '7d3d83c1-d82e-4ad4-bc5b-bdee23024e1a', '410017a9-a54b-43c0-b8d9-ba0f7ea3e02b');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('2c5b9252-e708-4017-a8aa-1c9cba228194', 'Support Specialist', 'a9e5e3c4-7e36-47f8-a732-d90e92a7070c', 'ddd13819-6621-494f-b438-c11fef54aadd');

INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('3ac3ccb8-2f97-4684-8fa8-be05767435bd', 'eyJ1c2VySWQiOiI5ODc2NTQzMjEiLCJzdWIiOiJhdXRoIiwiZXhwIjoxNjMyNDg3MjAwfQ', 'a0057931-9036-4bcf-934b-435d513f881a');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('8582b25f-2ef0-4389-973b-20d5ba11d9aa', 'eyJ1c2VySWQiOiI0NTY3ODkwMTIzIiwic3ViIjoiYXV0aCIsImV4cCI6MTYzMjQ4NzIwMH0', '7d3d83c1-d82e-4ad4-bc5b-bdee23024e1a');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('b9d8b3e7-952d-4d41-81ad-885845f1836e', 'eyJ1c2VySWQiOiI0NTY3ODkwMTIzIiwic3ViIjoiYXV0aCIsImV4cCI6MTYzMjQ4NzIwMH0', 'f9003b48-5b2a-46ad-8195-7763dda96fd2');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('c1ab297a-1e9c-475b-b0f0-85e2aa9f742b', 'eyJ1c2VySWQiOiIxMjM0NTY3ODkwIiwic3ViIjoiYXV0aCIsImV4cCI6MTYzMjQ4NzIwMH0', 'a9e5e3c4-7e36-47f8-a732-d90e92a7070c');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('d4644ae5-f1d7-458c-b82a-36f801f55ff3', 'eyJ1c2VySWQiOiI5ODc2NTQzMjEiLCJzdWIiOiJhdXRoIiwiZXhwIjoxNjMyNDg3MjAwfQ', '2cca4e10-a7cc-411b-b63d-ff361debe1cf');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('22c9f15b-417b-4675-a656-424a0ac73463', 'eyJ1c2VySWQiOiI2NTQzMjE5ODc2Iiwic3ViIjoiYXV0aCIsImV4cCI6MTYzMjQ4NzIwMH0', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('3da737b3-c199-412a-bc70-c9c1d2ba18a7', 'eyJ1c2VySWQiOiIxMjM0NTY3ODkwIiwic3ViIjoiYXV0aCIsImV4cCI6MTYzMjQ4NzIwMH0', 'a0057931-9036-4bcf-934b-435d513f881a');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('99362dfa-b386-4cb7-9b44-5b448f60bc2c', 'eyJ1c2VySWQiOiI3ODkwMTIzNDU2Iiwic3ViIjoiYXV0aCIsImV4cCI6MTYzMjQ4NzIwMH0', 'f9003b48-5b2a-46ad-8195-7763dda96fd2');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('4097f99f-ce94-421f-96d6-655b7a758a94', 'eyJ1c2VySWQiOiI3ODkwMTIzNDU2Iiwic3ViIjoiYXV0aCIsImV4cCI6MTYzMjQ4NzIwMH0', 'a0057931-9036-4bcf-934b-435d513f881a');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('69136079-5bf8-4087-af89-99add9217b1d', 'eyJ1c2VySWQiOiI2NTQzMjE5ODc2Iiwic3ViIjoiYXV0aCIsImV4cCI6MTYzMjQ4NzIwMH0', 'a9e5e3c4-7e36-47f8-a732-d90e92a7070c');

INSERT INTO "BrokerConnection" ("id", "apiKey", "apiSecret", "exchangeName", "defaultLotSize", "status", "userId", "organizationId") VALUES ('2f6c3994-dac1-4921-8bd9-929432bb276e', 'z9y8x7w6v5u4t3s2r1q0', 'zxcvbn098765lkjhgf', 'Bittrex', '0.1', 'suspended', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'e4b45f5d-1b77-48d2-8426-7bf364224bac');
INSERT INTO "BrokerConnection" ("id", "apiKey", "apiSecret", "exchangeName", "defaultLotSize", "status", "userId", "organizationId") VALUES ('c4022068-d7e6-48da-8800-adc0dbcca941', 'p0o9i8u7y6t5r4e3w2q1', 'poiuyt098765mnbvcx', 'Coinbase', '1', 'closed', 'c8a6b302-55b6-49a4-b54f-2e36d69ad27d', 'ddd13819-6621-494f-b438-c11fef54aadd');
INSERT INTO "BrokerConnection" ("id", "apiKey", "apiSecret", "exchangeName", "defaultLotSize", "status", "userId", "organizationId") VALUES ('36a19481-b96d-442c-809f-70842d209955', 'l1k2j3h4g5f6d7s8a9z0', 'zxcvbn098765lkjhgf', 'Kraken', '1', 'suspended', 'f9003b48-5b2a-46ad-8195-7763dda96fd2', '6d905931-7180-4c00-a44e-cd72b12f63bc');
INSERT INTO "BrokerConnection" ("id", "apiKey", "apiSecret", "exchangeName", "defaultLotSize", "status", "userId", "organizationId") VALUES ('34817f53-bfa8-46e0-9775-c5c2f1dc45f2', 'p0o9i8u7y6t5r4e3w2q1', 'qwerty123456asdfgh', 'Kraken', '10', 'closed', 'f9003b48-5b2a-46ad-8195-7763dda96fd2', '576d2cf9-9b9e-449e-bcfd-02218c17048b');
INSERT INTO "BrokerConnection" ("id", "apiKey", "apiSecret", "exchangeName", "defaultLotSize", "status", "userId", "organizationId") VALUES ('1db59083-2be0-4078-a708-b7071434af13', 'z9y8x7w6v5u4t3s2r1q0', 'poiuyt098765mnbvcx', 'Bitfinex', '0.01', 'inactive', 'a9e5e3c4-7e36-47f8-a732-d90e92a7070c', 'e1acba79-e4fc-4fa7-9d7e-f16c8e9897b8');
INSERT INTO "BrokerConnection" ("id", "apiKey", "apiSecret", "exchangeName", "defaultLotSize", "status", "userId", "organizationId") VALUES ('e12aa947-d7b2-4f5c-9cc4-e45b28ff3da4', 'z9y8x7w6v5u4t3s2r1q0', 'zxcvbn098765lkjhgf', 'Binance', '0.1', 'pending', 'a0057931-9036-4bcf-934b-435d513f881a', '5dabd8b8-1075-4ec6-861d-9eede5d9da4e');
INSERT INTO "BrokerConnection" ("id", "apiKey", "apiSecret", "exchangeName", "defaultLotSize", "status", "userId", "organizationId") VALUES ('49dc3d19-b818-4ff1-8501-5e5dafc63263', 'p0o9i8u7y6t5r4e3w2q1', 'poiuyt098765mnbvcx', 'Coinbase', '1', 'active', 'f9003b48-5b2a-46ad-8195-7763dda96fd2', 'ddd13819-6621-494f-b438-c11fef54aadd');
INSERT INTO "BrokerConnection" ("id", "apiKey", "apiSecret", "exchangeName", "defaultLotSize", "status", "userId", "organizationId") VALUES ('10430bbd-3792-4c0a-b34f-43e06a9aa641', 'l1k2j3h4g5f6d7s8a9z0', 'poiuyt098765mnbvcx', 'Binance', '5', 'pending', 'f9003b48-5b2a-46ad-8195-7763dda96fd2', '576d2cf9-9b9e-449e-bcfd-02218c17048b');
INSERT INTO "BrokerConnection" ("id", "apiKey", "apiSecret", "exchangeName", "defaultLotSize", "status", "userId", "organizationId") VALUES ('a48e479d-c7c3-4a8c-98f9-22512fa3a0d1', 'p0o9i8u7y6t5r4e3w2q1', 'lkjhg098765zxcvbnm', 'Binance', '0.1', 'inactive', '270bab18-4614-4046-9ee1-366701d86582', 'e1acba79-e4fc-4fa7-9d7e-f16c8e9897b8');
INSERT INTO "BrokerConnection" ("id", "apiKey", "apiSecret", "exchangeName", "defaultLotSize", "status", "userId", "organizationId") VALUES ('2f95e372-1698-44f6-a594-1e21e5cdfb48', 'm9n8b7v6c5x4z3a2s1d0', 'zxcvbn098765lkjhgf', 'Bittrex', '0.01', 'closed', '7d3d83c1-d82e-4ad4-bc5b-bdee23024e1a', '7ac84856-2094-4e50-9368-32a502553700');

INSERT INTO "TradingSetup" ("id", "emaShort", "emaLong", "rsiPeriod", "volumeThreshold", "stopLoss", "takeProfit", "riskPercentage", "isActive", "userId", "organizationId") VALUES ('7e71c298-3a3f-42da-80c8-8b53c6bbadbc', 634, 752, 292, '3000', '0.9', '1.8', '2', false, '2cca4e10-a7cc-411b-b63d-ff361debe1cf', '7ac84856-2094-4e50-9368-32a502553700');
INSERT INTO "TradingSetup" ("id", "emaShort", "emaLong", "rsiPeriod", "volumeThreshold", "stopLoss", "takeProfit", "riskPercentage", "isActive", "userId", "organizationId") VALUES ('4d668fc5-85ec-4549-a031-a8efb472d7e4', 974, 860, 843, '2000', '0.9', '1.2', '2', false, 'f9003b48-5b2a-46ad-8195-7763dda96fd2', '576d2cf9-9b9e-449e-bcfd-02218c17048b');
INSERT INTO "TradingSetup" ("id", "emaShort", "emaLong", "rsiPeriod", "volumeThreshold", "stopLoss", "takeProfit", "riskPercentage", "isActive", "userId", "organizationId") VALUES ('6ee9f228-0f5b-47e8-a387-3f52b5b0d04f', 507, 160, 25, '1000', '0.9', '1.0', '1.5', false, 'c8a6b302-55b6-49a4-b54f-2e36d69ad27d', 'dd9a173e-9e7e-4274-8e08-5eb8611055a0');
INSERT INTO "TradingSetup" ("id", "emaShort", "emaLong", "rsiPeriod", "volumeThreshold", "stopLoss", "takeProfit", "riskPercentage", "isActive", "userId", "organizationId") VALUES ('560f3f2e-afe7-4583-a0a6-62f1ef257e5f', 764, 134, 758, '3000', '0.9', '1.4', '3', true, '270bab18-4614-4046-9ee1-366701d86582', '6d905931-7180-4c00-a44e-cd72b12f63bc');
INSERT INTO "TradingSetup" ("id", "emaShort", "emaLong", "rsiPeriod", "volumeThreshold", "stopLoss", "takeProfit", "riskPercentage", "isActive", "userId", "organizationId") VALUES ('4820e136-8742-4491-94be-a24b36cad358', 214, 318, 929, '2000', '0.8', '1.2', '2', false, 'ea0105cb-1213-4b32-8b87-16d2a664d955', 'dd9a173e-9e7e-4274-8e08-5eb8611055a0');
INSERT INTO "TradingSetup" ("id", "emaShort", "emaLong", "rsiPeriod", "volumeThreshold", "stopLoss", "takeProfit", "riskPercentage", "isActive", "userId", "organizationId") VALUES ('994bd6b6-e3c3-4299-b35f-32eee632c528', 566, 143, 969, '3000', '0.7', '1.6', '2', true, 'c8a6b302-55b6-49a4-b54f-2e36d69ad27d', 'ddd13819-6621-494f-b438-c11fef54aadd');
INSERT INTO "TradingSetup" ("id", "emaShort", "emaLong", "rsiPeriod", "volumeThreshold", "stopLoss", "takeProfit", "riskPercentage", "isActive", "userId", "organizationId") VALUES ('180253d9-3e5f-4657-9c00-14b2b5bae325', 844, 973, 141, '1000', '0.8', '1.8', '2.5', true, 'c8a6b302-55b6-49a4-b54f-2e36d69ad27d', '7ac84856-2094-4e50-9368-32a502553700');
INSERT INTO "TradingSetup" ("id", "emaShort", "emaLong", "rsiPeriod", "volumeThreshold", "stopLoss", "takeProfit", "riskPercentage", "isActive", "userId", "organizationId") VALUES ('8246743f-e2f0-4301-9dd3-5f948ea7b1bf', 599, 845, 823, '1000', '0.9', '1.6', '1.5', true, '2cca4e10-a7cc-411b-b63d-ff361debe1cf', '3a309d24-e846-4c4a-ac08-e3a8e4c9adc1');
INSERT INTO "TradingSetup" ("id", "emaShort", "emaLong", "rsiPeriod", "volumeThreshold", "stopLoss", "takeProfit", "riskPercentage", "isActive", "userId", "organizationId") VALUES ('ac9ee00e-2944-422e-9ee1-9606b0203431', 583, 630, 392, '1500', '0.8', '1.4', '1', true, '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'e4b45f5d-1b77-48d2-8426-7bf364224bac');
INSERT INTO "TradingSetup" ("id", "emaShort", "emaLong", "rsiPeriod", "volumeThreshold", "stopLoss", "takeProfit", "riskPercentage", "isActive", "userId", "organizationId") VALUES ('072adee7-bebe-436b-b79e-7904bf82eea9', 35, 282, 978, '2000', '0.5', '1.6', '2', false, 'a9e5e3c4-7e36-47f8-a732-d90e92a7070c', 'e4b45f5d-1b77-48d2-8426-7bf364224bac');

INSERT INTO "Trade" ("id", "symbol", "entryPrice", "exitPrice", "positionSize", "type", "status", "profit", "stopLoss", "takeProfit", "userId", "organizationId") VALUES ('b9a19a33-8766-4322-b26a-19a8a69ce831', 'AAPL', '720.10', '152.00', '50', 'buy', 'closed', '1250.00', '3350.00', '154.00', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '5dabd8b8-1075-4ec6-861d-9eede5d9da4e');
INSERT INTO "Trade" ("id", "symbol", "entryPrice", "exitPrice", "positionSize", "type", "status", "profit", "stopLoss", "takeProfit", "userId", "organizationId") VALUES ('6e88581c-71c3-4143-86f8-d143a1f22f41', 'AMZN', '3400.00', '300.00', '30', 'sell', 'open', '500.00', '148.00', '154.00', 'a9e5e3c4-7e36-47f8-a732-d90e92a7070c', 'e4b45f5d-1b77-48d2-8426-7bf364224bac');
INSERT INTO "Trade" ("id", "symbol", "entryPrice", "exitPrice", "positionSize", "type", "status", "profit", "stopLoss", "takeProfit", "userId", "organizationId") VALUES ('ee8549c2-36db-448d-be2a-dae8cd082eb9', 'MSFT', '720.10', '300.00', '30', 'buy', 'open', '750.00', '2775.00', '154.00', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'ddd13819-6621-494f-b438-c11fef54aadd');
INSERT INTO "Trade" ("id", "symbol", "entryPrice", "exitPrice", "positionSize", "type", "status", "profit", "stopLoss", "takeProfit", "userId", "organizationId") VALUES ('63167403-9f8e-4767-b740-3171debd9f01', 'AMZN', '720.10', '2825.00', '30', 'buy', 'closed', '1500.00', '290.00', '3500.00', 'a0057931-9036-4bcf-934b-435d513f881a', '410017a9-a54b-43c0-b8d9-ba0f7ea3e02b');
INSERT INTO "Trade" ("id", "symbol", "entryPrice", "exitPrice", "positionSize", "type", "status", "profit", "stopLoss", "takeProfit", "userId", "organizationId") VALUES ('836b5d70-1610-40be-bdeb-9f986327ec42', 'TSLA', '3400.00', '2825.00', '75', 'sell', 'open', '1250.00', '148.00', '2850.00', '2cca4e10-a7cc-411b-b63d-ff361debe1cf', '576d2cf9-9b9e-449e-bcfd-02218c17048b');
INSERT INTO "Trade" ("id", "symbol", "entryPrice", "exitPrice", "positionSize", "type", "status", "profit", "stopLoss", "takeProfit", "userId", "organizationId") VALUES ('62a07c55-c1cc-42b4-8612-6784048b5a60', 'MSFT', '720.10', '2825.00', '120', 'sell', 'closed', '500.00', '148.00', '740.00', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '576d2cf9-9b9e-449e-bcfd-02218c17048b');
INSERT INTO "Trade" ("id", "symbol", "entryPrice", "exitPrice", "positionSize", "type", "status", "profit", "stopLoss", "takeProfit", "userId", "organizationId") VALUES ('d683c383-ab18-41df-96a8-1e270f1cdd8c', 'MSFT', '150.25', '300.00', '30', 'buy', 'closed', '750.00', '290.00', '3500.00', '7d3d83c1-d82e-4ad4-bc5b-bdee23024e1a', '576d2cf9-9b9e-449e-bcfd-02218c17048b');
INSERT INTO "Trade" ("id", "symbol", "entryPrice", "exitPrice", "positionSize", "type", "status", "profit", "stopLoss", "takeProfit", "userId", "organizationId") VALUES ('7d702e5f-cb36-4590-909e-99b0ae2d7cf0', 'TSLA', '2800.50', '2825.00', '100', 'sell', 'closed', '175.00', '290.00', '2850.00', 'ea0105cb-1213-4b32-8b87-16d2a664d955', '576d2cf9-9b9e-449e-bcfd-02218c17048b');
INSERT INTO "Trade" ("id", "symbol", "entryPrice", "exitPrice", "positionSize", "type", "status", "profit", "stopLoss", "takeProfit", "userId", "organizationId") VALUES ('dcd5bee8-bea3-4b37-989e-148f4aff4bf5', 'AAPL', '720.10', '3450.00', '120', 'buy', 'open', '750.00', '290.00', '154.00', '7d3d83c1-d82e-4ad4-bc5b-bdee23024e1a', '7ac84856-2094-4e50-9368-32a502553700');
INSERT INTO "Trade" ("id", "symbol", "entryPrice", "exitPrice", "positionSize", "type", "status", "profit", "stopLoss", "takeProfit", "userId", "organizationId") VALUES ('e272829e-ce40-4243-9777-cd6e389b2a4b', 'AMZN', '150.25', '152.00', '50', 'buy', 'open', '175.00', '3350.00', '154.00', 'ea0105cb-1213-4b32-8b87-16d2a664d955', '6d905931-7180-4c00-a44e-cd72b12f63bc');

INSERT INTO "NotificationSetting" ("id", "emailEnabled", "tradeOpenAlert", "tradeCloseAlert", "dailyReportEnabled", "emailAddress", "userId", "organizationId") VALUES ('af9fe949-81a5-4cbf-a1d3-28105bee083d', true, true, true, true, '405Carlotta_Kunde@yahoo.com', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '5dabd8b8-1075-4ec6-861d-9eede5d9da4e');
INSERT INTO "NotificationSetting" ("id", "emailEnabled", "tradeOpenAlert", "tradeCloseAlert", "dailyReportEnabled", "emailAddress", "userId", "organizationId") VALUES ('268adfe6-53c9-47cf-bf5e-39a69d474cab', false, true, false, true, '411Jessy61@gmail.com', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'ddd13819-6621-494f-b438-c11fef54aadd');
INSERT INTO "NotificationSetting" ("id", "emailEnabled", "tradeOpenAlert", "tradeCloseAlert", "dailyReportEnabled", "emailAddress", "userId", "organizationId") VALUES ('f584cf66-5a7a-469c-9553-0d742a9a7d60', true, true, true, false, '417Rhea.Terry23@hotmail.com', 'f9003b48-5b2a-46ad-8195-7763dda96fd2', 'ddd13819-6621-494f-b438-c11fef54aadd');
INSERT INTO "NotificationSetting" ("id", "emailEnabled", "tradeOpenAlert", "tradeCloseAlert", "dailyReportEnabled", "emailAddress", "userId", "organizationId") VALUES ('9b9e0192-2e43-4a49-b970-5132d9cb1a9d', true, false, false, true, '423Brooklyn_Kling@gmail.com', 'c8a6b302-55b6-49a4-b54f-2e36d69ad27d', 'e4b45f5d-1b77-48d2-8426-7bf364224bac');
INSERT INTO "NotificationSetting" ("id", "emailEnabled", "tradeOpenAlert", "tradeCloseAlert", "dailyReportEnabled", "emailAddress", "userId", "organizationId") VALUES ('50c5131e-907d-4a1c-b569-1dac6cb03815', true, false, false, false, '429Devante.McLaughlin74@hotmail.com', 'ea0105cb-1213-4b32-8b87-16d2a664d955', '7ac84856-2094-4e50-9368-32a502553700');
INSERT INTO "NotificationSetting" ("id", "emailEnabled", "tradeOpenAlert", "tradeCloseAlert", "dailyReportEnabled", "emailAddress", "userId", "organizationId") VALUES ('8597babc-ba3a-4b02-88c2-f58b2ec6054e', true, false, true, true, '435Alejandra.Funk@hotmail.com', '270bab18-4614-4046-9ee1-366701d86582', 'e1acba79-e4fc-4fa7-9d7e-f16c8e9897b8');
INSERT INTO "NotificationSetting" ("id", "emailEnabled", "tradeOpenAlert", "tradeCloseAlert", "dailyReportEnabled", "emailAddress", "userId", "organizationId") VALUES ('15493165-165d-4b1f-b81c-186286ce5e89', false, true, true, false, '441Lia.Breitenberg28@gmail.com', '2cca4e10-a7cc-411b-b63d-ff361debe1cf', 'ddd13819-6621-494f-b438-c11fef54aadd');
INSERT INTO "NotificationSetting" ("id", "emailEnabled", "tradeOpenAlert", "tradeCloseAlert", "dailyReportEnabled", "emailAddress", "userId", "organizationId") VALUES ('1e6b312d-ac1f-4390-a9d7-adca141de87e', false, false, true, false, '447Logan.Bradtke53@yahoo.com', 'c8a6b302-55b6-49a4-b54f-2e36d69ad27d', '3a309d24-e846-4c4a-ac08-e3a8e4c9adc1');
INSERT INTO "NotificationSetting" ("id", "emailEnabled", "tradeOpenAlert", "tradeCloseAlert", "dailyReportEnabled", "emailAddress", "userId", "organizationId") VALUES ('5f50e530-16fb-4085-b6f2-7adbbaffdbe4', true, true, false, false, '453Loyal.Schinner-Ullrich@hotmail.com', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '5dabd8b8-1075-4ec6-861d-9eede5d9da4e');
INSERT INTO "NotificationSetting" ("id", "emailEnabled", "tradeOpenAlert", "tradeCloseAlert", "dailyReportEnabled", "emailAddress", "userId", "organizationId") VALUES ('0b002125-f885-4025-9823-761e8cd4f867', true, false, false, true, '459Vada_Morar@gmail.com', '270bab18-4614-4046-9ee1-366701d86582', '7ac84856-2094-4e50-9368-32a502553700');

  `

  const sqls = splitSql(sql)

  for (const sql of sqls) {
    try {
      await prisma.$executeRawUnsafe(`${sql}`)
    } catch (error) {
      console.log(`Could not insert SQL: ${error.message}`)
    }
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async error => {
    console.error(error)
    await prisma.$disconnect()
    process.exit(1)
  })
