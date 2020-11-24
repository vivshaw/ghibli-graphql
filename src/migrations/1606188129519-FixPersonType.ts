import { MigrationInterface, QueryRunner } from 'typeorm';

export class FixPersonType1606188129519 implements MigrationInterface {
  name = 'FixPersonType1606188129519';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "vehicle" DROP CONSTRAINT "FK_781ba8633ab0299bfc2456f5e49"`,
    );

    await queryRunner.query(`COMMENT ON COLUMN "vehicle"."pilotId" IS NULL`);

    await queryRunner.query(
      `ALTER TABLE "vehicle" DROP CONSTRAINT "REL_781ba8633ab0299bfc2456f5e4"`,
    );

    await queryRunner.query(`ALTER TABLE "person" DROP COLUMN "age"`);

    await queryRunner.query(
      `ALTER TABLE "person" ADD "age" character varying(30) NOT NULL`,
    );

    await queryRunner.query(
      `ALTER TABLE "vehicle"
      ADD CONSTRAINT "FK_781ba8633ab0299bfc2456f5e49"
      FOREIGN KEY ("pilotId") REFERENCES "person"("id")
      ON DELETE NO ACTION
      ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "vehicle" DROP CONSTRAINT "FK_781ba8633ab0299bfc2456f5e49"`,
    );

    await queryRunner.query(`ALTER TABLE "person" DROP COLUMN "age"`);

    await queryRunner.query(`ALTER TABLE "person" ADD "age" integer NOT NULL`);

    await queryRunner.query(
      `ALTER TABLE "vehicle" ADD CONSTRAINT "REL_781ba8633ab0299bfc2456f5e4" UNIQUE ("pilotId")`,
    );

    await queryRunner.query(`COMMENT ON COLUMN "vehicle"."pilotId" IS NULL`);

    await queryRunner.query(
      `ALTER TABLE "vehicle"
      ADD CONSTRAINT "FK_781ba8633ab0299bfc2456f5e49"
      FOREIGN KEY ("pilotId") REFERENCES "person"("id")
      ON DELETE NO ACTION
      ON UPDATE NO ACTION`,
    );
  }
}
