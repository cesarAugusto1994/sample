<?php
/**
 * Created by PhpStorm.
 * User: cesar
 * Date: 15/12/16
 * Time: 14:53
 */

namespace Api\Repositories;

use Api\Entities\Categoria;
use Doctrine\ORM\EntityRepository;

/**
 * Class CategoriasRepository
 * @package Api\Repositories
 */
class CategoriaRepository extends EntityRepository
{
    /**
     * @param Categoria $categoria
     */
    public function save(Categoria $categoria)
    {
        $this->_em->persist($categoria);
        $this->_em->flush($categoria);
    }
}