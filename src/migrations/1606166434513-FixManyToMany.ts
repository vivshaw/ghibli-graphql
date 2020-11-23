import { MigrationInterface, QueryRunner } from 'typeorm';

export class FixManyToMany1606166434513 implements MigrationInterface {
  name = 'FixManyToMany1606166434513';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "location_residents_person"
      (
        "locationId" uuid NOT NULL,
        "personId" uuid NOT NULL,
        CONSTRAINT "PK_0053f6d283d3ea01ec1a63e3ce0" PRIMARY KEY ("locationId", "personId")
      )`,
    );

    await queryRunner.query(
      `CREATE INDEX "IDX_2cd22b9ab52b611de616c76f17" ON "location_residents_person" ("locationId") `,
    );

    await queryRunner.query(
      `CREATE INDEX "IDX_7a0418df5a354d3a3f7ba4e3ff" ON "location_residents_person" ("personId") `,
    );

    await queryRunner.query(
      `CREATE TABLE "film_people_person"
      (
        "filmId" uuid NOT NULL,
        "personId" uuid NOT NULL,
        CONSTRAINT "PK_148b7796b598c942b5da5dc73a8" PRIMARY KEY ("filmId", "personId")
      )`,
    );

    await queryRunner.query(
      `CREATE INDEX "IDX_b2d11db1ffb3745f18b59af4d0" ON "film_people_person" ("filmId") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_3a8e80dbf6c14a415d0b617218" ON "film_people_person" ("personId") `,
    );
    await queryRunner.query(
      `CREATE TABLE "film_location_location"
      (
        "filmId" uuid NOT NULL,
        "locationId" uuid NOT NULL,
        CONSTRAINT "PK_27e6278f3b66d686554b1eded37" PRIMARY KEY ("filmId", "locationId")
      )`,
    );

    await queryRunner.query(
      `CREATE INDEX "IDX_8bc8b108983b4e72e44f9d034c" ON "film_location_location" ("filmId") `,
    );

    await queryRunner.query(
      `CREATE INDEX "IDX_fa0228f23151dfda69261fbd6e" ON "film_location_location" ("locationId") `,
    );

    await queryRunner.query(
      `ALTER TABLE "location_residents_person"
      ADD CONSTRAINT "FK_2cd22b9ab52b611de616c76f17b"
      FOREIGN KEY ("locationId") REFERENCES "location"("id")
      ON DELETE CASCADE
      ON UPDATE NO ACTION`,
    );

    await queryRunner.query(
      `ALTER TABLE "location_residents_person"
      ADD CONSTRAINT "FK_7a0418df5a354d3a3f7ba4e3ff5"
      FOREIGN KEY ("personId") REFERENCES "person"("id")
      ON DELETE CASCADE
      ON UPDATE NO ACTION`,
    );

    await queryRunner.query(
      `ALTER TABLE "film_people_person"
      ADD CONSTRAINT "FK_b2d11db1ffb3745f18b59af4d0a"
      FOREIGN KEY ("filmId") REFERENCES "film"("id")
      ON DELETE CASCADE
      ON UPDATE NO ACTION`,
    );

    await queryRunner.query(
      `ALTER TABLE "film_people_person"
      ADD CONSTRAINT "FK_3a8e80dbf6c14a415d0b6172187"
      FOREIGN KEY ("personId") REFERENCES "person"("id")
      ON DELETE CASCADE
      ON UPDATE NO ACTION`,
    );

    await queryRunner.query(
      `ALTER TABLE "film_location_location"
      ADD CONSTRAINT "FK_8bc8b108983b4e72e44f9d034c1"
      FOREIGN KEY ("filmId") REFERENCES "film"("id")
      ON DELETE CASCADE
      ON UPDATE NO ACTION`,
    );

    await queryRunner.query(
      `ALTER TABLE "film_location_location"
      ADD CONSTRAINT "FK_fa0228f23151dfda69261fbd6e8"
      FOREIGN KEY ("locationId") REFERENCES "location"("id")
      ON DELETE CASCADE
      ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "film_location_location" DROP CONSTRAINT "FK_fa0228f23151dfda69261fbd6e8"`,
    );
    await queryRunner.query(
      `ALTER TABLE "film_location_location" DROP CONSTRAINT "FK_8bc8b108983b4e72e44f9d034c1"`,
    );
    await queryRunner.query(
      `ALTER TABLE "film_people_person" DROP CONSTRAINT "FK_3a8e80dbf6c14a415d0b6172187"`,
    );
    await queryRunner.query(
      `ALTER TABLE "film_people_person" DROP CONSTRAINT "FK_b2d11db1ffb3745f18b59af4d0a"`,
    );
    await queryRunner.query(
      `ALTER TABLE "location_residents_person" DROP CONSTRAINT "FK_7a0418df5a354d3a3f7ba4e3ff5"`,
    );
    await queryRunner.query(
      `ALTER TABLE "location_residents_person" DROP CONSTRAINT "FK_2cd22b9ab52b611de616c76f17b"`,
    );
    await queryRunner.query(`DROP INDEX "IDX_fa0228f23151dfda69261fbd6e"`);
    await queryRunner.query(`DROP INDEX "IDX_8bc8b108983b4e72e44f9d034c"`);
    await queryRunner.query(`DROP TABLE "film_location_location"`);
    await queryRunner.query(`DROP INDEX "IDX_3a8e80dbf6c14a415d0b617218"`);
    await queryRunner.query(`DROP INDEX "IDX_b2d11db1ffb3745f18b59af4d0"`);
    await queryRunner.query(`DROP TABLE "film_people_person"`);
    await queryRunner.query(`DROP INDEX "IDX_7a0418df5a354d3a3f7ba4e3ff"`);
    await queryRunner.query(`DROP INDEX "IDX_2cd22b9ab52b611de616c76f17"`);
    await queryRunner.query(`DROP TABLE "location_residents_person"`);
  }
}
