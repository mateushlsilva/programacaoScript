import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1683563391561 implements MigrationInterface {
    name = 'Default1683563391561'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`matches\` (\`id\` int NOT NULL AUTO_INCREMENT, \`date\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`idhost\` int NULL, \`idvisitor\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`matches\` ADD CONSTRAINT \`FK_7d805385544339d0fb10f482a89\` FOREIGN KEY (\`idhost\`) REFERENCES \`teams\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`matches\` ADD CONSTRAINT \`FK_50a08ea229c0f24e3e8b015c3c6\` FOREIGN KEY (\`idvisitor\`) REFERENCES \`teams\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`matches\` DROP FOREIGN KEY \`FK_50a08ea229c0f24e3e8b015c3c6\``);
        await queryRunner.query(`ALTER TABLE \`matches\` DROP FOREIGN KEY \`FK_7d805385544339d0fb10f482a89\``);
        await queryRunner.query(`DROP TABLE \`matches\``);
    }

}
