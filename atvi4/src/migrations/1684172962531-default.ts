import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1684172962531 implements MigrationInterface {
    name = 'Default1684172962531'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`matchs\` (\`id\` int NOT NULL AUTO_INCREMENT, \`date\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, \`idhost\` int NULL, \`idvisitor\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`matchs\` ADD CONSTRAINT \`fk_host_id\` FOREIGN KEY (\`idhost\`) REFERENCES \`teams\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`matchs\` ADD CONSTRAINT \`fk_visitor_id\` FOREIGN KEY (\`idvisitor\`) REFERENCES \`teams\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`matchs\` DROP FOREIGN KEY \`fk_visitor_id\``);
        await queryRunner.query(`ALTER TABLE \`matchs\` DROP FOREIGN KEY \`fk_host_id\``);
        await queryRunner.query(`DROP TABLE \`matchs\``);
    }

}
