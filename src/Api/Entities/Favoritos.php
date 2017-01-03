<?php
/**
 * Created by PhpStorm.
 * User: cesar
 * Date: 03/01/17
 * Time: 10:04
 */

namespace Api\Entities;

use Doctrine\ORM\Mapping as ORM;

/**
 * Class Favoritos
 * @package Api\Entities
 * @ORM\Entity(repositoryClass="Api\Repositories\FavoritosRepository")
 * @ORM\Table(name="favoritos")
 */
class Favoritos
{
    /**
     * @ORM\Id()
     * @ORM\Column(type="integer")
     * @ORM\GeneratedValue(strategy="AUTO")
     * @var integer
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity="Usuario")
     * @ORM\JoinColumn(referencedColumnName="id", name="usuario_id")
     * @var Usuario
     */
    private $usuario;

    /**
     * @ORM\ManyToOne(targetEntity="Musica")
     * @ORM\JoinColumn(referencedColumnName="id", name="musica_id")
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
     * @return Usuario
     */
    public function getUsuario()
    {
        return $this->usuario;
    }

    /**
     * @param Usuario $usuario
     */
    public function setUsuario($usuario)
    {
        $this->usuario = $usuario;
    }

    /**
     * @return mixed
     */
    public function getMusica()
    {
        return $this->musica;
    }

    /**
     * @param mixed $musica
     */
    public function setMusica($musica)
    {
        $this->musica = $musica;
    }
}