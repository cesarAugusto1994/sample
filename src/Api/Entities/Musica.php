<?php
/**
 * Created by PhpStorm.
 * User: cesar
 * Date: 15/12/16
 * Time: 10:32
 */

namespace Api\Entities;

use Doctrine\ORM\Mapping as ORM;

/**
 * Class Musica
 * @package Api\Entities
 * @ORM\Table(name="musica")
 * @ORM\Entity()
 */
class Musica implements \JsonSerializable
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
     * @ORM\Column(name="numero", type="integer", nullable=true)
     * @var integer
     */
    private $numero;

    /**
     * @ORM\Column(name="letra", type="text")
     * @var string
     */
    private $letra;

    /**
     * @ORM\ManyToOne(targetEntity="Categoria", inversedBy="musicas")
     * @ORM\JoinColumn(referencedColumnName="id", name="categoria_id")
     * @var Categoria
     */
    private $categoria;

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
     * @return int
     */
    public function getNumero()
    {
        return $this->numero;
    }

    /**
     * @param int $numero
     */
    public function setNumero($numero)
    {
        $this->numero = $numero;
    }

    /**
     * @return Categoria
     */
    public function getCategoria()
    {
        return $this->categoria;
    }

    /**
     * @param Categoria $categoria
     */
    public function setCategoria($categoria)
    {
        $this->categoria = $categoria;
    }

    /**
     * @return string
     */
    public function getLetra()
    {
        return $this->letra;
    }

    /**
     * @param string $letra
     */
    public function setLetra($letra)
    {
        $this->letra = $letra;
    }

    /**
     * @return array
     */
    public function jsonSerialize()
    {
        return [
            'id' => $this->id,
            'nome' => $this->nome,
            'numero' => $this->numero,
            'numero_formatado' => str_pad($this->numero, 4, '0', STR_PAD_LEFT),
            'letra' => $this->letra
        ];
    }
}