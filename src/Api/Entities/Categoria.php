<?php
/**
 * Created by PhpStorm.
 * User: cesar
 * Date: 15/12/16
 * Time: 09:21
 */

namespace Api\Entities;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;

/**
 * Class Categoria
 * @package Api\Entities
 * @ORM\Table(name="categoria")
 * @ORM\Entity(repositoryClass="Api\Repositories\CategoriaRepository")
 */
class Categoria implements \JsonSerializable
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
     * @ORM\ManyToOne(targetEntity="Colecao", inversedBy="categoria")
     * @ORM\JoinColumn(referencedColumnName="id", name="colecao_id")
     * @var Colecao
     */
    private $colecao;

    /**
     * @ORM\OneToMany(targetEntity="Musica", mappedBy="categoria")
     * @var ArrayCollection
     */
    private $musicas;

    /**
     * @ORM\Column(name="imagem", type="string")
     * @var string
     */
    private $imagem;

    /**
     * Categoria constructor.
     */
    public function __construct()
    {
        $this->musicas = new ArrayCollection();
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
     * @return Colecao
     */
    public function getColecao()
    {
        return $this->colecao;
    }

    /**
     * @param Colecao $colecao
     */
    public function setColecao($colecao)
    {
        $this->colecao = $colecao;
    }

    /**
     * @return ArrayCollection
     */
    public function getMusicas()
    {
        return $this->musicas;
    }

    /**
     * @param ArrayCollection $musicas
     */
    public function setMusicas($musicas)
    {
        $this->musicas = $musicas;
    }

    /**
     * @return string
     */
    public function getImagem()
    {
        return $this->imagem;
    }

    /**
     * @param string $imagem
     */
    public function setImagem($imagem)
    {
        $this->imagem = $imagem;
    }

    /**
     * @return array
     */
    public function jsonSerialize()
    {
        return [
            'id' => $this->id,
            'nome' => $this->nome,
            'musicas' => $this->musicas->getValues(),
            'imagem' => $this->imagem,
            'colecao' => $this->colecao->getNome()
        ];
    }
}