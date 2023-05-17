import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1684175351684 implements MigrationInterface {
    name = 'Default1684175351684'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`matchs\` DROP FOREIGN KEY \`FK_29f74a4a36a1096b7f68ae65a00\``);
        await queryRunner.query(`ALTER TABLE \`matchs\` DROP FOREIGN KEY \`FK_5d72275d275e665f1b63aeb6410\``);
        await queryRunner.query(`ALTER TABLE \`matchs\` DROP COLUMN \`hostId\``);
        await queryRunner.query(`ALTER TABLE \`matchs\` DROP COLUMN \`visitorId\``);
        await queryRunner.query(`ALTER TABLE \`matchs\` ADD \`idhost\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`matchs\` ADD \`idvisitor\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`matchs\` ADD CONSTRAINT \`fk_host_id\` FOREIGN KEY (\`idhost\`) REFERENCES \`teams\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`matchs\` ADD CONSTRAINT \`fk_visitor_id\` FOREIGN KEY (\`idvisitor\`) REFERENCES \`teams\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`matchs\` DROP FOREIGN KEY \`fk_visitor_id\``);
        await queryRunner.query(`ALTER TABLE \`matchs\` DROP FOREIGN KEY \`fk_host_id\``);
        await queryRunner.query(`ALTER TABLE \`matchs\` DROP COLUMN \`idvisitor\``);
        await queryRunner.query(`ALTER TABLE \`matchs\` DROP COLUMN \`idhost\``);
        await queryRunner.query(`ALTER TABLE \`matchs\` ADD \`visitorId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`matchs\` ADD \`hostId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`matchs\` ADD CONSTRAINT \`FK_5d72275d275e665f1b63aeb6410\` FOREIGN KEY (\`visitorId\`) REFERENCES \`teams\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`matchs\` ADD CONSTRAINT \`FK_29f74a4a36a1096b7f68ae65a00\` FOREIGN KEY (\`hostId\`) REFERENCES \`teams\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

}
