<?php

namespace Bundle\Entities;

use Doctrine\DBAL\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
class Version20170103163555 extends AbstractMigration
{
    /**
     * @param Schema $schema
     */
    public function up(Schema $schema)
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE tipo (id INT AUTO_INCREMENT NOT NULL, nome VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('ALTER TABLE anexos ADD tipo_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE anexos ADD CONSTRAINT FK_291BDD47A9276E6C FOREIGN KEY (tipo_id) REFERENCES tipo (id)');
        $this->addSql('CREATE INDEX IDX_291BDD47A9276E6C ON anexos (tipo_id)');
    }

    /**
     * @param Schema $schema
     */
    public function down(Schema $schema)
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE anexos DROP FOREIGN KEY FK_291BDD47A9276E6C');
        $this->addSql('DROP TABLE tipo');
        $this->addSql('DROP INDEX IDX_291BDD47A9276E6C ON anexos');
        $this->addSql('ALTER TABLE anexos DROP tipo_id');
    }
}
