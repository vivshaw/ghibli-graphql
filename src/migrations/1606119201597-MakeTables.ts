import { MigrationInterface, QueryRunner } from 'typeorm';

export class MakeTables1606119201597 implements MigrationInterface {
  name = 'MakeTables1606119201597';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "species"
      (
          "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
          "name" character varying(500) NOT NULL,
          "classification" text NOT NULL,
          "eye_colors" character varying(30) NOT NULL,
          "hair_colors" character varying(30) NOT NULL,
          CONSTRAINT "PK_ae6a87f2423ba6c25dc43c32770" PRIMARY KEY ("id")
      )`,
    );

    await queryRunner.query(
      `CREATE TABLE "person"
      (
          "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
          "name" character varying(500) NOT NULL,
          "gender" text NOT NULL,
          "age" integer NOT NULL,
          "eye_color" character varying(30) NOT NULL,
          "hair_color" character varying(30) NOT NULL,
          "speciesId" uuid,
          CONSTRAINT "PK_5fdaf670315c4b7e70cce85daa3" PRIMARY KEY ("id")
      )`,
    );

    await queryRunner.query(
      `CREATE TABLE "location"
      (
          "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
          "name" character varying(500) NOT NULL,
          "climate" character varying(30) NOT NULL,
          "terrain" character varying(30) NOT NULL,
          "surface_water" integer NOT NULL,
          CONSTRAINT "PK_876d7bdba03c72251ec4c2dc827" PRIMARY KEY ("id")
      )`,
    );

    await queryRunner.query(
      `CREATE TABLE "vehicle"
      (
          "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
          "name" character varying(500) NOT NULL,
          "description" text NOT NULL,
          "vehicle_class" character varying(20) NOT NULL,
          "length" integer NOT NULL, "pilotId" uuid,
          "filmId" uuid,
          CONSTRAINT "REL_781ba8633ab0299bfc2456f5e4" UNIQUE ("pilotId"),
          CONSTRAINT "PK_187fa17ba39d367e5604b3d1ec9" PRIMARY KEY ("id")
      )`,
    );

    await queryRunner.query(
      `CREATE TABLE "film"
      (
          "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
          "title" character varying(500) NOT NULL,
          "description" text NOT NULL,
          "director" character varying(60) NOT NULL,
          "producer" character varying(60) NOT NULL,
          "release_date" integer NOT NULL,
          "rt_score" integer NOT NULL,
          CONSTRAINT "PK_37ec0ffe0011ccbe438a65e3c6e" PRIMARY KEY ("id")
      )`,
    );

    await queryRunner.query(
      `ALTER TABLE "person"
      ADD CONSTRAINT "FK_2105981d80de1cc94cabbee37a4"
      FOREIGN KEY ("speciesId") REFERENCES "species"("id")
      ON DELETE NO ACTION
      ON UPDATE NO ACTION`,
    );

    await queryRunner.query(
      `ALTER TABLE "vehicle"
      ADD CONSTRAINT "FK_781ba8633ab0299bfc2456f5e49"
      FOREIGN KEY ("pilotId") REFERENCES "person"("id")
      ON DELETE NO ACTION
      ON UPDATE NO ACTION`,
    );

    await queryRunner.query(
      `ALTER TABLE "vehicle"
      ADD CONSTRAINT "FK_970ad9b519e99d84a8962860528"
      FOREIGN KEY ("filmId") REFERENCES "film"("id")
      ON DELETE NO ACTION
      ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "vehicle" DROP CONSTRAINT "FK_970ad9b519e99d84a8962860528"`,
    );
    await queryRunner.query(
      `ALTER TABLE "vehicle" DROP CONSTRAINT "FK_781ba8633ab0299bfc2456f5e49"`,
    );
    await queryRunner.query(
      `ALTER TABLE "person" DROP CONSTRAINT "FK_2105981d80de1cc94cabbee37a4"`,
    );
    await queryRunner.query(`DROP TABLE "film"`);
    await queryRunner.query(`DROP TABLE "vehicle"`);
    await queryRunner.query(`DROP TABLE "location"`);
    await queryRunner.query(`DROP TABLE "person"`);
    await queryRunner.query(`DROP TABLE "species"`);
  }
}
