import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1684175234334 implements MigrationInterface {
    name = 'Default1684175234334'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`matchs\` (\`id\` int NOT NULL AUTO_INCREMENT, \`date\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, \`hostId\` int NULL, \`visitorId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`matchs\` ADD CONSTRAINT \`FK_29f74a4a36a1096b7f68ae65a00\` FOREIGN KEY (\`hostId\`) REFERENCES \`teams\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`matchs\` ADD CONSTRAINT \`FK_5d72275d275e665f1b63aeb6410\` FOREIGN KEY (\`visitorId\`) REFERENCES \`teams\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`matchs\` DROP FOREIGN KEY \`FK_5d72275d275e665f1b63aeb6410\``);
        await queryRunner.query(`ALTER TABLE \`matchs\` DROP FOREIGN KEY \`FK_29f74a4a36a1096b7f68ae65a00\``);
        await queryRunner.query(`DROP TABLE \`matchs\``);
    }

}
