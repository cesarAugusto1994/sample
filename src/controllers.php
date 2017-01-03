<?php

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

//Request::setTrustedProxies(array('127.0.0.1'));

/**
 * Views
 */

$app->get('/', function () use ($app) {
    return $app['twig']->render('index.html.twig', array());
})->bind('homepage');

$app->get('/login', function () use ($app) {
    return $app['twig']->render('login.html.twig', array());
})->bind('login');

$app->get('/colecao/{colecao}', function ($colecao) use ($app) {

    if (!empty($colecao)) {
        $colecao = $app['colecao.repository']->findBy(['nome' => str_replace('-', ' ', $colecao)]);
    }

    return $app['twig']->render('list.html.twig', array('colecao' => !empty($colecao[0]) ? $colecao[0] : null));
})->bind('list')->value('colecao', 'todas');

$app->get('/categoria/{categoria}', function ($categoria) use ($app) {

    if (!empty($categoria)) {
        $categoria = $app['categoria.repository']->findBy(['nome' => str_replace('-', ' ', $categoria)]);
    }

    return $app['twig']->render('views.html.twig', array('categoria' => !empty($categoria[0]) ? $categoria[0] : null));

})->value('categoria', 'todas');

$app->get('/musica/{musica}', function ($musica) use ($app) {

    if (!empty($musica)) {
        $musica = $app['musica.repository']->findBy(['nome' => str_replace('-', ' ', $musica)]);
    }

    return $app['twig']->render('single.html.twig', array('musica' => !empty($musica[0]) ? $musica[0]->getId() : null));

})->value('musica', 'todas');


$app->get('/finder', function () use ($app) {
    return $app['twig']->render('finder.html.twig', array());
});

$app->get('/form-musicas', function () use ($app) {
    return $app['twig']->render('form-musicas.html.twig', array());
});

$app->get('/favoritos', function () use ($app) {
    return $app['twig']->render('favoritos.html.twig', array());
});

/***********************************************************
 * Api
 **********************************************************/
$app->get('/api/colecoes', function () use ($app) {
    $colecoes = $app['colecao.repository']->findBy([], ['nome' => 'ASC']);
    return new \Symfony\Component\HttpFoundation\JsonResponse($colecoes);
});

$app->get('/api/categorias/{colecao}', function ($colecao) use ($app) {

    $parametros = [];

    if (!is_null($colecao)) {
        $parametros['colecao'] = $colecao;
    }

    $categoria = $app['categoria.repository']->findBy($parametros, ['nome' => 'ASC']);
    return new \Symfony\Component\HttpFoundation\JsonResponse($categoria);

})->value('colecao', null);

$app->get('/api/musicas/{categoria}', function ($categoria) use ($app) {

    $parametros = [];

    if (!is_null($categoria)) {
        $parametros['categoria'] = $categoria;
    }

    $musica = $app['musica.repository']->findBy($parametros, ['numero' => 'ASC']);
    return new \Symfony\Component\HttpFoundation\JsonResponse($musica);
});

$app->get('/api/categoria/{categoria}/single', function ($categoria) use ($app) {
    $categoria = $app['categoria.repository']->find($categoria);
    return new \Symfony\Component\HttpFoundation\JsonResponse($categoria);
});

$app->get('/api/musica/{musica}', function ($musica) use ($app) {
    $musica = $app['musica.repository']->find($musica);
    return new \Symfony\Component\HttpFoundation\JsonResponse($musica);
});

$app->get('/api/anexos/{musica}', function ($musica) use ($app) {
    $anexos = $app['anexo.repository']->findBy(['musica' => $musica]);
    return new \Symfony\Component\HttpFoundation\JsonResponse($anexos);
});

$app->get('/api/categoria/criar/{colecao}', function ($colecao) use ($app) {

    $colecao = $app['colecao.repository']->find($colecao);

    $categoria = new \Api\Entities\Categoria();
    $categoria->setNome(substr(md5(microtime()), 0, 3));
    $categoria->setImagem('background' . rand(1, 3) . '.jpg');
    $categoria->setColecao($colecao);

    $app['categoria.repository']->save($categoria);

    return new \Symfony\Component\HttpFoundation\JsonResponse('Categoria ' . $categoria->getNome() . ' criada.');
});

/*
$app->error(function (\Exception $e, Request $request, $code) use ($app) {
    if ($app['debug']) {
        return;
    }

    // 404.html, or 40x.html, or 4xx.html, or error.html
    $templates = array(
        'errors/'.$code.'.html.twig',
        'errors/'.substr($code, 0, 2).'x.html.twig',
        'errors/'.substr($code, 0, 1).'xx.html.twig',
        'errors/default.html.twig',
    );

    return new Response($app['twig']->resolveTemplate($templates)->render(array('code' => $code)), $code);
});
*/

$app->get('/api/favorito', function (Request $request) use ($app) {

    $request->request->set('usuario', 1);

    if (empty($request->get('usuario'))) {
        return new \Symfony\Component\HttpFoundation\JsonResponse('Usuario nao informado.');
    }

    if (empty($request->get('musica'))) {
        return new \Symfony\Component\HttpFoundation\JsonResponse('Musica nao informada.');
    }

    $usuario = $app['usuario.repository']->find($request->get('usuario'));
    $musica = $app['musica.repository']->find($request->get('musica'));

    $favorito = $app['favoritos.repository']->findOneBy([
        'usuario' => $usuario,
        'musica' => $musica
    ]);

    return new JsonResponse($favorito ? true : false);
});

$app->get('/api/favoritos', function (Request $request) use ($app) {

    $request->request->set('usuario', 1);

    if (empty($request->get('usuario'))) {
        return new \Symfony\Component\HttpFoundation\JsonResponse('Usuario nao informado.');
    }


    $usuario = $app['usuario.repository']->find($request->get('usuario'));

    $favoritos = $app['favoritos.repository']->findBy([
        'usuario' => $usuario,
    ]);

    $favoritos = array_map(function ($musica) {
        return $musica->getMusica();
    }, $favoritos);

    return new JsonResponse($favoritos);
});

$app->mount('', include __DIR__ . '/controllers/post.php');