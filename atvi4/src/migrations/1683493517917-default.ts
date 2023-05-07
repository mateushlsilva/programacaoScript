import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1683493517917 implements MigrationInterface {
    name = 'Default1683493517917'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`teams\` ADD UNIQUE INDEX \`IDX_48c0c32e6247a2de155baeaf98\` (\`name\`)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`teams\` DROP INDEX \`IDX_48c0c32e6247a2de155baeaf98\``);
    }

}
