import { MigrationInterface, QueryRunner } from 'typeorm';

export class LengthenSpeciesColorFields1606191118834
  implements MigrationInterface {
  name = 'LengthenSpeciesColorFields1606191118834';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "species" DROP COLUMN "eye_colors"`);
    await queryRunner.query(
      `ALTER TABLE "species" ADD "eye_colors" character varying(60) NOT NULL`,
    );
    await queryRunner.query(`ALTER TABLE "species" DROP COLUMN "hair_colors"`);
    await queryRunner.query(
      `ALTER TABLE "species" ADD "hair_colors" character varying(60) NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "species" DROP COLUMN "hair_colors"`);
    await queryRunner.query(
      `ALTER TABLE "species" ADD "hair_colors" character varying(30) NOT NULL`,
    );
    await queryRunner.query(`ALTER TABLE "species" DROP COLUMN "eye_colors"`);
    await queryRunner.query(
      `ALTER TABLE "species" ADD "eye_colors" character varying(30) NOT NULL`,
    );
  }
}
