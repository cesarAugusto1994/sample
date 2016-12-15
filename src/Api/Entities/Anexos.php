<?php
/**
 * Created by PhpStorm.
 * User: cesar
 * Date: 15/12/16
 * Time: 16:02
 */

namespace Api\Entities;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * Class Anexos
 * @package Api\Entities
 * @ORM\Table(name="anexos")
 * @ORM\Entity()
 */
class Anexos implements \JsonSerializable
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue(strategy="AUTO")
     * @ORM\Column(type="integer")
     * @var integer
     */
    private $id;

    /**
     * @ORM\Column(name="nome", type="string"))
     * @var string
     */
    private $nome;

    /**
     * @ORM\ManyToOne(targetEntity="Musica")
     * @ORM\JoinColumn(name="musica_id", referencedColumnName="id")
     * @var Musica
     */
    private $musica;

    /**
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @return string
     */
    public function getNome()
    {
        return $this->nome;
    }

    /**
     * @param string $nome
     */
    public function setNome($nome)
    {
        $this->nome = $nome;
    }

    /**
     * @return Musica
     */
    public function getMusica()
    {
        return $this->musica;
    }

    /**
     * @param Musica $musica
     */
    public function setMusica($musica)
    {
        $this->musica = $musica;
    }

    /**
     * @return array
     */
    public function jsonSerialize()
    {
        return [
            'id' => $this->id,
            'nome' => $this->nome,
        ];
    }
}