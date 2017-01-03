<?php
/**
 * Created by PhpStorm.
 * User: cesar
 * Date: 14/12/16
 * Time: 11:54
 */

$app['colecao.repository'] = function () use ($app) {
    return $app['orm.em']->getRepository(\Api\Entities\Colecao::class);
};

$app['categoria.repository'] = function () use ($app) {
    return $app['orm.em']->getRepository(\Api\Entities\Categoria::class);
};

$app['musica.repository'] = function () use ($app) {
    return $app['orm.em']->getRepository(\Api\Entities\Musica::class);
};

$app['anexo.repository'] = function () use ($app) {
    return $app['orm.em']->getRepository(\Api\Entities\Anexos::class);
};

$app['favoritos.repository'] = function () use ($app) {
    return $app['orm.em']->getRepository(\Api\Entities\Favoritos::class);
};

$app['usuario.repository'] = function () use ($app) {
    return $app['orm.em']->getRepository(\Api\Entities\Usuario::class);
};
