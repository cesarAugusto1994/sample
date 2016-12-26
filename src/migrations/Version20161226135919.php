<?php

namespace Bundle\Entities;

use Doctrine\DBAL\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
class Version20161226135919 extends AbstractMigration
{
    /**
     * @param Schema $schema
     */
    public function up(Schema $schema)
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE categoria (id INT AUTO_INCREMENT NOT NULL, colecao_id INT DEFAULT NULL, nome VARCHAR(255) NOT NULL, imagem VARCHAR(255) NOT NULL, INDEX IDX_4E10122DD43D97B8 (colecao_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE usuario (id INT AUTO_INCREMENT NOT NULL, nome VARCHAR(255) NOT NULL, cadastro DATETIME NOT NULL, ativo TINYINT(1) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE colecao (id INT AUTO_INCREMENT NOT NULL, nome VARCHAR(255) NOT NULL, descricao VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE musica (id INT AUTO_INCREMENT NOT NULL, categoria_id INT DEFAULT NULL, nome VARCHAR(255) NOT NULL, numero INT DEFAULT NULL, letra LONGTEXT NOT NULL, INDEX IDX_7E7344EF3397707A (categoria_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE anexos (id INT AUTO_INCREMENT NOT NULL, musica_id INT DEFAULT NULL, usuario_id INT DEFAULT NULL, nome VARCHAR(255) NOT NULL, cadastro DATETIME NOT NULL, ativo TINYINT(1) NOT NULL, INDEX IDX_291BDD4799E6F854 (musica_id), INDEX IDX_291BDD47DB38439E (usuario_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('ALTER TABLE categoria ADD CONSTRAINT FK_4E10122DD43D97B8 FOREIGN KEY (colecao_id) REFERENCES colecao (id)');
        $this->addSql('ALTER TABLE musica ADD CONSTRAINT FK_7E7344EF3397707A FOREIGN KEY (categoria_id) REFERENCES categoria (id)');
        $this->addSql('ALTER TABLE anexos ADD CONSTRAINT FK_291BDD4799E6F854 FOREIGN KEY (musica_id) REFERENCES musica (id)');
        $this->addSql('ALTER TABLE anexos ADD CONSTRAINT FK_291BDD47DB38439E FOREIGN KEY (usuario_id) REFERENCES usuario (id)');
    }

    /**
     * @param Schema $schema
     */
    public function down(Schema $schema)
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE musica DROP FOREIGN KEY FK_7E7344EF3397707A');
        $this->addSql('ALTER TABLE anexos DROP FOREIGN KEY FK_291BDD47DB38439E');
        $this->addSql('ALTER TABLE categoria DROP FOREIGN KEY FK_4E10122DD43D97B8');
        $this->addSql('ALTER TABLE anexos DROP FOREIGN KEY FK_291BDD4799E6F854');
        $this->addSql('DROP TABLE categoria');
        $this->addSql('DROP TABLE usuario');
        $this->addSql('DROP TABLE colecao');
        $this->addSql('DROP TABLE musica');
        $this->addSql('DROP TABLE anexos');
    }
}
