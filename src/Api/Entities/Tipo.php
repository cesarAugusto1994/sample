<?php
/**
 * Created by PhpStorm.
 * User: cesar
 * Date: 03/01/17
 * Time: 16:30
 */

namespace Api\Entities;

use Doctrine\ORM\Mapping as ORM;

/**
 * Class Tipo
 * @package Api\Entities
 * @ORM\Entity()
 * @ORM\Table(name="tipo")
 */
class Tipo implements \JsonSerializable
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue(strategy="AUTO")
     * @ORM\Column(type="integer")
     * @var integer
     */
    private $id;

    /**
     * @ORM\Column(name="nome", type="string")
     * @var string
     */
    private $nome;

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
     * @return array
     */
    public function jsonSerialize()
    {
        return [
            "id" => $this->id,
            "nome" => $this->nome,
        ];
    }
}