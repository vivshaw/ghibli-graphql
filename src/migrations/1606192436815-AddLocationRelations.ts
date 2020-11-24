import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddLocationRelations1606192436815 implements MigrationInterface {
  name = 'AddLocationRelations1606192436815';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "film_locations_location"
      (
        "filmId" uuid NOT NULL,
        "locationId" uuid NOT NULL,
        CONSTRAINT "PK_98450c09b5360558fe0ff0c9be5" PRIMARY KEY ("filmId", "locationId")
      )`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_8922ece062b49baf9add74b35c" ON "film_locations_location" ("filmId") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_058ef46ac589123f456673674c" ON "film_locations_location" ("locationId") `,
    );
    await queryRunner.query(
      `ALTER TABLE "film_locations_location"
      ADD CONSTRAINT "FK_8922ece062b49baf9add74b35ca"
      FOREIGN KEY ("filmId") REFERENCES "film"("id")
      ON DELETE CASCADE
      ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "film_locations_location"
      ADD CONSTRAINT "FK_058ef46ac589123f456673674cf"
      FOREIGN KEY ("locationId") REFERENCES "location"("id")
      ON DELETE CASCADE
      ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "film_locations_location" DROP CONSTRAINT "FK_058ef46ac589123f456673674cf"`,
    );
    await queryRunner.query(
      `ALTER TABLE "film_locations_location" DROP CONSTRAINT "FK_8922ece062b49baf9add74b35ca"`,
    );
    await queryRunner.query(`DROP INDEX "IDX_058ef46ac589123f456673674c"`);
    await queryRunner.query(`DROP INDEX "IDX_8922ece062b49baf9add74b35c"`);
    await queryRunner.query(`DROP TABLE "film_locations_location"`);
  }
}
