<?php

/**
 * Created by PhpStorm.
 * User: cesar
 * Date: 14/12/16
 * Time: 10:29
 */

namespace Api\Entities;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;

/**
 * Class Colecao
 * @package Api\Entities
 * @ORM\Table(name="colecao")
 * @ORM\Entity(repositoryClass="Api\Repositories\ColecaoRepository")
 */
class Colecao implements \JsonSerializable
{
    /**
     * @ORM\Id()
     * @ORM\Column(type="integer")
     * @ORM\GeneratedValue(strategy="AUTO")
     * @var integer
     */
    private $id;

    /**
     * @ORM\Column(name="nome", type="string")
     * @var string
     */
    private $nome;

    /**
     * @ORM\Column(name="descricao", type="string")
     * @var string
     */
    private $descricao;

    /**
     * @ORM\OneToMany(targetEntity="Categoria", mappedBy="colecao")
     * @var ArrayCollection
     */
    private $categoria;

    /**
     * Colecao constructor.
     */
    public function __construct()
    {
        $this->categoria = new ArrayCollection();
    }

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
     * @return string
     */
    public function getDescricao()
    {
        return $this->descricao;
    }

    /**
     * @param string $descricao
     */
    public function setDescricao($descricao)
    {
        $this->descricao = $descricao;
    }

    /**
     * @return ArrayCollection
     */
    public function getCategoria()
    {
        return $this->categoria;
    }

    /**
     * @return array
     */
    public function jsonSerialize()
    {
        return [
            'id' => $this->id,
            'nome' => $this->nome,
            'descricao' => $this->descricao
        ];
    }
}