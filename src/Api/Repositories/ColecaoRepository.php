<?php

/**
 * Created by PhpStorm.
 * User: cesar
 * Date: 14/12/16
 * Time: 10:48
 */

namespace Api\Repositories;

use Api\Entities\Colecao;
use Doctrine\ORM\EntityRepository;

/**
 * Class ColecaoRepository
 * @package Api\Repositories
 */
class ColecaoRepository extends EntityRepository
{
    /**
     * @param Colecao $colecao
     */
    public function save(Colecao $colecao)
    {
        $this->getEntityManager()->persist($colecao);
        $this->getEntityManager()->flush($colecao);
    }
}