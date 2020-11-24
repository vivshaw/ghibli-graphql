import { MigrationInterface, QueryRunner } from 'typeorm';

export class FixFilmSpeciesJoin1606190896493 implements MigrationInterface {
  name = 'FixFilmSpeciesJoin1606190896493';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "film_species_species"
      (
        "filmId" uuid NOT NULL,
        "speciesId" uuid NOT NULL,
        CONSTRAINT "PK_46c85de82b1e057207f45783448" PRIMARY KEY ("filmId", "speciesId")
      )`,
    );

    await queryRunner.query(
      `CREATE INDEX "IDX_5dca805e1b117016b196e64305" ON "film_species_species" ("filmId") `,
    );

    await queryRunner.query(
      `CREATE INDEX "IDX_3af75337b121624486cf179bf1" ON "film_species_species" ("speciesId") `,
    );

    await queryRunner.query(
      `ALTER TABLE "film_species_species"
      ADD CONSTRAINT "FK_5dca805e1b117016b196e64305b"
      FOREIGN KEY ("filmId") REFERENCES "film"("id")
      ON DELETE CASCADE
      ON UPDATE NO ACTION`,
    );

    await queryRunner.query(
      `ALTER TABLE "film_species_species"
      ADD CONSTRAINT "FK_3af75337b121624486cf179bf13"
      FOREIGN KEY ("speciesId") REFERENCES "species"("id")
      ON DELETE CASCADE
      ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "film_species_species" DROP CONSTRAINT "FK_3af75337b121624486cf179bf13"`,
    );
    await queryRunner.query(
      `ALTER TABLE "film_species_species" DROP CONSTRAINT "FK_5dca805e1b117016b196e64305b"`,
    );
    await queryRunner.query(`DROP INDEX "IDX_3af75337b121624486cf179bf1"`);
    await queryRunner.query(`DROP INDEX "IDX_5dca805e1b117016b196e64305"`);
    await queryRunner.query(`DROP TABLE "film_species_species"`);
  }
}
