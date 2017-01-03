<?php
/**
 * Created by PhpStorm.
 * User: cesar
 * Date: 03/01/17
 * Time: 10:15
 */

$post = $app['controllers_factory'];

$post->post('/api/favoritos/add-remove', function (\Symfony\Component\HttpFoundation\Request $request) use ($app) {

    $request->request->set('usuario', 1);

    if (empty($request->request->all())) {
        return new \Symfony\Component\HttpFoundation\JsonResponse('Nenhum dado foi enviado.');
    }

    if (empty($request->request->get('usuario'))) {
        return new \Symfony\Component\HttpFoundation\JsonResponse('Usuario nao informado.');
    }

    if (empty($request->request->get('musica'))) {
        return new \Symfony\Component\HttpFoundation\JsonResponse('Musica nao informada.');
    }

    $usuario = $app['usuario.repository']->find($request->request->get('usuario'));
    $musica = $app['musica.repository']->find($request->request->get('musica'));

    $favoritos = $app['favoritos.repository']->findOneBy([
        'usuario' => $usuario,
        'musica' => $musica
    ]);

    if (!empty($favoritos)) {

        $app['db']->beginTransaction();
        $app['favoritos.repository']->remove($favoritos);
        $app['db']->commit();

        return $app->json(['msg' => 'Removido de seus favoritos'], \Symfony\Component\HttpFoundation\Response::HTTP_OK);
    }

    $favoritos = new \Api\Entities\Favoritos();
    $favoritos->setUsuario($usuario);
    $favoritos->setMusica($musica);

    $app['db']->beginTransaction();
    $app['favoritos.repository']->save($favoritos);
    $app['db']->commit();

    return $app->json(['msg' => 'Adicionado a seus favoritos'], \Symfony\Component\HttpFoundation\Response::HTTP_CREATED);
});

return $post;